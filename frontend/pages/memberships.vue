<template>
    <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
        <section class="max-w-4xl mx-auto py-10">
            <div v-if="isLoadingPage" class="flex justify-center items-center min-h-[200px]">
                <span class="loading loading-spinner loading-lg text-primary"></span>
            </div>
            <template v-else>
                <div class="flex items-center justify-between mb-6">
                    <h1 class="text-2xl font-bold">Members</h1>
                    <button class="btn btn-primary flex items-center gap-2" @click="showAddModal = true">
                        <UserPlus class="w-5 h-5" />
                        <span>Add Member</span>
                    </button>
                </div>
                <div class="mb-4">
                    <input
                        v-model="search"
                        type="text"
                        placeholder="Search member..."
                        class="input input-bordered w-full"
                    />
                </div>
                <div class="rounded-xl shadow bg-base-100">
                    <div class="overflow-y-auto" style="max-height: 600px;">
                        <table class="table table-zebra w-full">
                            <thead class="top-0 bg-base-100 z-10">
                                <tr>
                                    <th class="text-base">Member</th>
                                    <th class="text-base">Contact</th>
                                    <th class="text-base">Status</th>
                                    <th class="text-base">Created</th>
                                    <th class="text-base text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in filteredUsers" :key="member.id">
                                    <td>{{ member.firstname + ' ' + member.lastname }}</td>
                                    <td>{{ member.contact_number }}</td>
                                    <td>
                                        <span
                                            class="badge"
                                            :class="member.is_active ? 'badge-soft badge-success' : 'badge-soft badge-error'"
                                        >
                                            {{ member.is_active ? 'Active' : 'Inactive' }}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-sm text-base-content/70">
                                            {{ formatDate(member.created_at) }}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="flex gap-2 justify-center">
                                            <button
                                                class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                                data-tip="View Plans"
                                                @click="viewPlans(member)"
                                            >
                                                <BookCopy class="w-5 h-5 text-info" />
                                            </button>
                                            <button
                                                class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                                data-tip="View Attendance"
                                                @click="openAttendanceModal(member)"
                                            >
                                                <CalendarCheck class="w-5 h-5 text-success" />
                                            </button>
                                            <button
                                                class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                                data-tip="Add Plan"
                                                @click="openAddPlanModal(member)"
                                            >
                                                <PlusSquare class="w-5 h-5 text-primary" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-if="filteredUsers.length === 0">
                                    <td colspan="5" class="text-center text-base-content/60 py-8">
                                        No member found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="text-xs text-base-content/60 mt-6 mb-2">
                         <span class="font-semibold">Total Members:</span> <span class="font-semibold text-error">{{ members?.length || 0 }} </span>
                </div>
                <div class="text-xs text-base-content/60">
                        Maximum of <span class="font-semibold text-error">100 members</span>. Contact system admin if you want to increase your limit.
                </div>
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
                    :show="showAttendanceModal"
                    v-if="showAttendanceModal"
                    :member="selectedMember"
                    @close="showAttendanceModal = false"
                    :is_loading="isLoadingAttendance"
                />
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
import { BookCopy, CalendarCheck, UserPlus, PlusSquare } from 'lucide-vue-next'
import AddMemberModal from '~/components/AddMemberModal.vue'
import AddPlanModal from '~/components/AddPlanModal.vue'
import MembershipHistoryModal from '~/components/MembershipHistoryModal.vue'
import AttendanceModal from '~/components/AttendanceModal.vue'
import type { Member } from '~/core/member/member.types'
import * as memberApi from '~/core/member/member.api'
import * as membershipApi from '~/core/membership/membership.api'
import { usePlanStore } from '~/core/plan/plan.store'
import { useGlobalStore } from '~/core/global.store'

definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

const planStore = usePlanStore()
const { gym_id } = useGlobalStore()

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
            showToastError('Failed to add member. Please try again.')
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

    if(response.success) {
        showAddPlanModal.value = false
        showToastSuccess('Membership plan added successfully!')
    } else {
        showToastError('Failed to add membership plan. Please try again.')
    }
}
</script>