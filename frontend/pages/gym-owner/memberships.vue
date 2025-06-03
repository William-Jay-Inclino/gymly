<template>
    <section class="max-w-4xl mx-auto py-10">
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
                placeholder="Search by first or last name..."
                class="input input-bordered w-full"
            />
        </div>
        <div class="rounded-xl shadow bg-base-100">
            <div class="overflow-y-auto" style="max-height: 400px;">
                <table class="table table-zebra w-full">
                    <thead class="sticky top-0 bg-base-100 z-10">
                        <tr>
                            <th class="text-base">First Name</th>
                            <th class="text-base">Last Name</th>
                            <th class="text-base">Status</th>
                            <th class="text-base">Joined</th>
                            <th class="text-base text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in filteredUsers" :key="member.id">
                            <td>{{ member.firstname }}</td>
                            <td>{{ member.lastname }}</td>
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
            @close="showAddModal = false"
            @submit="handleAddMember"
        />
        <AddPlanModal
            v-if="showAddPlanModal"
            :member="selectedMember"
            @close="showAddPlanModal = false"
            @submit="handleAddPlan"
        />
        <PlanListModal
            v-if="showPlanListModal"
            :member="selectedMember"
            @close="showPlanListModal = false"
        />
        <AttendanceModal
            v-if="showAttendanceModal"
            :member="selectedMember"
            @close="showAttendanceModal = false"
        />
    </section>
</template>

<script setup lang="ts">
import { BookCopy, CalendarCheck, UserPlus, PlusSquare } from 'lucide-vue-next'
import AddMemberModal from '~/components/GymOwner/AddMemberModal.vue'
import AddPlanModal from '~/components/GymOwner/AddPlanModal.vue'
import PlanListModal from '~/components/GymOwner/PlanListModal.vue'
import AttendanceModal from '~/components/GymOwner/AttendanceModal.vue'
import type { Member } from '~/functions/member/member.types'
import * as memberApi from '~/functions/member/member.api'

const members = ref<Member[]>([
    {
        id: '1',
        firstname: 'Jane',
        middlename: null,
        lastname: 'Doe',
        contact_number: null,
        created_at: '2024-05-01T10:00:00Z',
        created_by: 'system',
        is_active: true,
        memberships: [],
    },
    {
        id: '2',
        firstname: 'John',
        middlename: null,
        lastname: 'Smith',
        contact_number: null,
        created_at: '2024-04-15T14:30:00Z',
        created_by: 'system',
        is_active: true,
        memberships: [],
    },
])

const search = ref('')
const showAddModal = ref(false)
const showAddPlanModal = ref(false)
const selectedMember = ref<Member | undefined>(undefined)
const showPlanListModal = ref(false)
const showAttendanceModal = ref(false)


onMounted(async() => {
    const { members } = await memberApi.init()
    console.log('members', members);
})

const filteredUsers = computed(() =>
    members.value.filter(member =>
        (member.firstname + ' ' + member.lastname)
            .toLowerCase()
            .includes(search.value.trim().toLowerCase())
    )
)

function formatDate(dateStr: string) {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

function viewPlans(member: Member) {
    selectedMember.value = member
    showPlanListModal.value = true
}

function openAttendanceModal(member: Member) {
    selectedMember.value = member
    showAttendanceModal.value = true
}

function openAddPlanModal(member: Member) {
    selectedMember.value = member
    showAddPlanModal.value = true
}

function handleAddMember(newMember: { firstname: string; lastname: string; planId: string }) {
    showAddModal.value = false
}

function handleAddPlan({ planId }: { planId: string }) {
    alert(`Plan ${planId} added to ${selectedMember.value?.firstname} ${selectedMember.value?.lastname}`)
    showAddPlanModal.value = false
}

definePageMeta({
    layout: "layout-gym-owner",
})
</script>