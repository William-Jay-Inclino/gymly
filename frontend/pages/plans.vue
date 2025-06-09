<template>
    <div class="max-w-5xl mx-auto py-10 px-4">
        <div class="flex items-center justify-between mb-8">
            <!-- <h1 class="text-2xl font-bold flex items-center gap-2">
                <Layers class="w-7 h-7 text-primary" />
                Subscription Plans
            </h1> -->
            <button
                class="btn btn-primary flex items-center gap-2"
                @click="openAddModal"
                :disabled="isLimitReached"
                :class="{ 'opacity-50 cursor-not-allowed': isLimitReached }"
            >
                <Plus class="w-4 h-4" /> Add Plan
            </button>
        </div>
        <div class="mb-4 flex items-center gap-2 text-xs text-base-content/60">
            <span>Manage your gym's subscription plans here.</span>
            <span v-if="limit" class="badge badge-outline badge-sm">
                {{ plans.length }}/{{ limit.value }} plans
            </span>
        </div>
        <div v-if="isNearLimit && !isLimitReached" class="text-xs text-warning flex items-center gap-1 mb-2">
            <span class="w-3 h-3"><svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            You are approaching your plan limit ({{ plans.length }}/{{ limit?.value }})
        </div>
        <div v-if="isLimitReached" class="text-xs text-error flex items-center gap-1 mb-2">
            <span class="w-3 h-3"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg></span>
            Plan limit reached! Cannot add more plans. Contact admin to increase limit.
        </div>
        <div v-if="isLoading" class="flex justify-center py-10">
            <span class="loading loading-spinner loading-lg"></span>
        </div>
        <div v-else>
            <div v-if="plans.length === 0" class="text-center text-base-content/60 py-10">
                <FileWarning class="w-8 h-8 mx-auto mb-2 text-warning" />
                <div>No plans found. Click "Add Plan" to create one.</div>
            </div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="plan in plans" :key="plan.id" class="bg-white rounded-xl shadow p-6 flex flex-col relative group">
                    <div class="flex items-center gap-2 mb-2">
                        <BadgeDollarSign class="w-6 h-6 text-primary" />
                        <span class="font-semibold text-lg truncate">{{ plan.name }}</span>
                    </div>
                    <div class="text-3xl font-bold text-primary mb-2">
                        ₱{{ plan.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                    </div>
                    <div class="text-base-content/70 mb-4 min-h-[40px]">
                        {{ plan.description || 'No description provided.' }}
                    </div>
                    <ul class="mb-4 space-y-1 text-sm">
                        <li v-if="plan.num_of_days && !plan.num_of_sessions">
                            <CalendarDays class="inline w-4 h-4 mr-1 text-primary" />
                            <span class="font-medium">{{ plan.num_of_days }}</span> days
                        </li>
                        <li v-else-if="plan.num_of_sessions && !plan.num_of_days">
                            <ListChecks class="inline w-4 h-4 mr-1 text-primary" />
                            <span class="font-medium">{{ plan.num_of_sessions }}</span> sessions
                        </li>
                    </ul>
                    <div class="flex gap-2 mt-auto pt-2">
                        <button class="btn btn-sm btn-outline flex-1 flex items-center gap-1" @click="openEditModal(plan)">
                            <Pencil class="w-4 h-4" /> Edit
                        </button>
                        <button class="btn btn-sm btn-outline btn-error flex-1 flex items-center gap-1" @click="onDeletePlan(plan)">
                            <Trash2 class="w-4 h-4" /> Delete
                        </button>
                    </div>
                    <span class="absolute top-4 right-4 text-xs text-base-content/40">
                        <Clock class="inline w-4 h-4 mr-1" />
                        {{ formatDate(plan.created_at) }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Add/Edit Modal -->
        <Transition name="modal" appear>
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-4">
                    <h3 class="font-semibold text-lg mb-2">
                        {{ isEditMode ? 'Edit Plan' : 'Add Plan' }}
                    </h3>
                    <form @submit.prevent="isEditMode ? onEditPlan() : onAddPlan()" class="space-y-3">
                        <input v-model="modalForm.name" type="text" placeholder="Plan Name" class="input input-bordered w-full" required />
                        <textarea v-model="modalForm.description" placeholder="Description" class="textarea textarea-bordered w-full" rows="2"></textarea>
                        <input v-model.number="modalForm.price" type="number" min="0" step="0.01" placeholder="Price" class="input input-bordered w-full" required />
                        <div class="flex gap-2">
                            <input
                                v-model.number="modalForm.num_of_days"
                                type="number"
                                min="0"
                                placeholder="Days"
                                class="input input-bordered w-full"
                                :disabled="!!modalForm.num_of_sessions && modalForm.num_of_sessions > 0"
                            />
                            <input
                                v-model.number="modalForm.num_of_sessions"
                                type="number"
                                min="0"
                                placeholder="Sessions"
                                class="input input-bordered w-full"
                                :disabled="!!modalForm.num_of_days && modalForm.num_of_days > 0"
                            />
                        </div>
                        <div class="flex gap-2 mt-2">
                            <button class="btn btn-primary flex-1" type="submit" :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="loading loading-spinner loading-xs mr-2"></span>
                                {{ isEditMode ? 'Update' : 'Add' }}
                            </button>
                            <button class="btn btn-ghost flex-1" type="button" @click="closeModal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Layers, Plus, BadgeDollarSign, CalendarDays, ListChecks, Pencil, Trash2, FileWarning, Clock } from 'lucide-vue-next'
import { get_plans, create_plan, update_plan, delete_plan } from '~/core/plan/plan.api'
import { useGlobalStore } from '~/core/global.store'
import type { Plan, CreatePlanInput, UpdatePlanInput } from '~/core/plan/plan.types'
import { showDeleteConfirm } from '~/utils/sweetalert'
import type { GymLimit } from '~/core/gym-limit/gym-limit'

definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

const { gym_id } = useGlobalStore()

const limit = ref<GymLimit>()
const isLoading = ref(true)
const plans = ref<Plan[]>([])
const showModal = ref(false)
const isEditMode = ref(false)
const isSubmitting = ref(false)
const modalForm = ref<Partial<CreatePlanInput & { id?: string }>>({
    name: '',
    description: '',
    price: 0,
    num_of_days: null,
    num_of_sessions: null,
})

function formatDate(dateStr: string) {
    const d = new Date(dateStr)
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

function openAddModal() {
    isEditMode.value = false
    modalForm.value = {
        name: '',
        description: '',
        price: 0,
        num_of_days: null,
        num_of_sessions: null,
    }
    showModal.value = true
}

function openEditModal(plan: Plan) {
    isEditMode.value = true
    modalForm.value = {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        price: plan.price,
        num_of_days: plan.num_of_days,
        num_of_sessions: plan.num_of_sessions,
    }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    isSubmitting.value = false
}

async function fetchPlans() {
    if(!gym_id) return
    isLoading.value = true
    const response = await get_plans({ gym_id })
    plans.value = response.plans 
    limit.value = response.gym_limit || undefined
    isLoading.value = false
}

async function onAddPlan() {
    if (!gym_id) return
    isSubmitting.value = true
    const res = await create_plan({
        gym_id,
        name: modalForm.value.name!,
        description: modalForm.value.description,
        price: modalForm.value.price!,
        num_of_days: modalForm.value.num_of_days,
        num_of_sessions: modalForm.value.num_of_sessions,
    })
    isSubmitting.value = false
    closeModal()
    await fetchPlans()
}

async function onEditPlan() {
    if (!modalForm.value.id) return
    isSubmitting.value = true
    const res = await update_plan(modalForm.value.id, {
        name: modalForm.value.name!,
        description: modalForm.value.description,
        price: modalForm.value.price!,
        num_of_days: modalForm.value.num_of_days,
        num_of_sessions: modalForm.value.num_of_sessions,
    })
    isSubmitting.value = false
    closeModal()
    await fetchPlans()
}

async function onDeletePlan(plan: Plan) {
    const confirmed = await showDeleteConfirm(
        "Delete Plan?",
        `Are you sure you want to delete "${plan.name}"?`
    )
    if (confirmed) {
        await delete_plan(plan.id)
        await fetchPlans()
    }
}

const isLimitReached = computed(() => {
    if (!limit.value) return false
    return plans.value.length >= limit.value.value
})

const isNearLimit = computed(() => {
    if (!limit.value) return false
    const percentage = plans.value.length / limit.value.value
    return percentage >= 0.8 && !isLimitReached.value
})

onMounted(fetchPlans)
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
    transition: all 0.25s cubic-bezier(.4,0,.2,1);
}
.modal-enter-from, .modal-leave-to {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
}
.modal-enter-to, .modal-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>