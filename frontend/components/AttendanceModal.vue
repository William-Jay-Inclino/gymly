<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-6 sm:pt-8 px-2 sm:px-4">
            <div class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[95vh] overflow-hidden">
                <div class="overflow-y-auto flex-1 px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary">
                        Attendance
                        <span v-if="member" class="block text-base text-base-content/70 font-normal mt-1">
                            {{ member.firstname }} {{ member.lastname }}
                        </span>
                    </h3>
                    <div class="flex flex-col sm:flex-row gap-2 mb-4">
                        <select v-model="selected_year" class="select select-bordered w-full sm:w-auto">
                            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                        </select>
                        <select v-model="selected_month" class="select select-bordered w-full sm:w-auto">
                            <option v-for="(month, idx) in months" :key="idx" :value="idx + 1">{{ month }}</option>
                        </select>
                    </div>
                    <div v-if="is_loading" class="flex justify-center items-center min-h-[120px]">
                        <span class="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                    <div v-else class="overflow-x-auto">
                        <table class="table w-full table-zebra text-sm">
                            <thead>
                                <tr>
                                    <th class="text-base">Date</th>
                                    <th class="text-base">Time In</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="record in attendance" :key="record.id">
                                    <td>{{ format_date(record.checked_in_at) }}</td>
                                    <td>{{ format_time(record.checked_in_at) }}</td>
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
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2">
                    <button class="btn btn-ghost rounded-md w-full sm:w-auto" type="button" @click="close_modal">Close</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { member_time_logs_by_month } from '~/core/member-time-logs/member-time-logs.api'
import type { Member } from '~/core/member/member.types'

// --- Props & Emits ---
const props = defineProps<{
    member?: Member,
    gym_id: string,
    show: boolean
}>()
const emit = defineEmits(['close'])

// --- State ---
const is_loading = ref(false)
const attendance = ref<any[]>([])

const now = new Date()
const selected_year = ref(now.getFullYear())
const selected_month = ref(now.getMonth() + 1)

const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

// --- Methods ---
async function fetch_attendance() {
    if (!props.member || !props.gym_id) {
        attendance.value = []
        return
    }
    is_loading.value = true
    try {
        attendance.value = await member_time_logs_by_month({
            year: selected_year.value,
            month: selected_month.value,
            member_id: props.member.id,
            gym_id: props.gym_id
        })
    } catch {
        attendance.value = []
    }
    is_loading.value = false
}

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

function format_time(date_str: string) {
    const date = new Date(date_str)
    return date.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    })
}

// --- Watchers ---
watch(
    () => [props.member?.id, props.gym_id, selected_year.value, selected_month.value, props.show],
    ([member_id, gym_id, year, month, show]) => {
        if (show && member_id && gym_id) {
            fetch_attendance()
        }
    },
    { immediate: true }
)
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