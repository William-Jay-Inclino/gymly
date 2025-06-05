<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center gap-2 px-6 py-5 bg-base-100/90">
            <AlertTriangle class="w-5 h-5 text-rose-500/80" />
            <span class="font-semibold text-base-content/80 text-lg">Upcoming Membership Expirations</span>
        </div>
        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr class="text-left text-base-content/60">
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">Member Name</th>
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">Contact Number</th>
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">End Date</th>
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">Sessions Left</th>
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">Status</th>
                        <th class="py-3 px-4 font-semibold bg-base-100 sticky top-0 z-10">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="exp in upcomingExpirations"
                        :key="exp.id"
                        class="hover:bg-base-200/60 transition"
                    >
                        <td class="py-3 px-4 font-medium text-base-content/90 whitespace-nowrap">{{ exp.memberName }}</td>
                        <td class="py-3 px-4 text-base-content/70 whitespace-nowrap">{{ exp.contactNumber }}</td>
                        <td class="py-3 px-4 text-base-content/80 whitespace-nowrap">
                            <span class="inline-block rounded bg-base-200 px-2 py-0.5 font-mono text-xs">{{ exp.endDate }}</span>
                        </td>
                        <td class="py-3 px-4 text-base-content/80 whitespace-nowrap">
                            <span v-if="exp.sessionsLeft !== null">{{ exp.sessionsLeft }}</span>
                            <span v-else class="text-base-content/40 italic">N/A</span>
                        </td>
                        <td class="py-3 px-4 whitespace-nowrap">
                            <span
                                v-if="exp.status === 'Expired Today'"
                                class="badge badge-error badge-xs rounded-full px-3 py-1 text-xs font-semibold bg-rose-100/80 text-rose-700 border-0"
                            >
                                Expired Today
                            </span>
                            <span
                                v-else
                                class="badge badge-warning badge-xs rounded-full px-3 py-1 text-xs font-semibold bg-amber-100/80 text-amber-700 border-0"
                            >
                                Expiring Soon
                            </span>
                        </td>
                        <td class="py-3 px-4 whitespace-nowrap">
                            <button
                                class="btn btn-xs btn-primary rounded px-3"
                                @click="$emit('add-plan', exp)"
                                type="button"
                            >
                                Add Plan
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="upcomingExpirations.length === 0" class="text-base-content/60 text-center py-10 text-sm">
                <span class="italic">No upcoming expirations.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AlertTriangle } from "lucide-vue-next"

defineProps<{
    upcomingExpirations: Array<{
        id: number
        memberName: string
        contactNumber: string
        endDate: string
        sessionsLeft: number | null
        status: "Expiring Soon" | "Expired Today"
        planName?: string
    }>
}>()

defineEmits<{
    (e: 'add-plan', exp: any): void
}>()
</script>