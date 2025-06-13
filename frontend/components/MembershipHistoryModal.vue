<template>
    <Transition name="modal" appear>
        <div v-if="show" @mousedown.self="close_modal" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-4 sm:pt-8 px-2 sm:px-4">
            <div @mousedown.stop class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[95vh] overflow-hidden">
                <div class="overflow-y-auto flex-1 px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary">
                        Membership Plans
                        <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                            {{ member.firstname }} {{ member.lastname }}
                        </span>
                    </h3>
                    <div v-if="is_loading" class="flex justify-center items-center min-h-[120px]">
                        <span class="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                    <div v-else class="space-y-4">
                        <div
                            v-for="membership in memberships"
                            :key="membership.id"
                            class="rounded-xl border border-base-200 bg-base-50 p-4 shadow-sm flex flex-col gap-1"
                        >
                            <div class="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2">
                                <span class="font-semibold text-base text-base-content">{{ membership.plan_name }}</span>
                                <span
                                    v-if="membership.is_active"
                                    class="badge badge-soft badge-success text-xs px-2 py-1"
                                >
                                    Active
                                </span>
                                <span
                                    v-else
                                    class="badge badge-soft badge-error text-xs px-2 py-1"
                                >
                                    Expired
                                </span>
                            </div>
                            <div class="text-sm text-base-content/70 break-words">{{ membership.plan_description }}</div>
                            <div class="flex flex-col xs:flex-row xs:items-center gap-2 mt-1">
                                <span class="font-semibold text-lg text-primary">₱{{ membership.amount_paid }}</span>
                                <span v-if="membership.num_of_days > 0" class="text-xs text-base-content/60">
                                    / {{ membership.num_of_days }} {{ membership.num_of_days > 1 ? 'days' : 'day' }}
                                </span>
                            </div>
                            <div class="flex flex-col gap-1 text-xs text-base-content/50 mt-2">
                                <span>
                                    Activated: 
                                    <span class="font-medium text-base-content/80">
                                        {{ membership.start_date ? format_date(membership.start_date) : 'N/A' }}
                                    </span>
                                </span>
                                <span v-if="membership.end_date">
                                    Expired: 
                                    <span class="font-medium text-base-content/80">
                                        {{ format_date(membership.end_date) }}
                                    </span>
                                </span>
                                <span v-else>
                                    Sessions Remaining: 
                                    <span class="font-medium text-base-content/80">
                                        {{ membership.sessions_left }}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div v-if="memberships.length === 0" class="text-center text-base-content/60 py-8">
                            No memberships found for this member.
                        </div>
                    </div>
                </div>
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2">
                    <button class="btn btn-ghost rounded-md w-full sm:w-auto" type="button" @click="close_modal">Close</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { Member } from '~/core/member/member.types'

// --- Props & Emits ---
const props = defineProps<{
    member?: Member,
    is_loading?: boolean,
    show: boolean
}>()
const emit = defineEmits(['close'])

// --- Computed ---
const memberships = computed(() => props.member?.memberships || [])

// --- Methods ---
function close_modal() {
    emit('close')
}

function format_date(date_str: string) {
    const date = new Date(date_str)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
    transition: all 0.25s ease-out;
}
.modal-enter-from, .modal-leave-to {
    opacity: 0;
}
.modal-enter-from .bg-base-100, .modal-leave-to .bg-base-100 {
    transform: translateY(-20px) scale(0.95);
}
.modal-enter-to .bg-base-100, .modal-leave-from .bg-base-100 {
    transform: translateY(0) scale(1);
    transition: transform 0.25s ease-out;
}
</style>