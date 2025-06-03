<template>
    <dialog ref="modalRef" class="modal modal-open">
        <div class="modal-box bg-base-100 max-w-2xl p-0 overflow-hidden">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">
                    Attendance
                    <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                        {{ member.firstname }} {{ member.lastname }}
                    </span>
                </h3>
                <div class="overflow-x-auto">
                    <table class="table w-full table-zebra">
                        <thead>
                            <tr>
                                <th class="text-base">Date</th>
                                <th class="text-base">Time In</th>
                                <th class="text-base">Time Out</th>
                                <th class="text-base">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="record in attendance" :key="record.id">
                                <td>{{ formatDate(record.date) }}</td>
                                <td>{{ record.time_in || '-' }}</td>
                                <td>{{ record.time_out || '-' }}</td>
                                <td>
                                    <span
                                        v-if="record.status === 'present'"
                                        class="badge badge-soft badge-success"
                                    >
                                        Present
                                    </span>
                                    <span v-else> - </span>
                                </td>
                            </tr>
                            <tr v-if="attendance.length === 0">
                                <td colspan="4" class="text-center text-base-content/60 py-8">
                                    No attendance records found.
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

// Example static attendance data. Replace with real data as needed.
const attendance = ref([
    {
        id: 1,
        date: '2024-05-01',
        time_in: '08:00',
        time_out: '09:00',
        status: 'present',
    },
    {
        id: 2,
        date: '2024-05-02',
        time_in: '08:10',
        time_out: '09:05',
        status: 'present',
    },
    {
        id: 3,
        date: '2024-05-03',
        time_in: null,
        time_out: null,
        status: 'absent',
    },
])

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

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})
</script>