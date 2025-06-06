<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden flex flex-col h-full min-w-[320px] max-h-[690px]">
        <div class="flex items-center gap-2 px-6 py-5 bg-base-100/90 border-b border-base-200">
            <CalendarCheck class="w-5 h-5 text-primary" />
            <span class="font-semibold text-base-content/80 text-lg">Attendance</span>
        </div>
        <div class="px-6 py-4 flex-1 overflow-y-auto min-h-0">
            <!-- Month/Year Selector -->
            <div class="flex flex-wrap gap-2 mb-4">
                <select v-model="selectedMonth" class="select select-xs bg-base-200 border-base-300">
                    <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
                </select>
                <select v-model="selectedYear" class="select select-xs bg-base-200 border-base-300">
                    <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                </select>
            </div>
            <!-- Attendance Count Info Label -->
            <div class="mb-2 text-xs text-base-content/50 text-center">
                Each day shows the attendance count
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
                        <tr v-for="(week, wIdx) in calendarRows" :key="wIdx">
                            <td
                                v-for="(cell, dIdx) in week"
                                :key="dIdx"
                                class="align-top p-0"
                            >
                                <div
                                    v-if="cell"
                                    :class="[
                                        'flex flex-col items-center justify-center h-10 w-10 mx-auto rounded-md transition-all duration-150',
                                        isToday(cell.day) ? 'bg-primary/10 border border-primary text-primary font-semibold shadow-sm' : 'bg-base-100 border border-base-200',
                                    ]"
                                >
                                    <span
                                        :class="[
                                            'block text-sm',
                                            isToday(cell.day) ? 'text-primary font-semibold' : 'text-base-content/80'
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
                            <span class="ml-1">{{ averageAttendance[day] ?? 0 }}</span>
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
                        {{ totalAttendance }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue"
import { parseISO, getDay, getDate, startOfMonth, endOfMonth } from "date-fns"
import { CalendarCheck } from "lucide-vue-next"
import { useGlobalStore } from "~/core/global.store"
import { get_monthly_attendance_calendar } from "~/core/dashboard/dashboard.api"

const { gym_id } = useGlobalStore()

const now = new Date()
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const months = [
    { label: "January", value: 1 }, { label: "February", value: 2 }, { label: "March", value: 3 }, { label: "April", value: 4 },
    { label: "May", value: 5 }, { label: "June", value: 6 }, { label: "July", value: 7 }, { label: "August", value: 8 },
    { label: "September", value: 9 }, { label: "October", value: 10 }, { label: "November", value: 11 }, { label: "December", value: 12 }
]
const currentYear = now.getFullYear()
const currentMonth = now.getMonth() + 1
const years = [currentYear, currentYear - 1, currentYear - 2]

const selectedMonth = ref(currentMonth)
const selectedYear = ref(currentYear)
const attendanceData = ref<{ date: string; count: number }[]>([])

async function fetchAttendance() {
    attendanceData.value = []
    try {
        attendanceData.value = await get_monthly_attendance_calendar({
            gym_id,
            year: selectedYear.value,
            month: selectedMonth.value
        })
    } catch (e) {
        attendanceData.value = []
    }
}

onMounted(fetchAttendance)
watch([selectedMonth, selectedYear], fetchAttendance)

// Build calendar grid: array of weeks, each week is array of 7 cells (Mon-Sun)
const calendarRows = computed(() => {
    if (!attendanceData.value.length) return []
    const firstDay = startOfMonth(new Date(selectedYear.value, selectedMonth.value - 1))
    const lastDay = endOfMonth(firstDay)
    const daysInMonth = getDate(lastDay)
    const firstWeekDay = (getDay(firstDay) + 6) % 7 // 0=Mon, ..., 6=Sun

    // Map attendance by date
    const attendanceMap: Record<string, number> = {}
    for (const entry of attendanceData.value) {
        attendanceMap[entry.date] = entry.count
    }

    const rows: Array<Array<{ day: number, count: number } | null>> = []
    let week: Array<{ day: number, count: number } | null> = Array(firstWeekDay).fill(null)
    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${selectedYear.value}-${String(selectedMonth.value).padStart(2, "0")}-${String(d).padStart(2, "0")}`
        week.push({ day: d, count: attendanceMap[dateStr] ?? 0 })
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

// Highlight current day
function isToday(day: number) {
    return (
        selectedYear.value === now.getFullYear() &&
        selectedMonth.value === now.getMonth() + 1 &&
        day === now.getDate()
    )
}

// Average attendance per day (Mon-Sun, for selected month)
const averageAttendance = computed(() => {
    const result: Record<string, number> = {}
    // Build a map for quick lookup
    const attendanceMap: Record<string, number> = {}
    for (const entry of attendanceData.value) {
        attendanceMap[entry.date] = entry.count
    }
    const today = new Date()
    const firstDay = startOfMonth(new Date(selectedYear.value, selectedMonth.value - 1))
    const lastDay = endOfMonth(firstDay)
    for (let i = 0; i < 7; i++) {
        const dayName = days[i]
        let sum = 0
        let count = 0
        for (let d = 1; d <= getDate(lastDay); d++) {
            const dateObj = new Date(selectedYear.value, selectedMonth.value - 1, d)
            // Only include today and past days
            if (dateObj > today) continue
            const dayIdx = (getDay(dateObj) + 6) % 7 // 0=Mon, ..., 6=Sun
            if (days[dayIdx] === dayName) {
                const dateStr = `${selectedYear.value}-${String(selectedMonth.value).padStart(2, "0")}-${String(d).padStart(2, "0")}`
                sum += attendanceMap[dateStr] ?? 0
                count++
            }
        }
        result[dayName] = count ? Math.round(sum / count) : 0
    }
    return result
})

const totalAttendance = computed(() => {
    return attendanceData.value.reduce((a, b) => a + b.count, 0)
})
</script>