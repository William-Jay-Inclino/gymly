<template>
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div class="bg-base-100 rounded-2xl shadow-2xl p-0 w-full max-w-4xl relative flex flex-col">
            <div class="flex items-center justify-between px-8 py-6 border-b border-base-200">
                <div class="font-semibold text-base">
                    {{ modalTitle }}
                </div>
                <button class="btn btn-xs btn-circle btn-ghost" @click="close" title="Close">
                    ✕
                </button>
            </div>
            <div class="p-8">
                <div v-if="loading" class="text-center py-12 text-base-content/60 text-sm">
                    Loading...
                </div>
                <div v-else>
                    <div v-if="memberships.length === 0" class="text-base-content/50 text-center py-12 text-sm">
                        No memberships found.
                    </div>
                    <div v-else>
                        <div class="flex justify-between items-center mb-6">
                            <div class="text-base font-semibold text-base-content/70">
                                Total Revenue: <span class="text-primary">{{ formatAmount(totalRevenue) }}</span>
                            </div>
                            <div class="text-xs text-base-content/40">
                                Showing {{ memberships.length }} membership<span v-if="memberships.length > 1">s</span>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-xs rounded-xl">
                                <thead>
                                    <tr class="bg-base-200 text-base-content/70">
                                        <th class="py-2 px-3 text-left">Member</th>
                                        <th class="py-2 px-3 text-left">Plan</th>
                                        <th class="py-2 px-3 text-left">Start Date</th>
                                        <th class="py-2 px-3 text-right">Amount Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="m in memberships" :key="m.id" class="hover:bg-base-100/80 transition">
                                        <td class="py-2 px-3">
                                            <div class="font-semibold text-base-content/90 text-xs">
                                                {{ m.member.firstname }} {{ m.member.lastname }}
                                            </div>
                                        </td>
                                        <td class="py-2 px-3">
                                            <span class="rounded bg-primary/10 text-primary px-2 py-0.5 text-[11px] font-semibold">
                                                {{ m.plan_name || '-' }}
                                            </span>
                                        </td>
                                        <td class="py-2 px-3 font-mono">
                                            {{ formatDate(m.start_date) }}
                                        </td>
                                        <td class="py-2 px-3 text-right font-mono">
                                            <span class="text-base-content/80">
                                                {{ formatAmount(m.amount_paid) }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"

const props = defineProps<{
    show: boolean
    gym_id: string
    type: "today" | "month"
    year?: number
    month?: number
    date?: string
    title?: string
}>()
const emit = defineEmits(["close"])

import { get_memberships_by_day, get_all_memberships } from "~/core/dashboard/dashboard.api"

const memberships = ref<any[]>([])
const loading = ref(false)

const modalTitle = computed(() => {
    if (props.title) return props.title
    if (props.type === "today") return "Today"
    if (props.type === "month" && props.month && props.year) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return `${monthNames[props.month - 1]} ${props.year}`
    }
    return ""
})

const totalRevenue = computed(() =>
    memberships.value.reduce((sum, m) => sum + (Number(m.amount_paid) || 0), 0)
)

watch(
    () => props.show,
    async (open) => {
        if (open) {
            loading.value = true
            try {
                if (props.type === "today" && props.date) {
                    memberships.value = await get_memberships_by_day({ gym_id: props.gym_id, date: props.date })
                } else if (props.type === "month" && props.year && props.month) {
                    memberships.value = await get_all_memberships({ gym_id: props.gym_id, year: props.year, month: props.month })
                } else {
                    memberships.value = []
                }
            } finally {
                loading.value = false
            }
        }
    },
    { immediate: true }
)

function close() {
    emit("close")
}

function formatDate(date: string | null | undefined) {
    if (!date) return "-"
    return new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
}

function formatDateTime(date: string | null | undefined) {
    if (!date) return "-"
    const d = new Date(date)
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) +
        " " +
        d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
}

function formatAmount(amount: number | string | null | undefined) {
    if (amount == null) return "-"
    return Number(amount).toLocaleString("en-PH", { style: "currency", currency: "PHP", minimumFractionDigits: 2 })
}
</script>