<template>
    <dialog ref="modalRef" class="modal modal-open">
        <div class="modal-box bg-base-100 max-w-lg p-0 overflow-hidden">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">
                    Membership Plans
                    <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                        {{ member.firstname }} {{ member.lastname }}
                    </span>
                </h3>
                <div v-if="props.is_loading" class="flex justify-center items-center min-h-[120px]">
                    <span class="loading loading-spinner loading-lg text-primary"></span>
                </div>
                <div v-else class="space-y-4">
                    <div
                        v-for="membership in memberships"
                        :key="membership.id"
                        class="rounded-xl border border-base-200 bg-base-50 p-4 shadow-sm flex flex-col gap-1"
                    >
                        <div class="flex items-center justify-between">
                            <span class="font-semibold text-base text-base-content">{{ membership.plan.name }}</span>
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
                        <div class="text-sm text-base-content/70">{{ membership.plan.description }}</div>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="font-semibold text-lg text-primary">₱{{ membership.amount_paid }}</span>
                            <span v-if="membership.num_of_days > 0" class="text-xs text-base-content/60">/ {{ membership.num_of_days }} days</span>
                        </div>
                        <div class="flex flex-col gap-1 text-xs text-base-content/50 mt-2">
                            <span>
                                Activated: 
                                <span class="font-medium text-base-content/80">
                                    {{ membership.start_date ? formatDate(membership.start_date) : 'N/A' }}
                                </span>
                            </span>
                            <span v-if="membership.end_date">
                                Expired: 
                                <span class="font-medium text-base-content/80">
                                    {{ formatDate(membership.end_date) }}
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
            <div class="modal-action bg-base-200 px-8 py-4 flex justify-end">
                <button class="btn btn-ghost rounded-md" type="button" @click="close">Close</button>
            </div>
        </div>
    </dialog>
</template>

<script setup lang="ts">
import type { Member } from '~/core/member/member.types';

const props = defineProps<{
    member?: Member,
    is_loading?: boolean
}>()

const emit = defineEmits(['close'])

const modalRef = ref<HTMLDialogElement | null>(null)


onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})

const memberships = computed(() => {
    return props.member?.memberships || []
})

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


</script>