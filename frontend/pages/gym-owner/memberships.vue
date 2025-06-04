<template>
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
                                <th class="text-base">Status</th>
                                <th class="text-base">Joined</th>
                                <th class="text-base text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="member in filteredUsers" :key="member.id">
                                <td>{{ member.firstname + ' ' + member.lastname }}</td>
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
            <AddMemberModal
                v-if="showAddModal"
                :set_default_plan="true"
                @close="showAddModal = false"
                @submit="handleAddMember"
                :is_adding="isAddingMember"
            />
            <AddPlanModal
                v-if="showAddPlanModal"
                :member="selectedMember"
                @close="showAddPlanModal = false"
                @submit="handleAddMembershipPlan"
                :is_adding="isAddingPlan"
            />
            <MembershipHistoryModal
                v-if="showPlanListModal"
                :member="selectedMember"
                @close="showPlanListModal = false"
                :is_loading="isLoadingMemberships"
            />
            <AttendanceModal
                v-if="showAttendanceModal"
                :member="selectedMember"
                @close="showAttendanceModal = false"
                :is_loading="isLoadingAttendance"
            />
        </template>
    </section>
</template>

<script setup lang="ts">
import { BookCopy, CalendarCheck, UserPlus, PlusSquare } from 'lucide-vue-next'
import AddMemberModal from '~/components/GymOwner/AddMemberModal.vue'
import AddPlanModal from '~/components/GymOwner/AddPlanModal.vue'
import MembershipHistoryModal from '~/components/GymOwner/MembershipHistoryModal.vue'
import AttendanceModal from '~/components/GymOwner/AttendanceModal.vue'
import type { Member } from '~/core/member/member.types'
import * as memberApi from '~/core/member/member.api'
import { add_membership } from '~/core/membership/membership.api'
import { usePlanStore } from '~/core/plan/plan.store'

definePageMeta({
    layout: "layout-gym-owner",
})

const planStore = usePlanStore()

const members = ref<Member[]>()
const gymId = '412ec826-bd16-4ed3-bc11-6d77e1b32ce3' //temp

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
    const response = await memberApi.init()
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
    const response = await memberApi.get_memberships({ member_id: member.id })
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
    middlename: string;
    lastname: string; 
    contact_number: string;
    planIds: string[];
}) {
    try {
        isAddingMember.value = true;
        const response = await memberApi.create_member({
            firstname: newMember.firstname,
            middlename: newMember.middlename,
            lastname: newMember.lastname,
            contact_number: newMember.contact_number,
            plan_ids: newMember.planIds,
            gym_id: gymId,
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

async function handleAddMembershipPlan(payload: { plan_ids: string[], member_id: string }) {
    console.log('handleAddPlan', payload);

    const {  plan_ids, member_id } = payload;

    isAddingPlan.value = true;
    const response = await add_membership({
        plan_ids,
        member_id,
        gym_id: gymId,
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