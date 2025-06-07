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
                    <div class="flex flex-col gap-6">
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
                                :is_loading="isLoadingMemberships"
                                v-model="selectedMembershipIds"
                                :memberships="memberships"
                                @add-membership="handleAddMembershipClick"
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
                    </div>
                </div>
    
                <!-- Checked-in Members Today -->
                <div class="flex-1 bg-white rounded-xl shadow-sm p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users class="w-5 h-5 text-primary" /> Checked-in Today
                    </h2>
                    <div class="max-h-150 overflow-y-auto">
                        <ul v-if="checkedInToday.length > 0" class="divide-y divide-base-200 text-sm">
                            <li
                                v-for="log in checkedInToday"
                                :key="log.id"
                                class="py-2 flex items-center justify-between"
                            >
                                <div>
                                    <span class="font-medium text-sm text-base-content/70">{{ log.member.firstname }} {{ log.member.lastname }}</span>
                                </div>
                                <span class="badge text-base-content/70 text-xs">
                                    Checked In at<span class="text-primary">{{ formatTime(log.checked_in_at) }}</span>
                                </span>
                            </li>
                        </ul>
                        <div v-else class="text-base-content/60 text-center py-8">
                            No members have checked in today.
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <AddPlanModal
            :show="showAddPlanModal"
            :member="members.find(m => m.id === selectedMemberId)"
            :is_adding="isAddingPlan"
            @close="showAddPlanModal = false"
            @submit="add_membership"
        />

    </div>
</template>

<script setup lang="ts">
import { Clock, Users } from "lucide-vue-next"
import Select from "~/components/Select.vue"
import SelectMembership from "~/components/SelectMembership.vue"
import * as api from "~/core/member-time-logs/member-time-logs.api"
import { showToastSuccess, showToastError } from "~/utils/toast"
import type { Member } from "~/core/member/member.types"
import type { MemberTimeLog } from "~/core/member-time-logs/member-time-logs.types"
import type { Membership } from "~/core/membership/membership.types"
import * as membershipApi from "~/core/membership/membership.api"
import { useGlobalStore } from '~/core/global.store'
import { usePlanStore } from '~/core/plan/plan.store'

definePageMeta({
    layout: "base-layout",
})

const { gym_id } = useGlobalStore()
const planStore = usePlanStore()

const isLoadingPage = ref(true)
const isLoggingAttendance = ref(false)
const isAddingPlan = ref(false)
const isLoadingMemberships = ref(false)

const showAddPlanModal = ref(false)
const addPlanMember = ref<Member | undefined>(undefined)

const members = ref<Member[]>([])
const checkedInToday = ref<MemberTimeLog[]>([])
const selectedMemberId = ref<string>("")
const memberships = ref<Membership[]>([])
const selectedMembershipIds = ref<string[]>([])

onMounted(async () => {
    isLoadingPage.value = false
    const today = new Date().toISOString().slice(0, 10)
    const response = await api.init({ gym_id, date: today })
    members.value = response.members
    planStore.set_plans(response.plans)
    checkedInToday.value = response.check_ins
})

// Watch for member selection to fetch memberships for that member
watch(selectedMemberId, async (member_id: string) => {
    selectedMembershipIds.value = []
    if (member_id) {
        await get_memberships(member_id)
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
            gym_id,
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


function handleAddMembershipClick() {
    // Optionally, you can set addPlanMember to the selected member if needed
    showAddPlanModal.value = true
}

async function add_membership(input: {
    member_id: string;
    gym_id: string;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
}) {
    isAddingPlan.value = true;
    const response = await membershipApi.add_membership({
        plans: input.plans,
        member_id: input.member_id,
        gym_id,
    });
    isAddingPlan.value = false;

    if(response.success) {
        showAddPlanModal.value = false
        showToastSuccess('Membership plan added successfully!')
        await get_memberships(input.member_id)
    } else {
        showToastError('Failed to add membership plan. Please try again.')
    }
}


async function get_memberships(member_id: string) {
    isLoadingMemberships.value = true
    const response = await membershipApi.get_memberships({ member_id: member_id, only_active: true })
    memberships.value = response.memberships
    isLoadingMemberships.value = false
}


</script>
