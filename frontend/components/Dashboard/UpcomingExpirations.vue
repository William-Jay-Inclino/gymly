<template>
    <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-0 overflow-hidden flex flex-col h-full max-h-[730px]">
        <!-- Header -->
        <div class="flex items-center gap-2 px-4 sm:px-6 py-4 sm:py-5 bg-base-100/90 border-b border-base-200">
            <AlertTriangle class="w-5 h-5 text-rose-500/80" />
            <span class="font-semibold text-base-content/80 text-base sm:text-lg">Upcoming Membership Expirations</span>
        </div>
        <!-- List -->
        <div class="flex-1 p-3 sm:p-4 overflow-y-auto min-h-0">
            <div v-if="loading" class="flex justify-center py-10">
                <span class="loading loading-spinner loading-md"></span>
            </div>
            <template v-else>
                <ul class="flex flex-col gap-3 sm:gap-4">
                    <li
                        v-for="exp in store.upcoming_membership_expirations"
                        :key="exp.id"
                        class="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-base-200/70 hover:bg-primary/10 transition-all shadow-sm min-w-0"
                    >
                        <!-- Info Block -->
                        <div class="flex flex-col gap-2 flex-1 min-w-0">
                            <span class="font-semibold text-base-content/90 text-sm sm:text-base break-words leading-tight">
                                {{ exp.member.firstname }} {{ exp.member.lastname }}
                            </span>
                            <div class="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6">
                                <span v-if="exp.plan_name" class="inline-block rounded bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium whitespace-nowrap">
                                    {{ exp.plan_name }}
                                </span>
                                <span class="flex items-center gap-1 text-xs text-base-content/60 min-w-0">
                                    <Phone class="w-3 h-3 text-base-content/40" />
                                    <span class="truncate max-w-[120px] xs:max-w-[160px] sm:max-w-[180px] md:max-w-[220px]">{{ exp.member.contact_number }}</span>
                                </span>
                                <span
                                    v-if="(exp.days_left !== undefined && exp.days_left !== null && exp.days_left > 0)"
                                    class="inline-block rounded bg-base-100 px-2 py-0.5 text-xs text-base-content/70 whitespace-nowrap"
                                >
                                    Days Left:
                                    <span>{{ exp.days_left }}</span>
                                </span>
                                <span
                                    v-if="(exp.sessions_left !== undefined && exp.sessions_left !== null && exp.sessions_left > 0)"
                                    class="inline-block rounded bg-base-100 px-2 py-0.5 text-xs text-base-content/70 whitespace-nowrap"
                                >
                                    Sessions Left:
                                    <span>{{ exp.sessions_left }}</span>
                                </span>
                            </div>
                        </div>
                        <!-- Reminded Checkbox -->
                        <div class="flex-shrink-0 flex items-center justify-end mt-2 sm:mt-0">
                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    class="checkbox checkbox-primary"
                                    :checked="exp.is_reminded"
                                    @change="set_reminded(exp, $event)"
                                />
                                <span class="text-xs text-base-content/70">Reminded</span>
                            </label>
                        </div>
                    </li>
                </ul>
                <div v-if="store.upcoming_membership_expirations.length === 0" class="text-base-content/60 text-center py-10 text-sm">
                    <span class="italic">No upcoming expirations.</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AlertTriangle, Phone } from "lucide-vue-next"
import { useDashboardStore } from "~/core/dashboard/dashboard.store"
import type { Membership } from "~/core/membership/membership.types";
import { get_upcoming_membership_expirations } from "~/core/dashboard/dashboard.api";
import { useGlobalStore } from "~/core/global.store";
import { set_is_reminded } from "~/core/membership/membership.api";

const store = useDashboardStore()
const { gym_id } = useGlobalStore()
const loading = ref(true)

onMounted(async() => {
    loading.value = true
    if (!gym_id) {
        loading.value = false
        return
    }
    const memberships = await get_upcoming_membership_expirations({ gym_id })
    store.set_upcoming_membership_expirations({ memberships });
    loading.value = false
});

async function set_reminded(membership: Membership, event: Event) {
    const previous = membership.is_reminded;
    const target = event.target as HTMLInputElement;
    const newValue = target.checked;
    membership.is_reminded = newValue;

    const response = await set_is_reminded({
        membership_id: membership.id,
        is_reminded: newValue
    });

    if(response.success) {
        showToastSuccess("Reminded status updated successfully.")
    } else {
        membership.is_reminded = previous;
        showToastError("Failed to update reminded status. Please try again or refresh the page.");
    }
}
</script>