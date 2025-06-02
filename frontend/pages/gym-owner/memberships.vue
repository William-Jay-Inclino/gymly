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
                        <tr v-for="user in filteredUsers" :key="user.id">
                            <td>{{ user.firstname }}</td>
                            <td>{{ user.lastname }}</td>
                            <td>
                                <span
                                    class="badge"
                                    :class="user.is_active ? 'badge-soft badge-success' : 'badge-soft badge-error'"
                                >
                                    {{ user.is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </td>
                            <td>
                                <span class="text-sm text-base-content/70">
                                    {{ formatDate(user.created_at) }}
                                </span>
                            </td>
                            <td>
                                <div class="flex gap-2 justify-center">
                                    <button
                                        class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                        data-tip="View Plans"
                                        @click="viewPlans(user)"
                                    >
                                        <BookCopy class="w-5 h-5 text-info" />
                                    </button>
                                    <button
                                        class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                        data-tip="View Attendance"
                                        @click="openAttendanceModal(user)"
                                    >
                                        <CalendarCheck class="w-5 h-5 text-success" />
                                    </button>
                                    <button
                                        class="btn btn-sm btn-circle btn-ghost tooltip z-20"
                                        data-tip="Add Plan"
                                        @click="openAddPlanModal(user)"
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
            :user="selectedUser"
            @close="showAddPlanModal = false"
            @submit="handleAddPlan"
        />
        <PlanListModal
            v-if="showPlanListModal"
            :user="selectedUser"
            @close="showPlanListModal = false"
        />
        <AttendanceModal
            v-if="showAttendanceModal"
            :user="selectedUser"
            @close="showAttendanceModal = false"
        />
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BookCopy, CalendarCheck, UserPlus, PlusSquare } from 'lucide-vue-next'
import AddMemberModal from '~/components/GymOwner/AddMemberModal.vue'
import AddPlanModal from '~/components/GymOwner/AddPlanModal.vue'
import PlanListModal from '~/components/GymOwner/PlanListModal.vue'
import AttendanceModal from '~/components/GymOwner/AttendanceModal.vue'

interface User {
    id: string
    firstname: string
    middlename?: string
    lastname: string
    email: string
    role: string
    is_active: boolean
    created_at: string
}

const users = ref<User[]>([
    {
        id: '1',
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane@example.com',
        role: 'member',
        is_active: true,
        created_at: '2024-05-01T10:00:00Z',
    },
    {
        id: '2',
        firstname: 'John',
        lastname: 'Smith',
        email: 'john@example.com',
        role: 'member',
        is_active: false,
        created_at: '2024-04-15T14:30:00Z',
    },
])

const search = ref('')
const showAddModal = ref(false)
const showAddPlanModal = ref(false)
const selectedUser = ref<User | null>(null)
const showPlanListModal = ref(false)
const showAttendanceModal = ref(false)

const filteredUsers = computed(() =>
    users.value.filter(user =>
        (user.firstname + ' ' + user.lastname)
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

function viewPlans(user: User) {
    selectedUser.value = user
    showPlanListModal.value = true
}

function openAttendanceModal(user: User) {
    selectedUser.value = user
    showAttendanceModal.value = true
}

function openAddPlanModal(user: User) {
    selectedUser.value = user
    showAddPlanModal.value = true
}

function handleAddMember(newMember: { firstname: string; lastname: string; planId: string }) {
    users.value.push({
        id: String(Date.now()),
        firstname: newMember.firstname,
        lastname: newMember.lastname,
        email: '',
        role: 'member',
        is_active: true,
        created_at: new Date().toISOString(),
    })
    showAddModal.value = false
}

function handleAddPlan({ planId }: { planId: string }) {
    alert(`Plan ${planId} added to ${selectedUser.value?.firstname} ${selectedUser.value?.lastname}`)
    showAddPlanModal.value = false
}

definePageMeta({
    layout: "layout-gym-owner",
})
</script>