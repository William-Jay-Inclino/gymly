<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-7 col-span-2 min-h-[340px]">
        <div class="flex items-center justify-between mb-4">
            <span class="font-semibold text-base-content/70 flex items-center gap-2 text-lg">
                <LineChart class="w-6 h-6 text-primary/80" /> Revenue Over Time
            </span>
            <div class="flex items-center gap-2">
                <select
                    v-model="startYear"
                    class="select select-sm bg-base-200 border-base-300 text-base-content/80"
                >
                    <option v-for="year in years" :key="'start-' + year" :value="year">{{ year }}</option>
                </select>
                <span class="text-base-content/60 text-xs">to</span>
                <select
                    v-model="endYear"
                    class="select select-sm bg-base-200 border-base-300 text-base-content/80"
                >
                    <option v-for="year in years" :key="'end-' + year" :value="year">{{ year }}</option>
                </select>
            </div>
        </div>
        <canvas ref="revenueChart" height="160"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"
import { LineChart } from "lucide-vue-next"
import { useDashboardStore2 } from "~/core/dashboard/dashboard.store2"

const { revenueData } = useDashboardStore2()
const years = Array.from(new Set(revenueData.value.map(d => d.year))).sort((a, b) => b - a)
const startYear = ref(years[years.length - 1])
const endYear = ref(years[0])

const revenueChart = ref<HTMLCanvasElement | null>(null)
let chartInstance: any = null

const getRangeData = () => {
    const min = Math.min(startYear.value, endYear.value)
    const max = Math.max(startYear.value, endYear.value)
    return revenueData.value.filter(d => d.year >= min && d.year <= max)
        .sort((a, b) => (a.year - b.year) || (monthIndex(a.month) - monthIndex(b.month)))
}

const monthIndex = (month: string) => {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return months.indexOf(month)
}

const renderChart = async () => {
    const { default: Chart } = await import("chart.js/auto")
    const data = getRangeData()
    const labels = data.map(d => `${d.month} ${d.year}`)
    const values = data.map(d => d.revenue)

    if (chartInstance) {
        chartInstance.destroy()
    }
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
                plugins: {
                    legend: { display: false },
                },
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

onMounted(renderChart)
watch([startYear, endYear], renderChart)
</script>