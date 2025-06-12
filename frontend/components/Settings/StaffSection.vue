<template>
    <section class="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
                <Users class="w-5 h-5 text-primary" />
                <h2 class="font-semibold text-base-content">Staffs</h2>
            </div>
            <button
                class="btn btn-outline btn-primary w-full sm:w-fit"
                :disabled="is_limit_reached"
                :class="{ 'opacity-50 cursor-not-allowed': is_limit_reached }"
                @click="open_add_modal"
            >
                <UserPlus class="w-4 h-4 mr-2" /> Add Staff
            </button>
        </div>
        <div class="text-xs text-base-content/60 flex flex-col sm:flex-row sm:items-center gap-2">
            <span>Manage your gym staff here.</span>
            <span v-if="limit" class="badge badge-outline badge-sm">
                {{ gym_staffs.length }}/{{ limit.value }} staff
            </span>
        </div>
        <div v-if="is_near_limit && !is_limit_reached" class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-warning/20 bg-warning/10 text-warning text-xs">
            <span class="w-4 h-4"><svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            You are approaching your staff limit ({{ gym_staffs.length }}/{{ limit?.value }})
        </div>
        <div v-if="is_limit_reached" class="flex items-center gap-2 mb-2 p-2 rounded-lg border border-error/20 bg-error/10 text-error text-xs">
            <span class="w-4 h-4"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg></span>
            Staff limit reached! Cannot add more staff. Contact system admin to increase limit.
        </div>
        <div v-if="is_loading_staffs" class="text-xs text-base-content/60 mt-2">Loading staff...</div>
        <ul v-else class="mt-2 space-y-2">
            <li
                v-for="staff in gym_staffs"
                :key="staff.user.id"
                class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-base-100 rounded-lg px-3 py-2 shadow-sm hover:shadow transition"
            >
                <div class="flex items-center gap-2 min-w-0">
                    <UserCog class="w-4 h-4 text-primary" />
                    <span class="truncate">{{ staff.user.username }}</span>
                    <span class="text-base-content/50 truncate text-xs">({{ staff.user.contact_number || 'No contact' }})</span>
                </div>
                <div class="flex items-center gap-1 flex-wrap">
                    <button
                        class="p-1 rounded hover:bg-base-200 transition flex items-center gap-1"
                        title="Edit Staff"
                        @click="open_edit_modal(staff)"
                    >
                        <Pencil class="w-4 h-4 text-primary" />
                        <span class="text-xs text-primary">Edit</span>
                    </button>
                    <button
                        class="p-1 rounded hover:bg-blue-100 transition flex items-center gap-1"
                        title="Reset Password"
                        @click="on_reset_password(staff.user.id, staff.user.username)"
                    >
                        <KeyRound class="w-4 h-4 text-blue-500" />
                        <span class="text-xs text-blue-500">Reset Password</span>
                    </button>
                    <button
                        class="p-1 rounded hover:bg-red-100 transition flex items-center gap-1"
                        title="Delete Staff"
                        @click="on_delete_staff(staff.id)"
                    >
                        <Trash2 class="w-4 h-4 text-red-500" />
                        <span class="text-xs text-red-500">Delete</span>
                    </button>
                </div>
            </li>
            <li v-if="gym_staffs.length === 0" class="text-xs text-base-content/60 text-center py-4">No staff found.</li>
        </ul>

        <StaffModal
            :show="show_modal"
            :is_edit_mode="is_edit_mode"
            :is_submitting="is_submitting"
            :form="modal_form"
            @close="close_modal"
            @add="on_add_staff"
            @edit="on_edit_staff"
            @update:form="val => modal_form = val"
        />
    </section>
</template>

<script setup lang="ts">
import { Users, UserPlus, UserCog, Pencil, Trash2, KeyRound } from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { get_gym_staffs, create_gym_staff, update_gym_staff, delete_gym_staff } from '~/core/gym-staff/gym-staff.api'
import { reset_password } from '~/core/user/user.api'
import type { GymStaff } from '~/core/gym-staff/gym-staff.types'
import type { GymLimit } from '~/core/gym-limit/gym-limit'
import { showDeleteConfirm } from '~/utils/sweetalert'
import { showToastSuccess, showToastError } from '~/utils/toast'
import StaffModal from './StaffModal.vue'

