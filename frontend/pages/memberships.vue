<template>
    <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
        <section class="max-w-5xl mx-auto py-8">
            <div v-if="isLoadingPage" class="flex justify-center items-center min-h-[200px]">
                <span class="loading loading-spinner loading-lg text-primary"></span>
            </div>
            <template v-else>
                <div class="flex items-center justify-between mb-5">
                    <button
                        class="btn btn-primary flex items-center gap-2 btn-sm"
                        @click="showAddModal = true"
                        :disabled="isMemberLimitReached"
                        :class="{ 'opacity-50 cursor-not-allowed': isMemberLimitReached }"
                    >
                        <UserPlus class="w-4 h-4" />
                        <span>Add Member</span>
                    </button>
                </div>
                <div class="mb-2 flex items-center gap-2">
                    <input
                        v-model="search"
                        type="text"
                        placeholder="Search member..."
                        class="input input-bordered input-sm w-full"
                    />
                    <!-- <span
                        v-if="limit"
                        class="badge badge-outline badge-sm whitespace-nowrap"
                        style="max-width: 110px; overflow: hidden; text-overflow: ellipsis;"
                    >
                        {{ members?.length || 0 }}/{{ limit.value }}
                        <span class="hidden sm:inline"> members</span>
                    </span> -->
                </div>
                <div v-if="isNearMemberLimit && !isMemberLimitReached" class="text-xs text-warning flex items-center gap-1 mb-2">
                    <span class="w-4 h-4 flex items-center justify-center">
                        <AlertTriangle class="w-4 h-4" />
                    </span>
                    You are approaching your member limit ({{ members?.length || 0 }}/{{ limit?.value }})
                </div>
                <div v-if="isMemberLimitReached" class="text-xs text-error flex items-center gap-1 mb-2">
                    <span class="w-4 h-4 flex items-center justify-center">
                        <CircleAlert class="w-4 h-4" />
                    </span>
                    Member limit reached! Cannot add more members. Contact admin to increase limit.
                </div>
                <div class="rounded-lg shadow bg-base-100">
                    <div class="overflow-y-auto" style="max-height: 500px;">
                        <table class="table table-zebra w-full text-sm">
                            <thead class="top-0 bg-base-100 z-10">
                                <tr>
                                    <th class="font-semibold py-3">Member</th>
                                    <th class="font-semibold py-3">Contact</th>
                                    <th class="font-semibold py-3">Status</th>
                                    <th class="font-semibold py-3">Created</th>
                                    <th class="font-semibold py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in filteredUsers" :key="member.id">
                                    <td class="py-2">{{ member.firstname + ' ' + member.lastname }}</td>
                                    <td class="py-2">{{ member.contact_number }}</td>
                                    <td class="py-2">
                                        <span
                                            class="badge badge-xs"
                                            :class="member.is_active ? 'badge-soft badge-success' : 'badge-soft badge-error'"
                                        >
                                            {{ member.is_active ? 'Active' : 'Inactive' }}
                                        </span>
                                    </td>
                                    <td class="py-2">
                                        <span class="text-xs text-base-content/70">
                                            {{ formatDate(member.created_at) }}
                                        </span>
                                    </td>
                                    <td class="py-2">
                                        <div class="flex gap-2 justify-center">
                                            <button
                                                class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                data-tip="View Plans"
                                                @click="viewPlans(member)"
                                            >
                                                <BookCopy class="w-5 h-5 text-info" />
                                            </button>
                                            <button
                                                class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                data-tip="View Attendance"
                                                @click="openAttendanceModal(member)"
                                            >
                                                <CalendarCheck class="w-5 h-5 text-success" />
                                            </button>
                                            <button
                                                class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                data-tip="Add Plan"
                                                @click="openAddPlanModal(member)"
                                            >
                                                <PlusSquare class="w-5 h-5 text-primary" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="filteredUsers.length === 0">
                                    <td colspan="5" class="text-center text-base-content/60 py-6">
                                        No member found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- ...existing modals... -->
                <AddMemberModal
                    :show="showAddModal"
                    @close="showAddModal = false"
                    @submit="handleAddMember"
                    :is_adding="isAddingMember"
                />
                <AddPlanModal
                    v-if="showAddPlanModal"
                    :show="showAddPlanModal"
                    :member="selectedMember"
                    :is_adding="isAddingPlan"
                    @close="showAddPlanModal = false"
                    @submit="add_membership"
                />
                <MembershipHistoryModal
                    :show="showPlanListModal"
                    v-if="showPlanListModal"
                    :member="selectedMember"
                    @close="showPlanListModal = false"
                    :is_loading="isLoadingMemberships"
                />
                <AttendanceModal
                    v-if="showAttendanceModal && gym_id"
                    :gym_id="gym_id"
                    :show="showAttendanceModal"
                    :member="selectedMember"
                    @close="showAttendanceModal = false"
                    :is_loading="isLoadingAttendance"
                />
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
import { BookCopy, CalendarCheck, UserPlus, PlusSquare, AlertTriangle, CircleAlert } from 'lucide-vue-next'
import AddMemberModal from '~/components/AddMemberModal.vue'
import AddPlanModal from '~/components/AddPlanModal.vue'
import MembershipHistoryModal from '~/components/MembershipHistoryModal.vue'
import AttendanceModal from '~/components/AttendanceModal.vue'
import type { Member } from '~/core/member/member.types'
import * as memberApi from '~/core/member/member.api'
import * as membershipApi from '~/core/membership/membership.api'
import { usePlanStore } from '~/core/plan/plan.store'
import { useGlobalStore } from '~/core/global.store'
import type { GymLimit } from '~/core/gym-limit/gym-limit'

definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

const planStore = usePlanStore()
const { gym_id } = useGlobalStore()
const limit = ref<GymLimit | undefined>(undefined)

const members = ref<Member[]>()

// flags
const isLoadingPage = ref(true)
const isLoadingMemberships = ref(false)
const isLoadingAttendance = ref(false)
const isAddingPlan = ref(false)
const isAddingMember = ref(false)

const search = ref('')
const showAddModal = ref(false)
const showAddPlanModal = ref(false)
const selectedMember = ref<Member | undefined>(undefined)
const showPlanListModal = ref(false)
const showAttendanceModal = ref(false)

onMounted(async() => {
    if (!gym_id) return; 
    const response = await memberApi.init({ gym_id })
    members.value = response.members
    limit.value = response.limit
    planStore.set_plans(response.plans)
    isLoadingPage.value = false
})

const filteredUsers = computed(() => {
    if(!members.value) return []
    return members.value.filter(member =>
        (member.firstname + ' ' + member.lastname)
            .toLowerCase()
            .includes(search.value.trim().toLowerCase())
    )
})

const isMemberLimitReached = computed(() => {
    if (!limit.value) return false
    return (members.value?.length || 0) >= limit.value.value
})

const isNearMemberLimit = computed(() => {
    if (!limit.value) return false
    const percentage = (members.value?.length || 0) / limit.value.value
    return percentage >= 0.8 && !isMemberLimitReached.value
})

function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

async function viewPlans(member: Member) {
    showPlanListModal.value = true
    isLoadingMemberships.value = true
    const response = await membershipApi.get_memberships({ member_id: member.id })
    isLoadingMemberships.value = false
    member.memberships = response.memberships
    selectedMember.value = member
}

function openAttendanceModal(member: Member) {
    selectedMember.value = member
    showAttendanceModal.value = true
}

function openAddPlanModal(member: Member) {
    selectedMember.value = member
    showAddPlanModal.value = true
}

async function handleAddMember(newMember: { 
    firstname: string; 
    lastname: string; 
    contact_number: string;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
}) {
    if (!gym_id) return; 
    try {
        isAddingMember.value = true;
        const response = await memberApi.create_member({
            firstname: newMember.firstname,
            lastname: newMember.lastname,
            contact_number: newMember.contact_number,
            plans: newMember.plans, 
            gym_id,
        });
        isAddingMember.value = false;

        if (response.success && response.data) {
            showAddModal.value = false;
            members.value?.unshift(response.data);
            showToastSuccess('Member added successfully!')
        } else {
            showToastError(response.msg || 'Failed to add member. Please try again.');
        }
    } catch (error) {
        console.error(error);
    }
}

async function add_membership(input: {
    member_id: string;
    gym_id: string;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
}) {
    if (!gym_id) return; 
    isAddingPlan.value = true;
    const response = await membershipApi.add_membership({
        plans: input.plans,
        member_id: input.member_id,
        gym_id,
    });
    isAddingPlan.value = false;

    console.log('response', response);

    if(response.success) {
        showAddPlanModal.value = false
        showToastSuccess('Membership plan added successfully!')
    } else {
        showToastError(response.msg || 'Failed to add membership plan. Please try again.')
    }
}
</script>