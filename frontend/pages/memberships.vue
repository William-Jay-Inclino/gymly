<template>
    <div class="bg-white rounded-xl shadow-sm p-2 sm:p-4 md:p-8">
        <section class="max-w-5xl mx-auto py-6 sm:py-8">
            <div v-if="is_loading_page" class="flex justify-center items-center min-h-[200px]">
                <span class="loading loading-spinner loading-lg text-primary"></span>
            </div>
            <template v-else>
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <button
                        class="btn btn-primary flex items-center gap-2 btn-sm w-full sm:w-auto"
                        @click="show_add_modal = true"
                        :disabled="is_member_limit_reached"
                        :class="{ 'opacity-50 cursor-not-allowed': is_member_limit_reached }"
                    >
                        <UserPlus class="w-4 h-4" />
                        <span>Add Member</span>
                    </button>
                    <div class="flex-1">
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Search member..."
                            class="input input-bordered input-sm w-full"
                        />
                    </div>
                </div>
                <div v-if="is_near_member_limit && !is_member_limit_reached" class="text-xs text-warning flex items-center gap-1 mb-2">
                    <span class="w-4 h-4 flex items-center justify-center">
                        <AlertTriangle class="w-4 h-4" />
                    </span>
                    You are approaching your member limit ({{ members?.length || 0 }}/{{ limit?.value }})
                </div>
                <div v-if="is_member_limit_reached" class="text-xs text-error flex items-center gap-1 mb-2">
                    <span class="w-4 h-4 flex items-center justify-center">
                        <CircleAlert class="w-4 h-4" />
                    </span>
                    Member limit reached! Cannot add more members. Contact admin to increase limit.
                </div>
                <div class="rounded-lg shadow bg-base-100">
                    <div class="overflow-x-auto">
                        <div class="overflow-y-auto max-h-[60vh]">
                            <table class="table table-zebra w-full text-xs sm:text-sm">
                                <thead class="sticky top-0 bg-base-100 z-10">
                                    <tr>
                                        <th class="font-semibold py-3">Member</th>
                                        <th class="font-semibold py-3">Contact</th>
                                        <th class="font-semibold py-3">Status</th>
                                        <th class="font-semibold py-3">Created</th>
                                        <th class="font-semibold py-3 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="member in filtered_users" :key="member.id">
                                        <td class="py-2 whitespace-nowrap">{{ member.firstname + ' ' + member.lastname }}</td>
                                        <td class="py-2 whitespace-nowrap">{{ member.contact_number }}</td>
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
                                                {{ format_date(member.created_at) }}
                                            </span>
                                        </td>
                                        <td class="py-2">
                                            <div class="flex gap-2 justify-center">
                                                <button
                                                    class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                    data-tip="View Plans"
                                                    @click="view_plans(member)"
                                                >
                                                    <BookCopy class="w-5 h-5 text-info" />
                                                </button>
                                                <button
                                                    class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                    data-tip="View Attendance"
                                                    @click="open_attendance_modal(member)"
                                                >
                                                    <CalendarCheck class="w-5 h-5 text-success" />
                                                </button>
                                                <button
                                                    class="btn btn-xs btn-circle btn-ghost tooltip z-20"
                                                    data-tip="Add Plan"
                                                    @click="open_add_plan_modal(member)"
                                                >
                                                    <PlusSquare class="w-5 h-5 text-primary" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="filtered_users.length === 0">
                                        <td colspan="5" class="text-center text-base-content/60 py-6">
                                            No member found.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Modals -->
                <AddMemberModal
                    :show="show_add_modal"
                    @close="show_add_modal = false"
                    @submit="handle_add_member"
                    :is_adding="is_adding_member"
                />
                <AddPlanModal
                    v-if="show_add_plan_modal"
                    :show="show_add_plan_modal"
                    :member="selected_member"
                    :is_adding="is_adding_plan"
                    @close="show_add_plan_modal = false"
                    @submit="add_membership"
                />
                <MembershipHistoryModal
                    :show="show_plan_list_modal"
                    v-if="show_plan_list_modal"
                    :member="selected_member"
                    @close="show_plan_list_modal = false"
                    :is_loading="is_loading_memberships"
                />
                <AttendanceModal
                    v-if="show_attendance_modal && gym_id"
                    :gym_id="gym_id"
                    :show="show_attendance_modal"
                    :member="selected_member"
                    @close="show_attendance_modal = false"
                    :is_loading="is_loading_attendance"
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
import * as member_api from '~/core/member/member.api'
import * as membership_api from '~/core/membership/membership.api'
import { usePlanStore } from '~/core/plan/plan.store'
import { useGlobalStore } from '~/core/global.store'
import type { GymLimit } from '~/core/gym-limit/gym-limit'

