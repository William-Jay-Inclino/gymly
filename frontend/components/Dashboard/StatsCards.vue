<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Users class="w-5 h-5 text-primary mb-1" />
            <span class="text-base-content/60 text-xs">Total Members</span>
            <span class="text-2xl font-bold text-base-content/80">{{ store.gym_stat.total_members }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <IdCard class="w-5 h-5 text-green-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Active Memberships</span>
            <span class="text-2xl font-bold text-base-content/80">{{ store.gym_stat.total_active_memberships }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Wallet class="w-5 h-5 text-amber-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Total Revenue (all time)</span>
            <span class="text-2xl font-bold text-base-content/80">₱{{ store.gym_stat.total_revenue }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Clock class="w-5 h-5 text-rose-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Attendance Today</span>
            <span class="text-2xl font-bold text-base-content/80">{{ store.gym_stat.total_checked_in_today }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Users, IdCard, Wallet, Clock } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import { get_gym_stats } from "~/core/dashboard/dashboard.api";
import { useGlobalStore } from "~/core/global.store";

const store = useDashboardStore()
const { gym_id } = useGlobalStore()


onMounted( async() => {
    if (!gym_id) return; 
    const stats = await get_gym_stats({ gym_id })
    if(stats) {
        store.set_gym_stats({
            total_revenue: stats.total_revenue,
            total_members: stats.total_members,
        })
    }
})

</script>