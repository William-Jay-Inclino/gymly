<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-7 col-span-2 min-h-[340px]">
        <div class="flex items-center justify-between mb-4">
            <span class="font-semibold text-base-content/70 flex items-center gap-2 text-lg">
                <LineChart class="w-6 h-6 text-primary/80" /> Revenue Over Time
            </span>
            <div class="flex items-center gap-2">
                <select v-model="startYear" class="select select-sm bg-base-200 border-base-300 text-base-content/80">
                    <option v-for="year in years" :key="'start-' + year" :value="year">{{ year }}</option>
                </select>
                <span class="text-base-content/60 text-xs">to</span>
                <select v-model="endYear" class="select select-sm bg-base-200 border-base-300 text-base-content/80">
                    <option v-for="year in years" :key="'end-' + year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <canvas ref="revenueChart" height="200"></canvas>
    </div>
</template>

<script setup lang="ts">
import { LineChart } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useGlobalStore } from "~/core/global.store"
import { get_revenues } from "~/core/dashboard/dashboard.api"

const store = useDashboardStore()
const { gym_id } = useGlobalStore()
const revenueChart = ref<HTMLCanvasElement | null>(null)
let chartInstance: any = null
const startYear = ref<number | undefined>()
const endYear = ref<number | undefined>()

// Fetch and store revenues on mount
onMounted(async () => {
    if (!gym_id) return; 
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

    renderChart()
})

// Computed properties for years and selected range
const revenues = computed(() => store.revenues)
const years = computed(() =>
    Array.from(new Set(revenues.value.map(d => d.year))).sort((a, b) => b - a)
)

// Prepare chart data for selected year range
function getRangeData() {
    const min = Math.min(
        startYear.value !== undefined ? startYear.value : 0,
        endYear.value !== undefined ? endYear.value : 0
    )
    const max = Math.max(
        startYear.value !== undefined ? startYear.value : 0,
        endYear.value !== undefined ? endYear.value : 0
    )
    return revenues.value
        .filter(d => d.year >= min && d.year <= max)
        .sort((a, b) => (a.year - b.year) || (a.month - b.month))
        .map(d => ({
            ...d,
            monthLabel: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.month - 1]
        }))
}

// Render or update the chart
async function renderChart() {
    const { default: Chart } = await import("chart.js/auto")
    const data = getRangeData()
    const labels = data.map(d => `${d.monthLabel} ${d.year}`)
    const values = data.map(d => d.amount)

    if (chartInstance) chartInstance.destroy()
    if (revenueChart.value) {
        chartInstance = new Chart(revenueChart.value, {
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

// Watch for changes and update chart
watch(years, (newYears) => {
    if (newYears.length > 0) {
        startYear.value = newYears[newYears.length - 1]
        endYear.value = newYears[0]
    }
}, { immediate: true })
</script>