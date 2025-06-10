<template>
    <div class="max-w-5xl mx-auto px-2 sm:px-4">
        <div v-if="is_loading_page" class="flex justify-center items-center min-h-[200px]">
            <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
        <template v-else>
            <div class="flex flex-col gap-8 md:flex-row">
                <!-- Log Attendance Panel -->
                <div class="flex-1 bg-base-100 rounded-xl shadow-sm p-4 sm:p-6 mb-6 md:mb-0">
                    <h2 class="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                        <Clock class="w-5 h-5 text-primary" /> Log Member Attendance
                    </h2>
                    <div class="flex flex-col gap-6">
                        <label class="block">
                            <span class="text-base-content/80 font-medium">
                                Select Member
                            </span>
                            <Select
                                v-model="selected_member_id"
                                :options="member_options"
                                placeholder="Enter name..."
                            />
                        </label>
                        <div v-if="!!selected_member_id" class="mt-3">
                            <SelectMembership
                                :is_loading="is_loading_memberships"
                                v-model="selected_membership_ids"
                                :memberships="memberships"
                                @add-membership="handle_add_membership_click"
                            />
                        </div>
                        <button
                            class="btn btn-primary w-full mt-3"
                            type="button"
                            @click="handle_check_in"
                            :disabled="is_logging_attendance || !selected_member_id || selected_membership_ids.length === 0"
                        >
                            <span v-if="is_logging_attendance" class="loading loading-spinner loading-xs mr-2"></span>
                            Log Attendance
                        </button>
                    </div>
                </div>
    
                <!-- Checked-in Members Today -->
                <div class="flex-1 bg-base-100 rounded-xl shadow-sm p-4 sm:p-6">
                    <h2 class="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users class="w-5 h-5 text-primary" /> Checked-in Today
                    </h2>
                    <div class="max-h-[340px] sm:max-h-[420px] overflow-y-auto">
                        <ul v-if="checked_in_today.length > 0" class="divide-y divide-base-200 text-sm">
                            <li
                                v-for="log in checked_in_today"
                                :key="log.id"
                                class="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                            >
                                <div>
                                    <span class="font-medium text-sm text-base-content/70">{{ log.member.firstname }} {{ log.member.lastname }}</span>
                                </div>
                                <span class="badge text-base-content/70 text-xs mt-1 sm:mt-0">
                                    Checked In at <span class="text-primary">{{ format_time(log.checked_in_at) }}</span>
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
            :show="show_add_plan_modal"
            :member="members.find(m => m.id === selected_member_id)"
            :is_adding="is_adding_plan"
            @close="show_add_plan_modal = false"
            @submit="add_membership"
        />
    </div>
</template>

<script setup lang="ts">
import { Clock, Users } from "lucide-vue-next"
import Select from "~/components/Select.vue"
import SelectMembership from "~/components/SelectMembership.vue"
import AddPlanModal from "~/components/AddPlanModal.vue"
import * as api from "~/core/member-time-logs/member-time-logs.api"
import * as membership_api from "~/core/membership/membership.api"
import { showToastSuccess, showToastError } from "~/utils/toast"
import type { Member } from "~/core/member/member.types"
import type { MemberTimeLog } from "~/core/member-time-logs/member-time-logs.types"
import type { Membership } from "~/core/membership/membership.types"
import { useGlobalStore } from '~/core/global.store'
import { usePlanStore } from '~/core/plan/plan.store'

definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

// --- State ---
const { gym_id } = useGlobalStore()
const plan_store = usePlanStore()

const is_loading_page = ref(true)
const is_logging_attendance = ref(false)
const is_adding_plan = ref(false)
const is_loading_memberships = ref(false)
const show_add_plan_modal = ref(false)

const members = ref<Member[]>([])
const checked_in_today = ref<MemberTimeLog[]>([])
const selected_member_id = ref<string>("")
const memberships = ref<Membership[]>([])
const selected_membership_ids = ref<string[]>([])

// --- Computed ---
const member_options = computed(() =>
    members.value.map(m => ({
        label: `${m.firstname} ${m.lastname}`,
        value: m.id
    }))
)

// --- Fetch Initial Data ---
onMounted(async () => {
    if (!gym_id) return
    is_loading_page.value = false
    const today = new Date().toISOString().slice(0, 10)
    const response = await api.init({ gym_id, date: today })
    members.value = response.members
    plan_store.set_plans(response.plans)
    checked_in_today.value = response.check_ins
})

// --- Watchers ---
watch(selected_member_id, async (member_id: string) => {
    selected_membership_ids.value = []
    if (member_id) {
        await fetch_memberships(member_id)
    } else {
        memberships.value = []
    }
})

// --- Attendance Logic ---
async function handle_check_in() {
    if (!selected_member_id.value || selected_membership_ids.value.length === 0) return
    if (!gym_id) return

    is_logging_attendance.value = true
    try {
        const response = await api.log_time({
            gym_id,
            member_id: selected_member_id.value,
            membership_ids: selected_membership_ids.value
        })
        if (response.success && response.data) {
            selected_member_id.value = ""
            selected_membership_ids.value = []
            showToastSuccess("Attendance logged successfully!")
            checked_in_today.value.unshift(response.data)
        } else {
            showToastError(response.msg)
        }
    } catch (e: any) {
        showToastError("Failed to log attendance. Please refresh the page and try again")
    } finally {
        is_logging_attendance.value = false
    }
}

function format_time(date_str: string) {
    const date = new Date(date_str)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

// --- Membership Logic ---
async function fetch_memberships(member_id: string) {
    is_loading_memberships.value = true
    const response = await membership_api.get_memberships({ member_id, only_active: true })
    memberships.value = response.memberships
    is_loading_memberships.value = false
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
        await fetch_memberships(input.member_id)
    } else {
        showToastError('Failed to add membership plan. Please try again.')
    }
}

function handle_add_membership_click() {
    show_add_plan_modal.value = true
}
</script>