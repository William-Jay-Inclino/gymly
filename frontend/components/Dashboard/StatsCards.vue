<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Users class="w-5 h-5 text-primary/80 mb-1" />
            <span class="text-base-content/60 text-xs">Total Members</span>
            <span class="text-2xl font-bold text-base-content/80">{{ stats.totalMembers }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <IdCard class="w-5 h-5 text-green-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Active Memberships</span>
            <span class="text-2xl font-bold text-base-content/80">{{ stats.activeMemberships }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Wallet class="w-5 h-5 text-amber-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Total Revenue</span>
            <span class="text-2xl font-bold text-base-content/80">₱{{ stats.totalRevenue.toLocaleString() }}</span>
        </div>
        <div class="bg-base-100 rounded-xl shadow border border-base-200 p-5 flex flex-col items-start gap-2">
            <Clock class="w-5 h-5 text-rose-500/80 mb-1" />
            <span class="text-base-content/60 text-xs">Attendance Today</span>
            <span class="text-2xl font-bold text-base-content/80">{{ upcomingExpirations.length }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Users, IdCard, Wallet, Clock } from "lucide-vue-next"

defineProps<{
    stats: {
        totalMembers: number
        activeMemberships: number
        totalRevenue: number
    }
    upcomingExpirations: Array<{ id: number }>
}>()
</script>