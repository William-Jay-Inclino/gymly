<template>
    <dialog ref="modalRef" class="modal modal-open">
        <div class="modal-box bg-base-100 max-w-lg p-0 overflow-hidden">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">
                    Member Plan History
                    <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                        {{ member.firstname }} {{ member.lastname }}
                    </span>
                </h3>
                <div class="space-y-4">
                    <div
                        v-for="plan in sortedPlans"
                        :key="plan.id"
                        class="rounded-xl border border-base-200 bg-base-50 p-4 shadow-sm flex flex-col gap-1"
                    >
                        <div class="flex items-center justify-between">
                            <span class="font-semibold text-base text-base-content">{{ plan.name }}</span>
                            <span
                                v-if="plan.is_active && !plan.expired_at"
                                class="badge badge-soft badge-success text-xs px-2 py-1"
                            >
                                Active
                            </span>
                        </div>
                        <div class="text-sm text-base-content/70">{{ plan.description }}</div>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="font-semibold text-lg text-primary">₱{{ plan.price }}</span>
                            <span class="text-xs text-base-content/60">/ {{ plan.num_of_days }} days</span>
                        </div>
                        <div class="flex flex-col gap-1 text-xs text-base-content/50 mt-2">
                            <span>
                                Activated: 
                                <span class="font-medium text-base-content/80">
                                    {{ plan.activated_at ? formatDate(plan.activated_at) : 'N/A' }}
                                </span>
                            </span>
                            <span v-if="plan.expired_at">
                                Expired: 
                                <span class="font-medium text-base-content/80">
                                    {{ formatDate(plan.expired_at) }}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div v-if="sortedPlans.length === 0" class="text-center text-base-content/60 py-8">
                        No plans found for this member.
                    </div>
                </div>
            </div>
            <div class="modal-action bg-base-200 px-8 py-4 flex justify-end">
                <button class="btn btn-ghost rounded-md" type="button" @click="close">Close</button>
            </div>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import type { Member } from '~/functions/member/member.types';

const props = defineProps<{
    member?: Member
}>()

// For demo, static plans with history fields. Replace with user's actual plan history.
const plans = [
    {
        id: '1',
        name: "1 Week",
        description: "Short-term access for quick workouts.",
        price: "300",
        num_of_days: 7,
        num_of_sessions: 3,
        is_active: false,
        is_default: false,
        activated_at: '2024-04-01T10:00:00Z',
        expired_at: '2024-04-08T10:00:00Z',
    },
    {
        id: '2',
        name: "1 Month",
        description: "Monthly plan for consistent training.",
        price: "1000",
        num_of_days: 30,
        num_of_sessions: 12,
        is_active: false,
        is_default: true,
        activated_at: '2024-04-09T10:00:00Z',
        expired_at: '2024-05-09T10:00:00Z',
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
        activated_at: '2024-05-10T10:00:00Z',
        expired_at: null,
    },
]

const emit = defineEmits(['close'])

const modalRef = ref<HTMLDialogElement | null>(null)

function close() {
    emit('close')
}

function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

const sortedPlans = computed(() =>
    [...plans]
        .sort((a, b) => {
            const aActive = a.is_active && !a.expired_at
            const bActive = b.is_active && !b.expired_at
            if (aActive && !bActive) return -1
            if (!aActive && bActive) return 1
            return (b.activated_at || '').localeCompare(a.activated_at || '')
        })
)

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})
</script>