<template>
    <dialog ref="modalRef" class="modal modal-open">
        <form method="dialog" class="modal-box bg-base-100 max-w-md p-0 overflow-hidden" @submit.prevent="submit">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">Add Member</h3>
                <div class="space-y-4">
                    <div>
                        <label class="label pb-1">
                            <span class="label-text text-base-content/80">First Name</span>
                        </label>
                        <input
                            v-model="firstname"
                            type="text"
                            class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                            required
                        />
                    </div>
                    <div>
                        <label class="label pb-1">
                            <span class="label-text text-base-content/80">Last Name</span>
                        </label>
                        <input
                            v-model="lastname"
                            type="text"
                            class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                            required
                        />
                    </div>
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
                    Add Member
                </button>
            </div>
        </form>
    </dialog>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, onMounted } from 'vue'
import PlanList from './PlanList.vue'

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
const firstname = ref('')
const lastname = ref('')
const selectedPlans = ref<string[]>(['2']) // <-- should be an array

const canSubmit = computed(() =>
    firstname.value.trim() !== '' &&
    lastname.value.trim() !== '' &&
    selectedPlans.value.length > 0
)

function close() {
    emit('close')
}

function submit() {
    if (!canSubmit.value) return
    emit('submit', {
        firstname: firstname.value,
        lastname: lastname.value,
        planIds: selectedPlans.value, // <-- send array
    })
    close()
}

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})

defineExpose({ close })
</script>