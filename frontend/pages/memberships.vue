<template>
    <div class="max-w-5xl mx-auto py-8 px-2 sm:px-4">
        <!-- Loading Spinner -->
        <div v-if="is_loading_page" class="flex justify-center items-center min-h-[200px]">
            <Spinner />
        </div>

        <!-- No Members: Welcome Message & Add Member Button -->
        <div v-else-if="!members || members.length === 0" class="text-center text-base-content/60 py-2">
            <div class="flex flex-col items-center justify-center mb-12">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-primary mb-2 text-center">
                    👋 Welcome to Gymly!
                </h2>
                <p class="text-base-content/70 text-sm sm:text-base mb-4 text-center max-w-md">
                    Let's get started!
                    Add your first gym member and experience how easy it is to manage your gym, log attendance, and view analytics.
                </p>
                <button
                    class="btn btn-primary flex items-center gap-2 w-full sm:w-auto text-lg sm:text-base py-4 sm:py-2 px-8 sm:px-4 mt-6"
                    @click="show_add_modal = true"
                    :disabled="is_member_limit_reached"
                    :class="{ 'opacity-50 cursor-not-allowed': is_member_limit_reached }"
                >
                    <UserPlus class="w-6 h-6" /> Add Member
                </button>
            </div>
        </div>

        <!-- Members List & Actions -->
        <div v-else>
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h1 class="text-2xl font-bold text-primary">Memberships</h1>
                <button
                    class="btn btn-primary flex items-center gap-2 w-full sm:w-auto text-lg sm:text-base py-4 sm:py-2 px-8 sm:px-4"
                    @click="show_add_modal = true"
                    :disabled="is_member_limit_reached"
                    :class="{ 'opacity-50 cursor-not-allowed': is_member_limit_reached }"
                >
                    <UserPlus class="w-6 h-6" /> Add Member
                </button>
            </div>

            <!-- Search -->
            <div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-base-content/60">
                <input
                    v-model="search"
                    type="text"
                    placeholder="Search member..."
                    class="input input-bordered w-full sm:w-80"
                />
            </div>

            <!-- Limit Warnings -->
            <div
                v-if="is_near_member_limit && !is_member_limit_reached"
                class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-warning/20 bg-warning/10 text-warning text-xs"
            >
                <AlertTriangle class="w-4 h-4" />
                <span>You are approaching your member limit ({{ members?.length || 0 }}/{{ limit?.value }})</span>
            </div>
            <div
                v-if="is_member_limit_reached"
                class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-error/20 bg-error/10 text-error text-xs"
            >
                <CircleAlert class="w-4 h-4" />
                <span>Member limit reached! Cannot add more members. Contact admin to increase limit.</span>
            </div>

            <!-- Members Views -->
            <MembershipTileView
                :members="filtered_users"
                @view-plans="view_plans"
                @view-attendance="open_attendance_modal"
                @add-plan="open_add_plan_modal"
                @edit-member="open_edit_member"
            />
            <div class="hidden sm:block">
                <MembershipListView
                    :members="filtered_users"
                    @view-plans="view_plans"
                    @view-attendance="open_attendance_modal"
                    @add-plan="open_add_plan_modal"
                    @edit-member="open_edit_member"
                />
            </div>
        </div>

        <!-- Modals -->
        <AddMemberModal
            :show="show_add_modal"
            @close="show_add_modal = false"
            @submit="handle_add_member"
            :is_adding="is_adding_member"
        />
        <EditMemberModal
            v-if="show_edit_modal"
            :show="show_edit_modal"
            :member="editing_member"
            :is_updating="is_updating_member"
            @close="show_edit_modal = false"
            @submit="handle_update_member"
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
    </div>
</template>

<script setup lang="ts">
import { UserPlus, AlertTriangle, CircleAlert } from 'lucide-vue-next'
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
const editing_member = ref<Member | null>(null)


// --- Loading Flags ---
const is_loading_page = ref(true)
const is_loading_memberships = ref(false)
const is_loading_attendance = ref(false)
const is_adding_plan = ref(false)
const is_adding_member = ref(false)
const is_updating_member = ref(false)
const show_edit_modal = ref(false)


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

async function handle_update_member(updated: {
    id: string;
    firstname: string;
    lastname: string;
    contact_number?: string | null;
}) {
    try {
        is_updating_member.value = true;
        const response = await member_api.update_member({
            id: updated.id,
            firstname: updated.firstname,
            lastname: updated.lastname,
            contact_number: updated.contact_number,
        });
        is_updating_member.value = false;

        if (response.success && response.data) {
            // Update the member in the local list
            showToastSuccess('Member updated successfully!');
            const idx = members.value?.findIndex(m => m.id === updated.id);
            if (members.value && idx !== undefined && idx !== -1) {
                members.value[idx] = response.data
            }
            show_edit_modal.value = false; // Close modal after successful update
        } else {
            showToastError(response.msg || 'Failed to update member. Please try again.');
        }
    } catch (error) {
        is_updating_member.value = false;
        showToastError('Failed to update member. Please try again.');
        console.error(error);
    }
}

function open_edit_member(member: Member) {
    editing_member.value = { ...member }
    show_edit_modal.value = true
}

</script>