// --- State ---
const { gym_id } = useGlobalStore()
const is_loading_staffs = ref(false)
const gym_staffs = ref<GymStaff[]>([])
const limit = ref<GymLimit | null>(null)

const show_modal = ref(false)
const is_edit_mode = ref(false)
const is_submitting = ref(false)
const modal_form = ref({
    user_id: '',
    firstname: '',
    lastname: '',
    email: '',
    contact_number: '',
    password: ''
})

// --- Computed ---
const is_limit_reached = computed(() => {
    if (!limit.value) return false
    return gym_staffs.value.length >= limit.value.value
})

const is_near_limit = computed(() => {
    if (!limit.value) return false
    const percentage = gym_staffs.value.length / limit.value.value
    return percentage >= 0.8 && !is_limit_reached.value
})

// --- Modal Methods ---
function open_add_modal() {
    is_edit_mode.value = false
    modal_form.value = {
        user_id: '',
        firstname: '',
        lastname: '',
        email: '',
        contact_number: '',
        password: ''
    }
    show_modal.value = true
}

function open_edit_modal(staff: GymStaff) {
    is_edit_mode.value = true
    modal_form.value = {
        user_id: staff.user.id,
        firstname: staff.user.firstname || '',
        lastname: staff.user.lastname || '',
        email: staff.user.email || '',
        contact_number: staff.user.contact_number || '',
        password: ''
    }
    show_modal.value = true
}

function close_modal() {
    show_modal.value = false
    is_submitting.value = false
}

// --- CRUD Methods ---
async function fetch_gym_staffs() {
    if (!gym_id) return
    is_loading_staffs.value = true
    try {
        const response = await get_gym_staffs({ gym_id })
        gym_staffs.value = response.gym_staffs
        limit.value = response.gym_limit
    } finally {
        is_loading_staffs.value = false
    }
}

async function on_add_staff() {
    if (!gym_id) return
    is_submitting.value = true
    try {
        const res = await create_gym_staff({
            email: modal_form.value.email,
            firstname: modal_form.value.firstname,
            lastname: modal_form.value.lastname,
            contact_number: modal_form.value.contact_number,
            password: modal_form.value.password,
            gym_id
        })
        if (res.success) {
            showToastSuccess('Staff added successfully!')
            close_modal()
            await fetch_gym_staffs()
        } else {
            showToastError(res.msg)
        }
    } finally {
        is_submitting.value = false
    }
}

async function on_edit_staff() {
    is_submitting.value = true
    try {
        const res = await update_gym_staff({
            user_id: modal_form.value.user_id,
            email: modal_form.value.email,
            firstname: modal_form.value.firstname,
            lastname: modal_form.value.lastname,
            contact_number: modal_form.value.contact_number
        })
        if (res.success) {
            showToastSuccess('Staff updated successfully!')
            close_modal()
            await fetch_gym_staffs()
        } else {
            showToastError(res.msg)
        }
    } finally {
        is_submitting.value = false
    }
}

async function on_delete_staff(gym_staff_id: string) {
    const indx = gym_staffs.value.findIndex(i => i.id === gym_staff_id)
    const item = gym_staffs.value[indx]
    if (!item) return

    const confirmed = await showDeleteConfirm(
        "Are you sure?",
        `${item.user.username} will be removed!`
    )
    if (confirmed) {
        const response = await delete_gym_staff(item.user.id)
        if (response.success) {
            gym_staffs.value.splice(indx, 1)
            showToastSuccess('Staff removed successfully!')
        } else {
            showToastError(response.msg)
        }
    }
}

async function on_reset_password(user_id: string, username: string) {
    const confirmed = await showDeleteConfirm(
        "Reset Password?",
        `This will reset the password for ${username} to "password123". Continue?`,
        "Yes, reset it!"
    )
    if (confirmed) {
        const res = await reset_password({ user_id, password: "password123" })
        if (res.success) {
            showToastSuccess('Password reset to "password123"')
        } else {
            showToastError(res.msg)
        }
    }
}

// --- Lifecycle ---
onMounted(fetch_gym_staffs)
</script>