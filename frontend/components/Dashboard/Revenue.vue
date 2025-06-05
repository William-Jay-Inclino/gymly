<template>
    <div class="bg-base-100 rounded-xl shadow border border-base-200 p-7 col-span-2 min-h-[340px]">
        <span class="font-semibold text-base-content/70 mb-4 block flex items-center gap-2 text-lg">
            <LineChart class="w-6 h-6 text-primary/80" /> Revenue Over Time
        </span>
        <canvas ref="revenueChart" height="160"></canvas>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { LineChart } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"

const { revenueData } = useDashboardStore()
const revenueChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    import("chart.js/auto").then(({ default: Chart }) => {
        if (revenueChart.value) {
            new Chart(revenueChart.value, {
                type: "line",
                data: {
                    labels: revenueData.value.map(d => d.month),
                    datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.value.map(d => d.revenue),
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
    })
})
</script>