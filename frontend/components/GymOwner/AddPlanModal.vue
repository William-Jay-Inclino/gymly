<template>
    <dialog ref="modalRef" class="modal modal-open">
        <form method="dialog" class="modal-box bg-base-100 max-w-md p-0 overflow-hidden" @submit.prevent="submit">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">
                    Add Plan<span v-if="user"> for {{ user.firstname }} {{ user.lastname }}</span>
                </h3>
                <div class="space-y-4">
                    <div>
                        <label class="label pb-1">
                            <span class="label-text text-base-content/80">Select Plan</span>
                        </label>
                        <PlanList
                            :plans="plans"
                            v-model="selectedPlans"
                        />
                    </div>
                </div>
            </div>
            <div class="modal-action bg-base-200 px-8 py-4 flex justify-end gap-2">
                <button class="btn btn-ghost rounded-md" type="button" @click="close">Cancel</button>
                <button class="btn btn-primary rounded-md" type="submit" :disabled="!canSubmit">
                    Add Plan
                </button>
            </div>
        </form>
    </dialog>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, onMounted } from 'vue'
import PlanList from './PlanList.vue'

const props = defineProps<{
    user?: {
        id: string
        firstname: string
        lastname: string
    }
}>()

const plans = [
    {
        id: '1',
        name: "1 Week",
        description: "Short-term access for quick workouts.",
        price: "300",
        num_of_days: 7,
        num_of_sessions: 3,
        is_active: true,
        is_default: false,
    },
    {
        id: '2',
        name: "1 Month",
        description: "Monthly plan for consistent training.",
        price: "1000",
        num_of_days: 30,
        num_of_sessions: 12,
        is_active: true,
        is_default: true,
    },
    {
        id: '3',
        name: "3 Months",
        description: "Quarterly plan to stay on track.",
        price: "2700",
        num_of_days: 90,
        num_of_sessions: 36,
        is_active: true,
        is_default: false,
    },
    {
        id: '4',
        name: "6 Months",
        description: "Half-year plan for serious commitment.",
        price: "5000",
        num_of_days: 180,
        num_of_sessions: 72,
        is_active: true,
        is_default: false,
    },
    {
        id: '5',
        name: "1 Year",
        description: "Year-long access with the best value.",
        price: "9000",
        num_of_days: 365,
        num_of_sessions: 150,
        is_active: true,
        is_default: false,
    },
]

const emit = defineEmits(['close', 'submit'])

const modalRef = ref<HTMLDialogElement | null>(null)
const selectedPlans = ref<string[]>(plans.filter(p => p.is_default).map(p => p.id))

const canSubmit = computed(() => selectedPlans.value.length > 0)

function close() {
    emit('close')
}

function submit() {
    if (!canSubmit.value) return
    emit('submit', {
        planIds: selectedPlans.value,
    })
    close()
}

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})

defineExpose({ close })
</script>