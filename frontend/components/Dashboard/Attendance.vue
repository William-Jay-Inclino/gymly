<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden flex flex-col h-full min-w-[320px] max-h-[650px]">
        <div class="flex items-center gap-2 px-6 py-5 bg-base-100/90 border-b border-base-200">
            <CalendarCheck class="w-5 h-5 text-primary" />
            <span class="font-semibold text-base-content/80 text-lg">Attendance</span>
        </div>
        <div class="px-6 py-4 flex-1 overflow-y-auto min-h-0">
            <!-- Tag Selector -->
            <div class="flex flex-wrap gap-2 mb-4">
                <button
                    v-for="tag in tags"
                    :key="tag.value"
                    class="btn btn-xs"
                    :class="selectedTag === tag.value ? 'btn-primary' : 'btn-ghost border-base-300'"
                    @click="selectedTag = tag.value"
                >
                    {{ tag.label }}
                </button>
                <template v-if="selectedTag === 'custom'">
                    <select v-model="customMonth" class="select select-xs ml-2 bg-base-200 border-base-300">
                        <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
                    </select>
                    <select v-model="customYear" class="select select-xs ml-2 bg-base-200 border-base-300">
                        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                    </select>
                </template>
            </div>
            <!-- Attendance Table -->
            <div class="overflow-x-auto">
                <table class="table table-xs w-full">
                    <thead>
                        <tr>
                            <th class="text-left">Day</th>
                            <th v-for="(w, i) in weeksCount" :key="i" class="text-center">{{ i + 1 }}{{ weekSuffix(i + 1) }} week</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(day, idx) in days" :key="day">
                            <td class="font-semibold text-base-content/80">{{ day }}</td>
                            <td
                                v-for="(val, wIdx) in attendanceTable[day]"
                                :key="wIdx"
                                class="text-center font-mono"
                                :class="wIdx === currentWeekIndex && idx === currentDayIndex && isCurrentMonth ? 'bg-primary/10 font-bold' : ''"
                            >
                                {{ val }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Summary -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-base-content/70 mt-6">
                <div class="bg-base-200/60 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="font-semibold text-base-content/80">Average Attendance (all time)</span>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="day in days"
                            :key="day"
                            class="inline-flex items-center px-2 py-0.5 rounded bg-base-100 font-mono text-xs"
                        >
                            <span class="font-semibold">{{ day }}:</span>
                            <span class="ml-1">{{ averageAttendance[day] }}</span>
                        </span>
                    </div>
                </div>
                <div class="bg-base-200/60 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="font-semibold text-base-content/80">Total Attendance (selected period)</span>
                    </div>
                    <div class="text-2xl font-mono font-bold text-base-content/90">
                        {{ totalAttendance }}
                    </div>
                </div>
                <div class="bg-base-200/60 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
                    <div class="flex items-center gap-2 mb-1">
                        <span class="font-semibold text-base-content/80">Total Attendance (all time)</span>
                    </div>
                    <div class="text-2xl font-mono font-bold text-base-content/90">
                        {{ totalAttendanceAllTime }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { parseISO } from "date-fns"
import { CalendarCheck } from "lucide-vue-next"

// Tag options
const tags = [
    { label: "This month", value: "thisMonth" },
    { label: "Last month", value: "lastMonth" },
    { label: "Last 2 months", value: "last2Months" },
    { label: "Custom", value: "custom" }
]
const months = [
    { label: "January", value: 0 }, { label: "February", value: 1 }, { label: "March", value: 2 }, { label: "April", value: 3 },
    { label: "May", value: 4 }, { label: "June", value: 5 }, { label: "July", value: 6 }, { label: "August", value: 7 },
    { label: "September", value: 8 }, { label: "October", value: 9 }, { label: "November", value: 10 }, { label: "December", value: 11 }
]
const currentYear = new Date().getFullYear()
const years = [currentYear, currentYear - 1, currentYear - 2]

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Dummy data: 3 months, each entry is a day with ISO date and count
const attendanceHistory = [
    // June 2025
    { date: "2025-06-02", count: 32 }, { date: "2025-06-03", count: 28 }, { date: "2025-06-04", count: 35 }, { date: "2025-06-05", count: 30 }, { date: "2025-06-06", count: 27 }, { date: "2025-06-07", count: 20 }, { date: "2025-06-08", count: 18 },
    { date: "2025-06-09", count: 30 }, { date: "2025-06-10", count: 27 }, { date: "2025-06-11", count: 33 }, { date: "2025-06-12", count: 29 }, { date: "2025-06-13", count: 25 }, { date: "2025-06-14", count: 19 }, { date: "2025-06-15", count: 17 },
    { date: "2025-06-16", count: 29 }, { date: "2025-06-17", count: 26 }, { date: "2025-06-18", count: 32 }, { date: "2025-06-19", count: 28 }, { date: "2025-06-20", count: 24 }, { date: "2025-06-21", count: 18 }, { date: "2025-06-22", count: 16 },
    { date: "2025-06-23", count: 28 }, { date: "2025-06-24", count: 25 }, { date: "2025-06-25", count: 31 }, { date: "2025-06-26", count: 27 }, { date: "2025-06-27", count: 23 }, { date: "2025-06-28", count: 17 }, { date: "2025-06-29", count: 15 },
    // May 2025
    { date: "2025-05-05", count: 26 }, { date: "2025-05-06", count: 22 }, { date: "2025-05-07", count: 28 }, { date: "2025-05-08", count: 24 }, { date: "2025-05-09", count: 20 }, { date: "2025-05-10", count: 14 }, { date: "2025-05-11", count: 12 },
    { date: "2025-05-12", count: 27 }, { date: "2025-05-13", count: 23 }, { date: "2025-05-14", count: 29 }, { date: "2025-05-15", count: 25 }, { date: "2025-05-16", count: 21 }, { date: "2025-05-17", count: 15 }, { date: "2025-05-18", count: 13 },
    { date: "2025-05-19", count: 28 }, { date: "2025-05-20", count: 24 }, { date: "2025-05-21", count: 30 }, { date: "2025-05-22", count: 26 }, { date: "2025-05-23", count: 22 }, { date: "2025-05-24", count: 16 }, { date: "2025-05-25", count: 14 },
    { date: "2025-05-26", count: 29 }, { date: "2025-05-27", count: 25 }, { date: "2025-05-28", count: 31 }, { date: "2025-05-29", count: 27 }, { date: "2025-05-30", count: 23 }, { date: "2025-05-31", count: 17 }, { date: "2025-06-01", count: 15 },
    // April 2025
    { date: "2025-04-07", count: 22 }, { date: "2025-04-08", count: 18 }, { date: "2025-04-09", count: 24 }, { date: "2025-04-10", count: 20 }, { date: "2025-04-11", count: 16 }, { date: "2025-04-12", count: 10 }, { date: "2025-04-13", count: 8 },
    { date: "2025-04-14", count: 23 }, { date: "2025-04-15", count: 19 }, { date: "2025-04-16", count: 25 }, { date: "2025-04-17", count: 21 }, { date: "2025-04-18", count: 17 }, { date: "2025-04-19", count: 11 }, { date: "2025-04-20", count: 9 },
    { date: "2025-04-21", count: 24 }, { date: "2025-04-22", count: 20 }, { date: "2025-04-23", count: 26 }, { date: "2025-04-24", count: 22 }, { date: "2025-04-25", count: 18 }, { date: "2025-04-26", count: 12 }, { date: "2025-04-27", count: 10 },
    { date: "2025-04-28", count: 25 }, { date: "2025-04-29", count: 21 }, { date: "2025-04-30", count: 27 }, { date: "2025-05-01", count: 23 }, { date: "2025-05-02", count: 19 }, { date: "2025-05-03", count: 13 }, { date: "2025-05-04", count: 11 },
]

// State
const selectedTag = ref("thisMonth")
const customMonth = ref(new Date().getMonth())
const customYear = ref(new Date().getFullYear())

function weekSuffix(n: number) {
    if (n === 1) return "st"
    if (n === 2) return "nd"
    if (n === 3) return "rd"
    return "th"
}

// Get the selected month/year for filtering
const selectedMonth = computed(() => {
    if (selectedTag.value === "thisMonth") return new Date().getMonth()
    if (selectedTag.value === "lastMonth") return new Date().getMonth() - 1
    if (selectedTag.value === "last2Months") return 4 // May (hardcoded for your requirement)
    return customMonth.value
})
const selectedYear = computed(() => {
    if (selectedTag.value === "thisMonth") return new Date().getFullYear()
    if (selectedTag.value === "lastMonth") return new Date().getMonth() === 0 ? new Date().getFullYear() - 1 : new Date().getFullYear()
    if (selectedTag.value === "last2Months") return 2025 // May 2025 (hardcoded for your requirement)
    return customYear.value
})

// Always 4 weeks for all tags
const weeksCount = computed(() => 4)
const filterMonths = computed(() => [selectedMonth.value])
const filterYear = computed(() => [selectedYear.value])

// Build attendance table: { [day]: [week1, week2, week3, week4] }
const attendanceTable = computed(() => {
    const table: Record<string, number[]> = {}
    for (const day of days) table[day] = Array(weeksCount.value).fill(0)

    attendanceHistory.forEach(a => {
        const d = parseISO(a.date)
        const m = d.getMonth()
        const y = d.getFullYear()
        if (!filterMonths.value.includes(m) || !filterYear.value.includes(y)) return
        let week = Math.floor((d.getDate() - 1) / 7)
        if (week > 3) week = 3
        const dayIdx = d.getDay() === 0 ? 6 : d.getDay() - 1
        if (week < table[days[dayIdx]].length) {
            table[days[dayIdx]][week] = a.count
        }
    })
    return table
})

// Average attendance per day (Mon-Sun, all time)
const averageAttendance = computed(() => {
    const result: Record<string, number> = {}
    for (const day of days) {
        const vals = attendanceHistory.filter(a => {
            const d = parseISO(a.date)
            const dayIdx = d.getDay() === 0 ? 6 : d.getDay() - 1
            return days[dayIdx] === day
        }).map(a => a.count)
        result[day] = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0
    }
    return result
})

const totalAttendance = computed(() => {
    return Object.values(attendanceTable.value).flat().reduce((a, b) => a + b, 0)
})

const totalAttendanceAllTime = computed(() => {
    return attendanceHistory.reduce((a, b) => a + b.count, 0)
})

const now = new Date()
const isCurrentMonth = computed(() =>
    selectedTag.value === "thisMonth" &&
    now.getFullYear() === selectedYear.value &&
    now.getMonth() === selectedMonth.value
)
const jsDay = now.getDay()
const currentDayIndex = jsDay === 0 ? 6 : jsDay - 1
const currentWeekIndex = Math.floor((now.getDate() - 1) / 7)
</script>