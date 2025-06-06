<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col gap-">
        <!-- Today's Memberships -->
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1">
                <CalendarDays class="w-4 h-4" /> Today's New Memberships
            </span>
            <div class="text-xl font-bold text-base-content/80 mt-1">{{ store.gym_stat.total_memberships_today }}</div>
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
import { get_membership_counts } from "~/core/dashboard/dashboard.api";
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useGlobalStore } from "~/core/global.store";

const store = useDashboardStore()
const { gym_id } = useGlobalStore()

onMounted(async () => {
    const membership_counts = await get_membership_counts({ gym_id })

    if (membership_counts.length > 0) {
        store.set_membership_counts(membership_counts.map(i => ({
            year: i.year,
            month: i.month,
            count: i.count
        })))
    }
})

// Use real data from the store
const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const years = [currentYear - 2, currentYear - 1, currentYear]
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

// Build monthlyMembershipsByYear from store._membership_counts
const monthlyMembershipsByYear: Record<number, number[]> = {}
years.forEach(year => {
    monthlyMembershipsByYear[year] = Array(12).fill(0)
})
store.membership_counts.forEach(({ year, month, count }) => {
    if (monthlyMembershipsByYear[year]) {
        // month is 1-based, array is 0-based
        monthlyMembershipsByYear[year][month - 1] = count
    }
})

</script>