// --- Meta ---
definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

// --- State ---
const plan_store = usePlanStore()
const { gym_id } = useGlobalStore()
const limit = ref<GymLimit | undefined>(undefined)
const members = ref<Member[]>()
const search = ref('')
const show_add_modal = ref(false)
const show_add_plan_modal = ref(false)
const show_plan_list_modal = ref(false)
const show_attendance_modal = ref(false)
const selected_member = ref<Member | undefined>(undefined)

// --- Loading Flags ---
const is_loading_page = ref(true)
const is_loading_memberships = ref(false)
const is_loading_attendance = ref(false)
const is_adding_plan = ref(false)
const is_adding_member = ref(false)

// --- Lifecycle ---
onMounted(async () => {
    if (!gym_id) return
    const response = await member_api.init({ gym_id })
    members.value = response.members
    limit.value = response.limit
    plan_store.set_plans(response.plans)
    is_loading_page.value = false
})

// --- Computed ---
const filtered_users = computed(() => {
    if (!members.value) return []
    return members.value.filter(member =>
        (member.firstname + ' ' + member.lastname)
            .toLowerCase()
            .includes(search.value.trim().toLowerCase())
    )
})

const is_member_limit_reached = computed(() => {
    if (!limit.value) return true
    return (members.value?.length || 0) >= limit.value.value
})

const is_near_member_limit = computed(() => {
    if (!limit.value) return false
    const percentage = (members.value?.length || 0) / limit.value.value
    return percentage >= 0.8 && !is_member_limit_reached.value
})

// --- Methods ---
function format_date(date_str: string) {
    const date = new Date(date_str)
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

async function view_plans(member: Member) {
    show_plan_list_modal.value = true
    is_loading_memberships.value = true
    const response = await membership_api.get_memberships({ member_id: member.id })
    is_loading_memberships.value = false
    member.memberships = response.memberships
    selected_member.value = member
}

function open_attendance_modal(member: Member) {
    selected_member.value = member
    show_attendance_modal.value = true
}

function open_add_plan_modal(member: Member) {
    selected_member.value = member
    show_add_plan_modal.value = true
}

async function handle_add_member(new_member: { 
    firstname: string; 
    lastname: string; 
    contact_number: string;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
}) {
    if (!gym_id) return
    try {
        is_adding_member.value = true
        const response = await member_api.create_member({
            firstname: new_member.firstname,
            lastname: new_member.lastname,
            contact_number: new_member.contact_number,
            plans: new_member.plans,
            gym_id,
        })
        is_adding_member.value = false

        if (response.success && response.data) {
            show_add_modal.value = false
            members.value?.unshift(response.data)
            showToastSuccess('Member added successfully!')
        } else {
            showToastError(response.msg || 'Failed to add member. Please try again.')
        }
    } catch (error) {
        is_adding_member.value = false
        showToastError('Failed to add member. Please try again.')
        console.error(error)
    }
}

async function add_membership(input: {
    member_id: string;
    gym_id: string;
    plans: { plan_id: string; start_date: string; sessions_left?: number }[];
}) {
    if (!gym_id) return
    is_adding_plan.value = true
    const response = await membership_api.add_membership({
        plans: input.plans,
        member_id: input.member_id,
        gym_id,
    })
    is_adding_plan.value = false

    if (response.success) {
        show_add_plan_modal.value = false
        showToastSuccess('Membership plan added successfully!')
    } else {
        showToastError(response.msg || 'Failed to add membership plan. Please try again.')
    }
}
</script>