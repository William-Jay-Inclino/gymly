<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col gap-">
        <!-- Today's Memberships -->
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1">
                <CalendarDays class="w-4 h-4" /> Today's New Memberships
            </span>
            <div class="text-xl font-bold text-base-content/80 mt-1">{{ dailyMemberships }}</div>
        </div>
        <!-- Monthly Memberships by Year -->
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1 mb-2">
                <CalendarRange class="w-4 h-4" /> Monthly Memberships (Jan - Dec)
            </span>
            <div class="overflow-x-auto">
                <table class="w-full text-xs mt-2">
                    <thead>
                        <tr class="text-base-content/60">
                            <th class="py-1 px-2 font-semibold text-center">Month</th>
                            <th
                                v-for="year in years"
                                :key="year"
                                class="py-1 px-2 font-semibold text-center"
                            >
                                {{ year }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(month, idx) in months"
                            :key="month"
                            :class="idx === currentMonth ? 'bg-primary/10 font-semibold' : ''"
                        >
                            <td class="py-1 px-2 font-medium text-base-content/70 text-center">{{ month }}</td>
                            <td
                                v-for="year in years"
                                :key="year"
                                class="py-1 px-2 text-center text-base-content/80"
                            >
                                {{ monthlyMembershipsByYear[year][idx] ?? 0 }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CalendarDays, CalendarRange } from "lucide-vue-next"

const dailyMemberships = 5

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const years = [currentYear - 2, currentYear - 1, currentYear]
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

// Dummy data for 3 years, Jan-Dec
const monthlyMembershipsByYear: Record<number, number[]> = {
    [currentYear]:    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [currentYear-1]:  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [currentYear-2]:  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
}
</script>