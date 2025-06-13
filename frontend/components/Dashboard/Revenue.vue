<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-4 sm:p-7 col-span-2 min-h-[340px]">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <span class="font-semibold text-base-content/70 flex items-center gap-2 text-base sm:text-lg">
                <LineChart class="w-5 h-5 sm:w-6 sm:h-6 text-primary/80" /> 
                <span class="truncate">Revenue Over Time</span>
            </span>
            <div class="flex flex-col xs:flex-row gap-2 sm:flex-row sm:items-center">
                <select v-model="start_year" class="select select-xs sm:select-sm bg-base-200 border-base-300 text-base-content/80 w-full xs:w-auto">
                    <option v-for="year in years" :key="'start-' + year" :value="year">{{ year }}</option>
                </select>
                <span class="text-base-content/60 text-xs text-center xs:text-left">to</span>
                <select v-model="end_year" class="select select-xs sm:select-sm bg-base-200 border-base-300 text-base-content/80 w-full xs:w-auto">
                    <option v-for="year in years" :key="'end-' + year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <div v-if="component_loading" class="flex justify-center items-center min-h-[200px] text-xs text-base-content/50">
            Loading please wait...
            <!-- <span class="loading loading-spinner loading-lg"></span> -->
        </div>
        <div v-else class="w-full overflow-x-auto">
            <div class="min-w-[400px] sm:min-w-full" style="height:500px;">
                <canvas
                    :key="chart_key"
                    ref="revenue_chart"
                    height="500"
                    class="w-full"
                    style="display:block;max-width:100%;height:500px"
                ></canvas>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LineChart } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useGlobalStore } from "~/core/global.store"
import { get_revenues } from "~/core/dashboard/dashboard.api"

// --- State ---
const store = useDashboardStore()
const { gym_id } = useGlobalStore()
const revenue_chart = ref<HTMLCanvasElement | null>(null)
let chart_instance: any = null
const start_year = ref<number | undefined>()
const end_year = ref<number | undefined>()
const component_loading = ref(true)
const chart_key = ref(0)

// --- Data Fetching ---
const fetch_revenues = async () => {
    component_loading.value = true
    if (!gym_id) {
        component_loading.value = false
        return
    }
    const revenues = await get_revenues({ gym_id })
    if (revenues.length > 0) {
        store.set_revenues(
            revenues.map(i => ({
                month: i.month,
                year: i.year,
                amount: i.amount || 0,
            }))
        )
    }
    component_loading.value = false
    render_chart()
}

onMounted(fetch_revenues)

// --- Computed Properties ---
const revenues = computed(() => store.revenues)
const years = computed(() =>
    Array.from(new Set(revenues.value.map(d => d.year))).sort((a, b) => b - a)
)

// --- Chart Data Preparation ---
const get_range_data = () => {
    const min = Math.min(
        start_year.value !== undefined ? start_year.value : 0,
        end_year.value !== undefined ? end_year.value : 0
    )
    const max = Math.max(
        start_year.value !== undefined ? start_year.value : 0,
        end_year.value !== undefined ? end_year.value : 0
    )
    return revenues.value
        .filter(d => d.year >= min && d.year <= max)
        .sort((a, b) => (a.year - b.year) || (a.month - b.month))
        .map(d => ({
            ...d,
            month_label: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.month - 1]
        }))
}

// --- Chart Rendering ---
const render_chart = async () => {
    const { default: Chart } = await import("chart.js/auto")
    const data = get_range_data()
    const labels = data.map(d => `${d.month_label} ${d.year}`)
    const values = data.map(d => d.amount)

    // Reset canvas size before rendering
    if (revenue_chart.value) {
        revenue_chart.value.width = revenue_chart.value.offsetWidth
        revenue_chart.value.height = 200
    }

    if (chart_instance) chart_instance.destroy()
    if (revenue_chart.value) {
        chart_instance = new Chart(revenue_chart.value, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        label: "Revenue",
                        data: values,
                        borderColor: "#3b82f6",
                        backgroundColor: "rgba(59,130,246,0.06)",
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: "#3b82f6",
                    },
                ],
            },
            options: {
                plugins: { legend: { display: false } },
                maintainAspectRatio: false, // <-- Add this
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: "#a3a3a3" },
                        grid: { color: "#f3f4f6" },
                    },
                    x: {
                        ticks: { color: "#a3a3a3" },
                        grid: { display: false },
                    },
                },
            },
        })
    }
}

// --- Watchers ---
watch(years, (new_years) => {
    if (new_years.length > 0) {
        start_year.value = new_years[new_years.length - 1]
        end_year.value = new_years[0]
    }
    chart_key.value++ // force canvas re-creation on year change
}, { immediate: true })

watch([start_year, end_year], () => {
    if (!component_loading.value) {
        chart_key.value++ // force canvas re-creation on filter change
        nextTick(() => render_chart())
    }
})

onUnmounted(() => {
    if (chart_instance) {
        chart_instance.destroy()
        chart_instance = null
    }
})
</script>