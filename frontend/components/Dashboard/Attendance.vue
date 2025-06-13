<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden flex flex-col h-full min-w-[320px] max-h-[730px]">
        <div class="flex items-center gap-2 px-6 py-5 bg-base-100/90 border-b border-base-200">
            <CalendarCheck class="w-5 h-5 text-primary" />
            <span class="font-semibold text-base-content/80 text-lg">Attendance</span>
        </div>
        <div class="px-6 py-4 flex-1 overflow-y-auto min-h-0">
            <div v-if="component_loading" class="flex justify-center py-20 text-xs text-base-content/50">
                <Spinner />           
            </div>
            <template v-else>
                <!-- Month/Year Selector -->
                <div class="flex flex-wrap gap-2 mb-4">
                    <select v-model="selected_month" class="select select-xs bg-base-200 border-base-300">
                        <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
                    </select>
                    <select v-model="selected_year" class="select select-xs bg-base-200 border-base-300">
                        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                    </select>
                </div>
                <!-- Attendance Count Info Label -->
                <div class="mb-2 text-xs text-base-content/50 text-center">
                    Each day shows the attendance count
                </div>
                <!-- Clickable Info Label -->
                <div class="mb-4 text-xs text-primary text-center font-medium">
                    Click on a day in the calendar to view attendance details for that date.
                </div>
                <!-- Calendar Table -->
                <div class="overflow-x-auto">
                    <table class="w-full text-center border-separate border-spacing-y-1">
                        <thead>
                            <tr>
                                <th v-for="day in days" :key="day" class="font-semibold text-base-content/70 bg-base-200 rounded-t py-2">
                                    {{ day }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(week, w_idx) in calendar_rows" :key="w_idx">
                                <td
                                    v-for="(cell, d_idx) in week"
                                    :key="d_idx"
                                    class="align-top p-0"
                                >
                                    <div
                                        v-if="cell"
                                        :class="[
                                            'flex flex-col items-center justify-center h-10 w-10 mx-auto rounded-md transition-all duration-150 cursor-pointer',
                                            is_today(cell.day) ? 'bg-primary/10 border border-primary text-primary font-semibold shadow-sm' : 'bg-base-100 border border-base-200',
                                        ]"
                                        @click="open_attendance_modal(cell.day)"
                                    >
                                        <span
                                            :class="[
                                                'block text-sm',
                                                is_today(cell.day) ? 'text-primary font-semibold' : 'text-base-content/80'
                                            ]"
                                        >
                                            {{ cell.day }}
                                        </span>
                                        <span class="text-[11px] font-mono mt-0.5 text-base-content/40">
                                            {{ cell.count }}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Summary -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-base-content/70 mt-6">
                    <!-- Average Attendance Card -->
                    <div class="bg-base-200/60 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                        <div class="flex flex-col gap-0.5 mb-1">
                            <span class="font-semibold text-base-content/80">Average Attendance</span>
                            <span class="text-xs text-base-content/40">Selected month</span>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="day in days"
                                :key="day"
                                class="inline-flex items-center px-2 py-0.5 rounded bg-base-100 font-mono text-xs"
                            >
                                <span class="font-semibold">{{ day }}:</span>
                                <span class="ml-1">{{ average_attendance[day] ?? 0 }}</span>
                            </span>
                        </div>
                    </div>
                    <!-- Total Attendance Card -->
                    <div class="bg-base-200/60 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                        <div class="flex flex-col gap-0.5 mb-1">
                            <span class="font-semibold text-base-content/80">Total Attendance</span>
                            <span class="text-xs text-base-content/40">Selected month</span>
                        </div>
                        <div class="text-2xl font-mono font-bold text-base-content/90">
                            {{ total_attendance }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <!-- Attendance Modal -->
     <AttendanceModal
        v-if="show_attendance_modal && gym_id"
        :show="show_attendance_modal"
        :gym_id="gym_id"
        :date="modal_date_label"
        @close="show_attendance_modal = false"
        :attendance_list="attendance_list"
        :attendance_loading="attendance_loading"
    />

</template>

<script setup lang="ts">
import { getDay, getDate, startOfMonth, endOfMonth, format } from "date-fns"
import { CalendarCheck } from "lucide-vue-next"
import { useGlobalStore } from "~/core/global.store"
import { get_monthly_attendance_calendar } from "~/core/dashboard/dashboard.api"
import { get_all_attendance_by_date } from "~/core/member-time-logs/member-time-logs.api"
import AttendanceModal from "~/components/Dashboard/AttendanceModal.vue"

// --- State ---
const { gym_id } = useGlobalStore()
const now = new Date()
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const months = [
    { label: "January", value: 1 }, { label: "February", value: 2 }, { label: "March", value: 3 }, { label: "April", value: 4 },
    { label: "May", value: 5 }, { label: "June", value: 6 }, { label: "July", value: 7 }, { label: "August", value: 8 },
    { label: "September", value: 9 }, { label: "October", value: 10 }, { label: "November", value: 11 }, { label: "December", value: 12 }
]
const current_year = now.getFullYear()
const current_month = now.getMonth() + 1
const years = [current_year, current_year - 1, current_year - 2]

const selected_month = ref(current_month)
const selected_year = ref(current_year)
const attendance_data = ref<{ date: string; count: number }[]>([])

const component_loading = ref(true)
const show_attendance_modal = ref(false)
const attendance_loading = ref(false)
const attendance_list = ref<any[]>([])
const modal_date_label = ref("")

// --- Calendar Logic ---
const calendar_rows = computed(() => {
    if (!attendance_data.value.length) return []
    const first_day = startOfMonth(new Date(selected_year.value, selected_month.value - 1))
    const last_day = endOfMonth(first_day)
    const days_in_month = getDate(last_day)
    const first_week_day = (getDay(first_day) + 6) % 7 // 0=Mon, ..., 6=Sun

    // Map attendance by date
    const attendance_map: Record<string, number> = {}
    for (const entry of attendance_data.value) {
        attendance_map[entry.date] = entry.count
    }

    const rows: Array<Array<{ day: number, count: number } | null>> = []
    let week: Array<{ day: number, count: number } | null> = Array(first_week_day).fill(null)
    for (let d = 1; d <= days_in_month; d++) {
        const date_str = `${selected_year.value}-${String(selected_month.value).padStart(2, "0")}-${String(d).padStart(2, "0")}`
        week.push({ day: d, count: attendance_map[date_str] ?? 0 })
        if (week.length === 7) {
            rows.push(week)
            week = []
        }
    }
    if (week.length) {
        while (week.length < 7) week.push(null)
        rows.push(week)
    }
    return rows
})

// --- Attendance Stats ---
const average_attendance = computed(() => {
    const result: Record<string, number> = {}
    const attendance_map: Record<string, number> = {}
    for (const entry of attendance_data.value) {
        attendance_map[entry.date] = entry.count
    }
    const today = new Date()
    const first_day = startOfMonth(new Date(selected_year.value, selected_month.value - 1))
    const last_day = endOfMonth(first_day)
    for (let i = 0; i < 7; i++) {
        const day_name = days[i]
        let sum = 0
        let count = 0
        for (let d = 1; d <= getDate(last_day); d++) {
            const date_obj = new Date(selected_year.value, selected_month.value - 1, d)
            if (date_obj > today) continue
            const day_idx = (getDay(date_obj) + 6) % 7
            if (days[day_idx] === day_name) {
                const date_str = `${selected_year.value}-${String(selected_month.value).padStart(2, "0")}-${String(d).padStart(2, "0")}`
                sum += attendance_map[date_str] ?? 0
                count++
            }
        }
        result[day_name] = count ? Math.round(sum / count) : 0
    }
    return result
})

const total_attendance = computed(() => attendance_data.value.reduce((a, b) => a + b.count, 0))

async function open_attendance_modal(day: number) {
    if (!gym_id) return
    show_attendance_modal.value = true
    attendance_loading.value = true
    attendance_list.value = []
    const date_str = `${selected_year.value}-${String(selected_month.value).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    modal_date_label.value = format(new Date(date_str), "MMMM d, yyyy")
    try {
        attendance_list.value = await get_all_attendance_by_date({ date: date_str, gym_id })
    } catch {
        attendance_list.value = []
    }
    attendance_loading.value = false
}

// --- Utility ---
function is_today(day: number) {
    return (
        selected_year.value === now.getFullYear() &&
        selected_month.value === now.getMonth() + 1 &&
        day === now.getDate()
    )
}

// --- Fetch Data ---
async function fetch_attendance() {
    if (!gym_id) {
        component_loading.value = false
        return
    }
    component_loading.value = true
    attendance_data.value = []
    try {
        attendance_data.value = await get_monthly_attendance_calendar({
            gym_id,
            year: selected_year.value,
            month: selected_month.value
        })
    } catch {
        attendance_data.value = []
    }
    component_loading.value = false
}

onMounted(fetch_attendance)
watch([selected_month, selected_year], fetch_attendance)
</script>