<template>
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center gap-3 mb-8">
            <BarChart2 class="w-6 h-6 text-primary" />
            <h1 class="text-xl font-semibold text-base-content/80">Dashboard</h1>
        </div>
        <StatsCards />

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <Revenue class="col-span-2" />
            <MembershipCount />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-stretch">
            <UpcomingExpirations :upcomingExpirations="upcomingExpirations" />
            <Attendance />
        </div>
    </div>
</template>

<script setup lang="ts">
import { BarChart2 } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { useDashboardStore2 } from "~/core/dashboard/dashboard.store2"
import StatsCards from "~/components/Dashboard/StatsCards.vue"
import Revenue from "~/components/Dashboard/Revenue.vue"
import MembershipCount from "~/components/Dashboard/MembershipCount.vue"
import UpcomingExpirations from "~/components/Dashboard/UpcomingExpirations.vue"
import Attendance from "~/components/Dashboard/Attendance.vue"
import * as api from "~/core/dashboard/dashboard.api"
import { useGlobalStore } from '~/core/global.store'

const { gym_id } = useGlobalStore()
const store = useDashboardStore()

const { stats, upcomingExpirations } = useDashboardStore2()

definePageMeta({
    layout: "base-layout",
})

onMounted(async() => {
    const {
        total_active_memberships,
        total_checked_in_today,
        total_memberships_today
    } = await api.init({ gym_id })

    store.set_gym_stats({
        total_active_memberships,
        total_checked_in_today,
        total_memberships_today
    })

})

</script>