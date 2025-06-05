<template>
    <div class="max-w-5xl mx-auto">
        <div v-if="isLoadingPage" class="flex justify-center items-center min-h-[200px]">
            <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
        <template v-else>
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Log Attendance Panel -->
                <div class="flex-1 bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Clock class="w-5 h-5 text-primary" /> Log Member Attendance
                    </h2>
                    <form class="flex flex-col gap-6">
                        <label class="block">
                            <span class="text-base-content/80 font-medium">
                                Select Member
                            </span>
                            <Select
                                v-model="selectedMemberId"
                                :options="memberOptions"
                                placeholder="Enter name..."
                            />
                        </label>
                        <div v-if="!!selectedMemberId" class="mt-3">
                            <SelectMembership
                                v-model="selectedMembershipIds"
                                :memberships="memberships"
                            />
                        </div>
                        <button
                            class="btn btn-primary w-full mt-3"
                            type="button"
                            @click="handleCheckIn"
                            :disabled="isLoggingAttendance || !selectedMemberId || selectedMembershipIds.length === 0"
                        >
                            <span v-if="isLoggingAttendance" class="loading loading-spinner loading-xs mr-2"></span>
                            Log Attendance
                        </button>
                    </form>
                </div>
    
                <!-- Checked-in Members Today -->
                <div class="flex-1 bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users class="w-5 h-5 text-primary" /> Checked-in Today
                    </h2>
                    <div class="max-h-150 overflow-y-auto">
                        <ul v-if="checkedInToday.length > 0" class="divide-y divide-base-200">
                            <li
                                v-for="log in checkedInToday"
                                :key="log.id"
                                class="py-3 flex items-center justify-between"
                            >
                                <div>
                                    <span class="font-medium">{{ log.member.firstname }} {{ log.member.lastname }}</span>
                                    <span class="ml-2 text-xs text-base-content/60">
                                        ({{ formatTime(log.checked_in_at) }})
                                    </span>
                                </div>
                                <span class="badge badge-success badge-soft">Checked In</span>
                            </li>
                        </ul>
                        <div v-else class="text-base-content/60 text-center py-8">
                            No members have checked in today.
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { Clock, Users } from "lucide-vue-next"
import Select from "~/components/Select.vue"
import SelectMembership from "~/components/SelectMembership.vue"
import * as api from "~/core/member-time-logs/member-time-logs.api"
import { showToastSuccess, showToastError } from "~/utils/toast"
import type { Member } from "~/core/member/member.types"
import type { MemberTimeLog } from "~/core/member-time-logs/member-time-logs.types"
import type { Membership } from "~/core/membership/membership.types"
import { get_memberships } from "~/core/membership/membership.api"

definePageMeta({
    layout: "base-layout",
})

const gymId = 'b4e45c98-6d62-47d9-b24e-4fbca42119ce' //temp

const isLoadingPage = ref(true)
const isLoggingAttendance = ref(false)

const members = ref<Member[]>([])
const checkedInToday = ref<MemberTimeLog[]>([])
const selectedMemberId = ref<string>("")
const memberships = ref<Membership[]>([])
const selectedMembershipIds = ref<string[]>([])

onMounted(async () => {
    isLoadingPage.value = false
    const today = new Date().toISOString().slice(0, 10)
    const response = await api.init({ gym_id: gymId, date: today })
    members.value = response.members
    checkedInToday.value = response.check_ins
})

// Watch for member selection to fetch memberships for that member
watch(selectedMemberId, async (member_id: string) => {
    selectedMembershipIds.value = []
    if (member_id) {
        const response = await get_memberships({ member_id, only_active: true })
        memberships.value = response.memberships
    } else {
        memberships.value = []
    }
})

const memberOptions = computed(() =>
    members.value.map(m => ({
        label: `${m.firstname} ${m.lastname}`,
        value: m.id
    }))
)


function formatTime(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

async function handleCheckIn() {
    if (!selectedMemberId.value || selectedMembershipIds.value.length === 0) return

    isLoggingAttendance.value = true
    try {
        const response = await api.log_time({
            gym_id: gymId,
            member_id: selectedMemberId.value,
            membership_ids: selectedMembershipIds.value
        })
        
        if(response.success && response.data) {
            selectedMemberId.value = ""
            selectedMembershipIds.value = []
            showToastSuccess("Attendance logged successfully!")
            checkedInToday.value.unshift(response.data)
        } else {
            showToastError(response.msg)
        }

    } catch (e: any) {
        showToastError("Failed to log attendance. Please refresh the page and try again")
    } finally {
        isLoggingAttendance.value = false
    }
}


</script>
