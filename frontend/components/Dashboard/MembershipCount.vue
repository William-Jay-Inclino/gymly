<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col gap-5">
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1">
                <CalendarDays class="w-4 h-4" /> Today's New Memberships
                <button
                    class="btn btn-xs btn-outline btn-primary ml-2"
                    @click="showMembershipsModal = true"
                    title="View all today's memberships"
                >
                    View
                </button>
            </span>
            <div class="text-xl font-bold text-base-content/80 mt-1">{{ store.gym_stat.total_memberships_today }}</div>
        </div>
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1 mb-2">
                <CalendarRange class="w-4 h-4" /> Monthly Memberships (Jan - Dec)
            </span>
            <div class="overflow-x-auto mb-2">
                <table class="w-full text-xs mt-2">
                    <thead>
                        <tr class="text-base-content/60">
                            <th class="py-1 px-2 font-semibold text-center">Month</th>
                            <th v-for="year in years" :key="year" class="py-1 px-2 font-semibold text-center">
                                {{ year }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(month, idx) in months" :key="month" :class="idx === currentMonth ? 'bg-primary/10 font-semibold' : ''">
                            <td class="py-1 px-2 font-medium text-base-content/70 text-center">{{ month }}</td>
                            <td v-for="year in years" :key="year" class="py-1 px-2 text-center text-base-content/80">
                                <span class="inline-flex items-center gap-1">
                                    {{ monthlyMembershipsByYear[year][idx] ?? 0 }}
                                    <button
                                        class="ml-1 btn btn-ghost btn-xs p-0 align-middle rounded-full hover:bg-base-200 transition"
                                        title="View all memberships for this month"
                                        @click="openMonthModal(year, idx + 1, month)"
                                    >
                                        <Eye class="w-4 h-4 text-base-content/40 hover:text-primary transition" />
                                    </button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-xs text-center text-base-content/40 mb-2 gap-1">
                Click the <span class="font-semibold text-base-content/60">eye icon</span> beside each counter to view memberships and total revenue for that month.
            </div>
        </div>

        <!-- MembershipsModal for today's memberships -->
        <MembershipsModal
            :show="showMembershipsModal"
            :gym_id="gym_id"
            type="today"
            :date="today"
            title="Today's Memberships"
            @close="showMembershipsModal = false"
        />

        <!-- MembershipsModal for all memberships in selected month/year -->
        <MembershipsModal
            :show="showMonthMembershipsModal"
            :gym_id="gym_id"
            type="month"
            :year="modalYear"
            :month="modalMonth"
            :title="`Memberships for ${modalMonthName} ${modalYear}`"
            @close="showMonthMembershipsModal = false"
        />
    </div>
</template>

<script setup lang="ts">
import { CalendarDays, CalendarRange, Eye } from "lucide-vue-next"
import { get_membership_counts } from "~/core/dashboard/dashboard.api";
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useGlobalStore } from "~/core/global.store";
import { ref, computed, onMounted } from "vue"
import MembershipsModal from "./MembershipsModal.vue"

const store = useDashboardStore()
const { gym_id } = useGlobalStore()

const years = ref([new Date().getFullYear() - 2, new Date().getFullYear() - 1, new Date().getFullYear()])
const months = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
const currentMonth = ref(new Date().getMonth())
const membershipCounts = ref<{ year: number; month: number; count: number }[]>([])

onMounted(async () => {
    membershipCounts.value = await get_membership_counts({ gym_id })
})

const showMembershipsModal = ref(false)
const showMonthMembershipsModal = ref(false)
const modalYear = ref<number | undefined>(undefined)
const modalMonth = ref<number | undefined>(undefined)
const modalMonthName = ref<string>('')

const today = new Date().toISOString().slice(0, 10)

function openMonthModal(year: number, month: number, monthName: string) {
    modalYear.value = year
    modalMonth.value = month
    modalMonthName.value = monthName
    showMonthMembershipsModal.value = true
}

const monthlyMembershipsByYear = computed(() => {
    const monthlyMemberships: Record<number, number[]> = {}
    years.value.forEach(year => {
        monthlyMemberships[year] = Array(12).fill(0)
    })
    membershipCounts.value.forEach(({ year, month, count }) => {
        if (monthlyMemberships[year]) {
            monthlyMemberships[year][month - 1] = count
        }
    })
    return monthlyMemberships
})
</script>