<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-8 px-2 sm:px-4">
            <div class="bg-base-100 rounded-2xl shadow-2xl p-0 w-full max-w-4xl relative flex flex-col max-h-[90vh]">
                <!-- Header -->
                <div class="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-base-200">
                    <div class="font-semibold text-base sm:text-lg">
                        {{ modal_title }}
                    </div>
                    <button class="btn btn-xs btn-circle btn-ghost" @click="close_modal" title="Close">
                        ✕
                    </button>
                </div>
                <!-- Content -->
                <div class="flex-1 overflow-y-auto p-3 sm:p-8">
                    <div v-if="loading" class="text-center py-12 text-base-content/60 text-sm">
                        <Spinner />
                        <!-- <span class="loading loading-spinner loading-lg"></span> -->
                    </div>
                    <div v-else>
                        <div v-if="memberships.length === 0" class="text-base-content/50 text-center py-12 text-sm">
                            No memberships found.
                        </div>
                        <div v-else>
                            <div class="flex flex-col gap-4 sm:gap-6">
                                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                                    <div class="text-base font-semibold text-base-content/70">
                                        Total Revenue This Month: <span class="text-primary">{{ format_amount(total_revenue) }}</span>
                                    </div>
                                    <div class="text-xs text-base-content/40">
                                        Showing {{ memberships.length }} membership<span v-if="memberships.length > 1">s</span>
                                    </div>
                                </div>
                                <div>
                                    <div v-for="(week, week_idx) in memberships_by_week" :key="week_idx" class="mb-6 sm:mb-8 bg-base-200/60 rounded-xl p-2 sm:p-4">
                                        <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                                            <span class="font-semibold text-base-content/80 text-sm">
                                                Week {{ week_idx + 1 }}
                                            </span>
                                            <span class="text-xs text-base-content/50">
                                                ({{ week.range }})
                                            </span>
                                            <span class="sm:ml-auto text-xs text-primary font-semibold">
                                                Week Revenue: {{ format_amount(week.week_revenue) }}
                                            </span>
                                        </div>
                                        <div class="flex flex-col gap-4">
                                            <div
                                                v-for="(day, day_idx) in week.days"
                                                :key="day_idx"
                                                class="bg-base-100 rounded-lg shadow-sm border border-base-200 p-3"
                                            >
                                                <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                                    <div class="flex items-center gap-2">
                                                        <span class="font-mono text-base-content/80 text-xs">
                                                            {{ format_date(day.date) }}
                                                        </span>
                                                        <span class="text-xs text-primary font-semibold ml-2">
                                                            Day Revenue: {{ format_amount(day.day_revenue) }}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="overflow-x-auto">
                                                    <table class="w-full text-xs">
                                                        <thead>
                                                            <tr class="bg-base-200 text-base-content/70">
                                                                <th class="py-2 px-2 sm:px-3 text-left">Member</th>
                                                                <th class="py-2 px-2 sm:px-3 text-left">Plan</th>
                                                                <th class="py-2 px-2 sm:px-3 text-right">Amount Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="m in day.memberships" :key="m.id" class="border-t border-base-200">
                                                                <td class="py-2 px-2 sm:px-3">
                                                                    <div class="font-semibold text-base-content/90 text-xs">
                                                                        {{ m.member.firstname }} {{ m.member.lastname }}
                                                                    </div>
                                                                </td>
                                                                <td class="py-2 px-2 sm:px-3">
                                                                    <span class="rounded bg-primary/10 text-primary px-2 py-0.5 text-[11px] font-semibold">
                                                                        {{ m.plan_name || '-' }}
                                                                    </span>
                                                                </td>
                                                                <td class="py-2 px-2 sm:px-3 text-right font-mono">
                                                                    <span class="text-base-content/80">
                                                                        {{ format_amount(m.amount_paid) }}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { get_memberships_by_day, get_all_memberships } from "~/core/dashboard/dashboard.api"

// --- Props & Emits ---
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

// --- State ---
const memberships = ref<any[]>([])
const loading = ref(false)

// --- Computed ---
const modal_title = computed(() => {
    if (props.title) return props.title
    if (props.type === "today") return "Today"
    if (props.type === "month" && props.month && props.year) {
        const month_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return `${month_names[props.month - 1]} ${props.year}`
    }
    return ""
})

const total_revenue = computed(() =>
    memberships.value.reduce((sum, m) => sum + (Number(m.amount_paid) || 0), 0)
)

// --- Grouping Logic ---
const memberships_by_week = computed(() => {
    if (!memberships.value.length) return []
    // Group by day
    const day_map: Record<string, any[]> = {}
    memberships.value.forEach(m => {
        const date = m.start_date.slice(0, 10)
        if (!day_map[date]) day_map[date] = []
        day_map[date].push(m)
    })
    // Sort days
    const sorted_days = Object.keys(day_map).sort()
    // Group days into weeks
    const week_dates_arr: string[][] = []
    let week: string[] = []
    sorted_days.forEach(date => {
        week.push(date)
        if (week.length === 7) {
            week_dates_arr.push([...week])
            week = []
        }
    })
    if (week.length) week_dates_arr.push([...week])

    // Build week objects
    return week_dates_arr.map((week_dates) => {
        const days = week_dates.map((date: string) => {
            const memberships_for_day = day_map[date]
            const day_revenue = memberships_for_day.reduce((sum, m) => sum + (Number(m.amount_paid) || 0), 0)
            return { date, memberships: memberships_for_day, day_revenue }
        })
        const week_revenue = days.reduce((sum, d) => sum + d.day_revenue, 0)
        const range = days.length
            ? `${format_date(days[0].date)} - ${format_date(days[days.length - 1].date)}`
            : ""
        return { days, week_revenue, range }
    })
})

// --- Watchers ---
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

// --- Methods ---
function close_modal() {
    emit("close")
}

function format_date(date: string | null | undefined) {
    if (!date) return "-"
    return new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
}

function format_amount(amount: number | string | null | undefined) {
    if (amount == null) return "-"
    return Number(amount).toLocaleString("en-PH", { style: "currency", currency: "PHP", minimumFractionDigits: 2 })
}
</script>


<style scoped>
.modal-enter-active, .modal-leave-active {
    transition: all 0.25s ease-out;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-from .bg-base-100, .modal-leave-to .bg-base-100 {
    transform: translateY(-20px) scale(0.95);
}

.modal-enter-to .bg-base-100, .modal-leave-from .bg-base-100 {
    transform: translateY(0) scale(1);
    transition: transform 0.25s ease-out;
}
</style>