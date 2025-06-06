<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden flex flex-col h-full max-h-[690px]">
        <!-- Header -->
        <div class="flex items-center gap-2 px-6 py-5 bg-base-100/90 border-b border-base-200">
            <AlertTriangle class="w-5 h-5 text-rose-500/80" />
            <span class="font-semibold text-base-content/80 text-lg">Upcoming Membership Expirations</span>
        </div>
        <!-- List -->
        <div class="flex-1 p-4 overflow-y-auto min-h-0">
            <ul class="flex flex-col gap-4">
                <li
                    v-for="exp in upcomingExpirations"
                    :key="exp.id"
                    class="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-4 rounded-xl bg-base-200/70 hover:bg-primary/10 transition-all shadow-sm min-w-0"
                >
                    <!-- Info Block -->
                    <div class="flex flex-col gap-2 flex-1 min-w-0">
                        <span class="font-semibold text-base-content/90 text-base break-words leading-tight">
                            {{ exp.memberName }}
                        </span>
                        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6">
                            <span class="flex items-center gap-1 text-xs text-base-content/60 min-w-0">
                                <svg class="w-3 h-3 text-base-content/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08a2 2 0 0 1 .84-1.63l8-6.13a2 2 0 0 1 2.32 0l8 6.13a2 2 0 0 1 .84-1.63z"/><circle cx="12" cy="7" r="4"/></svg>
                                <span class="truncate max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">{{ exp.contactNumber }}</span>
                            </span>
                            <span class="inline-block rounded bg-base-300 px-2 py-0.5 font-mono text-xs text-base-content/70 whitespace-nowrap">
                                {{ exp.endDate }}
                            </span>
                            <span class="inline-block rounded bg-base-100 px-2 py-0.5 text-xs text-base-content/70 whitespace-nowrap">
                                Sessions Left:
                                <span v-if="exp.sessionsLeft !== null">{{ exp.sessionsLeft }}</span>
                                <span v-else class="text-base-content/40 italic">N/A</span>
                            </span>
                            <span v-if="exp.planName" class="inline-block rounded bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium whitespace-nowrap">
                                {{ exp.planName }}
                            </span>
                        </div>
                    </div>
                    <!-- Reminded Checkbox -->
                    <div class="flex-shrink-0 flex items-center justify-end mt-3 sm:mt-0">
                        <label class="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-primary"
                                v-model="exp.is_reminded"
                                @change="$emit('reminded-change', exp)"
                            />
                            <span class="text-xs text-base-content/70">Reminded</span>
                        </label>
                    </div>
                </li>
            </ul>
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
        planName?: string
        is_reminded: boolean
    }>
}>()

defineEmits<{
    (e: 'reminded-change', exp: any): void
}>()
</script>