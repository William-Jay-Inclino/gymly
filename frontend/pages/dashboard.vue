<template>
    <div class="max-w-6xl mx-auto px-4">
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
    middleware: ["auth"]
})

onMounted(async() => {
    if (!gym_id) return; 
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