<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col gap-5 min-w-[320px] w-full max-w-full">
        <div>
            <span class="text-base-content/60 text-xs flex items-center gap-1">
                <CalendarDays class="w-4 h-4" /> Today's New Memberships
                <button
                    class="btn btn-xs btn-outline btn-primary ml-2"
                    @click="show_memberships_modal = true"
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
            <div class="w-full overflow-x-auto mb-2 responsive-table">
                <div v-if="component_loading" class="flex justify-center py-12">
                    <span class="loading loading-spinner loading-lg"></span>
                </div>
                <table v-else class="w-full text-xs mt-2 min-w-[400px] sm:min-w-0">
                    <thead>
                        <tr class="text-base-content/60">
                            <th class="py-1 px-2 font-semibold text-center">Month</th>
                            <th v-for="year in years" :key="year" class="py-1 px-2 font-semibold text-center">
                                {{ year }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(month, idx) in months" :key="month" :class="idx === current_month ? 'bg-primary/10 font-semibold' : ''">
                            <td class="py-1 px-2 font-medium text-base-content/70 text-center whitespace-nowrap">{{ month }}</td>
                            <td v-for="year in years" :key="year" class="py-1 px-2 text-center text-base-content/80 whitespace-nowrap">
                                <span class="inline-flex items-center gap-1">
                                    {{ monthly_memberships_by_year[year][idx] ?? 0 }}
                                    <button
                                        class="ml-1 btn btn-ghost btn-xs p-0 align-middle rounded-full hover:bg-base-200 transition"
                                        title="View all memberships for this month"
                                        @click="open_month_modal(year, idx + 1, month)"
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
            v-if="gym_id"
            :show="show_memberships_modal"
            :gym_id="gym_id"
            type="today"
            :date="today"
            title="Today's Memberships"
            @close="show_memberships_modal = false"
        />

        <!-- MembershipsModal for all memberships in selected month/year -->
        <MembershipsModal
            v-if="gym_id"
            :show="show_month_memberships_modal"
            :gym_id="gym_id"
            type="month"
            :year="modal_year"
            :month="modal_month"
            :title="`Memberships for ${modal_month_name} ${modal_year}`"
            @close="show_month_memberships_modal = false"
        />
    </div>
</template>

<script setup lang="ts">
import { CalendarDays, CalendarRange, Eye } from "lucide-vue-next"
import { get_membership_counts } from "~/core/dashboard/dashboard.api"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useGlobalStore } from "~/core/global.store"
import { ref, computed, onMounted } from "vue"
import MembershipsModal from "./MembershipsModal.vue"

// --- State ---
const store = useDashboardStore()
const { gym_id } = useGlobalStore()
const years = ref([2025, 2024, 2023])
const months = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
const current_month = new Date().getMonth()
const membership_counts = ref<{ year: number; month: number; count: number }[]>([])
const component_loading = ref(true)

// --- Modal State ---
const show_memberships_modal = ref(false)
const show_month_memberships_modal = ref(false)
const modal_year = ref<number | undefined>(undefined)
const modal_month = ref<number | undefined>(undefined)
const modal_month_name = ref<string>("")
const today = new Date().toISOString().slice(0, 10)

// --- Fetch Data ---
onMounted(async () => {
    if (!gym_id) {
        component_loading.value = false
        return
    }
    component_loading.value = true
    membership_counts.value = await get_membership_counts({ gym_id })
    component_loading.value = false
})

// --- Computed ---
const monthly_memberships_by_year = computed(() => {
    const monthly_memberships: Record<number, number[]> = {}
    years.value.forEach(year => {
        monthly_memberships[year] = Array(12).fill(0)
    })
    membership_counts.value.forEach(({ year, month, count }) => {
        if (monthly_memberships[year]) {
            monthly_memberships[year][month - 1] = count
        }
    })
    return monthly_memberships
})

// --- Methods ---
function open_month_modal(year: number, month: number, month_name: string) {
    modal_year.value = year
    modal_month.value = month
    modal_month_name.value = month_name
    show_month_memberships_modal.value = true
}
</script>
