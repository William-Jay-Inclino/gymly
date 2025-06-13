<template>
    <div class="max-w-5xl mx-auto py-8 px-2 sm:px-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 class="text-2xl font-bold text-primary">Subscription Plans</h1>
            <button
                class="btn btn-primary flex items-center gap-2 w-full sm:w-auto"
                @click="open_add_modal"
                :disabled="is_limit_reached"
                :class="{ 'opacity-50 cursor-not-allowed': is_limit_reached }"
            >
                <Plus class="w-4 h-4" /> Add Plan
            </button>
        </div>
        <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-base-content/60">
            <span>Manage your gym's subscription plans here.</span>
            <span v-if="limit" class="badge badge-outline badge-sm">
                {{ plans.length }}/{{ limit.value }} plans
            </span>
        </div>
        <div
            v-if="is_near_limit && !is_limit_reached"
            class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-warning/20 bg-warning/10 text-warning text-xs"
        >
            <AlertTriangle class="w-4 h-4" />
            <span>You are approaching your plan limit ({{ plans.length }}/{{ limit?.value }})</span>
        </div>
        <div
            v-if="is_limit_reached"
            class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-error/20 bg-error/10 text-error text-xs"
        >
            <AlertCircle class="w-4 h-4" />
            <span>Plan limit reached! Cannot add more plans. Contact admin to increase limit.</span>
        </div>
        <div v-if="is_loading" class="flex justify-center py-16 text-base-content/60">
            <Spinner />
            <!-- <span class="loading loading-spinner loading-lg"></span> -->
        </div>
        <div v-else>
            <div v-if="plans.length === 0" class="text-center text-base-content/60 py-16">
                <FileWarning class="w-10 h-10 mx-auto mb-3 text-warning" />
                <div class="text-base">No plans found. Click "Add Plan" to create one.</div>
            </div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="plan in plans"
                    :key="plan.id"
                    class="bg-base-100 rounded-xl shadow-md p-6 flex flex-col relative group hover:shadow-xl transition-shadow"
                >
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
                        <button class="btn btn-sm btn-outline flex-1 flex items-center gap-1" @click="open_edit_modal(plan)">
                            <Pencil class="w-4 h-4" /> Edit
                        </button>
                        <button class="btn btn-sm btn-outline btn-error flex-1 flex items-center gap-1" @click="on_delete_plan(plan)">
                            <Trash2 class="w-4 h-4" /> Delete
                        </button>
                    </div>
                    <span class="absolute top-4 right-4 text-xs text-base-content/40 flex items-center gap-1">
                        <Clock class="inline w-4 h-4" />
                        {{ format_date(plan.created_at) }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Add/Edit Modal -->
        <PlanModal
            :show="show_modal"
            :is_edit_mode="is_edit_mode"
            :is_submitting="is_submitting"
            :form="modal_form"
            @close="close_modal"
            @submit="is_edit_mode ? on_edit_plan() : on_add_plan()"
            @update:form="val => modal_form = val"
        />
    </div>
</template>

<script setup lang="ts">
import {
    Plus,
    BadgeDollarSign,
    CalendarDays,
    ListChecks,
    Pencil,
    Trash2,
    FileWarning,
    Clock,
    AlertTriangle,
    AlertCircle
} from 'lucide-vue-next'
import { get_plans, create_plan, update_plan, delete_plan } from '~/core/plan/plan.api'
import { useGlobalStore } from '~/core/global.store'
import type { Plan, CreatePlanInput } from '~/core/plan/plan.types'
import { showDeleteConfirm } from '~/utils/sweetalert'
import type { GymLimit } from '~/core/gym-limit/gym-limit'
import PlanModal from '~/components/Plan/PlanModal.vue'
import { showToastSuccess, showToastError } from '~/utils/toast'

// --- Meta ---
definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

// --- State ---
const { gym_id } = useGlobalStore()
const limit = ref<GymLimit>()
const is_loading = ref(true)
const plans = ref<Plan[]>([])
const show_modal = ref(false)
const is_edit_mode = ref(false)
const is_submitting = ref(false)
const modal_form = ref<Partial<CreatePlanInput & { id?: string }>>({
    name: '',
    description: '',
    price: 0,
    num_of_days: null,
    num_of_sessions: null,
})

// --- Computed ---
const is_limit_reached = computed(() => {
    if (!limit.value) return true
    return plans.value.length >= limit.value.value
})

const is_near_limit = computed(() => {
    if (!limit.value) return false
    const percentage = plans.value.length / limit.value.value
    return percentage >= 0.8 && !is_limit_reached.value
})

// --- Methods ---
function format_date(date_str: string) {
    const d = new Date(date_str)
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

function open_add_modal() {
    is_edit_mode.value = false
    modal_form.value = {
        name: '',
        description: '',
        price: 0,
        num_of_days: null,
        num_of_sessions: null,
    }
    show_modal.value = true
}

function open_edit_modal(plan: Plan) {
    is_edit_mode.value = true
    modal_form.value = {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        price: plan.price,
        num_of_days: plan.num_of_days,
        num_of_sessions: plan.num_of_sessions,
    }
    show_modal.value = true
}

function close_modal() {
    show_modal.value = false
    is_submitting.value = false
}

async function fetch_plans() {
    if (!gym_id) return
    is_loading.value = true
    try {
        const response = await get_plans({ gym_id })
        plans.value = response.plans
        limit.value = response.gym_limit || undefined
    } catch (e) {
        showToastError('Failed to fetch plans.')
    }
    is_loading.value = false
}

async function on_add_plan() {
    if (!gym_id) return
    is_submitting.value = true
    try {
        await create_plan({
            gym_id,
            name: modal_form.value.name!,
            description: modal_form.value.description,
            price: modal_form.value.price!,
            num_of_days: modal_form.value.num_of_days,
            num_of_sessions: modal_form.value.num_of_sessions,
        })
        showToastSuccess('Plan added successfully!')
        close_modal()
        await fetch_plans()
    } catch (e) {
        showToastError('Failed to add plan.')
    }
    is_submitting.value = false
}

async function on_edit_plan() {
    if (!modal_form.value.id) return
    is_submitting.value = true
    try {
        await update_plan(modal_form.value.id, {
            name: modal_form.value.name!,
            description: modal_form.value.description,
            price: modal_form.value.price!,
            num_of_days: modal_form.value.num_of_days,
            num_of_sessions: modal_form.value.num_of_sessions,
        })
        showToastSuccess('Plan updated successfully!')
        close_modal()
        await fetch_plans()
    } catch (e) {
        showToastError('Failed to update plan.')
    }
    is_submitting.value = false
}

async function on_delete_plan(plan: Plan) {
    const confirmed = await showDeleteConfirm(
        "Delete Plan?",
        `Are you sure you want to delete "${plan.name}"?`
    )
    if (confirmed) {
        try {
            await delete_plan(plan.id)
            showToastSuccess('Plan deleted successfully!')
            await fetch_plans()
        } catch (e) {
            showToastError('Failed to delete plan.')
        }
    }
}

// --- Lifecycle ---
onMounted(fetch_plans)
</script>
