<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-8 px-4">
            <div class="bg-base-100 rounded-2xl shadow-2xl p-0 max-w-2xl w-full overflow-hidden flex flex-col">
                <div class="px-8 pt-8 pb-2">
                    <h3 class="font-semibold text-xl mb-6 text-primary">
                        Attendance
                        <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                            {{ member.firstname }} {{ member.lastname }}
                        </span>
                    </h3>
                    <div class="flex gap-2 mb-4">
                        <select v-model="selectedYear" class="select select-bordered">
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                        <select v-model="selectedMonth" class="select select-bordered">
                            <option v-for="(month, idx) in months" :key="idx" :value="idx + 1">{{ month }}</option>
                        </select>
                    </div>
                    <div v-if="is_loading" class="flex justify-center items-center min-h-[120px]">
                        <span class="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                    <div v-else class="overflow-x-auto">
                        <table class="table w-full table-zebra">
                            <thead>
                                <tr>
                                    <th class="text-base">Date</th>
                                    <th class="text-base">Time In</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="record in attendance" :key="record.id">
                                    <td>{{ formatDate(record.checked_in_at) }}</td>
                                    <td>{{ formatTime(record.checked_in_at) }}</td>
                                </tr>
                                <tr v-if="attendance.length === 0">
                                    <td colspan="2" class="text-center text-base-content/60 py-8">
                                        No attendance records found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="bg-base-200 px-8 py-4 flex justify-end">
                    <button class="btn btn-ghost rounded-md" type="button" @click="close">Close</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { member_time_logs_by_month } from '~/core/member-time-logs/member-time-logs.api'
import type { Member } from '~/core/member/member.types'

const props = defineProps<{
    member?: Member,
    gym_id: string,
    show: boolean
}>()

const is_loading = ref(false)
const emit = defineEmits(['close'])

const attendance = ref<any[]>([])

const now = new Date()
const selectedYear = ref(now.getFullYear())
const selectedMonth = ref(now.getMonth() + 1)

const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

async function fetchAttendance() {
    if (!props.member || !props.gym_id) {
        attendance.value = []
        return
    }
    is_loading.value = true
    try {
        attendance.value = await member_time_logs_by_month({
            year: selectedYear.value,
            month: selectedMonth.value,
            member_id: props.member.id,
            gym_id: props.gym_id
        })
    } catch (e) {
        attendance.value = []
    }
    is_loading.value = false
}

// Fetch attendance when modal opens or filters change
watch(
    () => [props.member?.id, props.gym_id, selectedYear.value, selectedMonth.value, props.show],
    ([memberId, gymId, year, month, show]) => {
        if (show && memberId && gymId) {
            fetchAttendance()
        }
    },
    { immediate: true }
)

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

function formatTime(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
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