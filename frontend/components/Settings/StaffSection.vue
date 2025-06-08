<template>
    <section class="bg-white rounded-xl shadow p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <Users class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">Staffs</h2>
        </div>
        <div class="flex flex-col gap-2">
            <button
                class="btn btn-outline btn-primary w-fit"
                :disabled="isLimitReached"
                :class="{ 'opacity-50 cursor-not-allowed': isLimitReached }"
                @click="openAddModal"
            >
                <UserPlus class="w-4 h-4 mr-2" /> Add Staff
            </button>
            <div class="text-xs text-base-content/60 flex items-center gap-2">
                <span>Manage your gym staff here.</span>
                <span v-if="limit" class="badge badge-outline badge-sm">
                    {{ gym_staffs.length }}/{{ limit.value }} staff
                </span>
            </div>
            <div v-if="isNearLimit && !isLimitReached" class="text-xs text-warning flex items-center gap-1">
                <span class="w-3 h-3"><svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                You are approaching your staff limit ({{ gym_staffs.length }}/{{ limit?.value }})
            </div>
            <div v-if="isLimitReached" class="text-xs text-error flex items-center gap-1">
                <span class="w-3 h-3"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg></span>
                Staff limit reached! Cannot add more staff. Contact system admin to increase limit.
            </div>
            <div v-if="is_loading_staffs" class="text-xs text-base-content/60 mt-2">Loading staff...</div>
            <ul v-else class="mt-2 space-y-1">
                <li
                    v-for="staff in gym_staffs"
                    :key="staff.user.id"
                    class="flex items-center gap-2 text-sm justify-between"
                >
                    <div class="flex items-center gap-2 min-w-0">
                        <UserCog class="w-4 h-4 text-primary" />
                        <span class="truncate">{{ staff.user.username }}</span>
                        <span class="text-base-content/50 truncate">({{ staff.user.contact_number || 'No contact' }})</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <button
                            class="p-1 rounded hover:bg-base-200 transition flex items-center gap-1"
                            title="Edit Staff"
                            @click="openEditModal(staff)"
                        >
                            <Pencil class="w-4 h-4 text-primary" />
                            <span class="text-xs text-primary">Edit</span>
                        </button>
                        <button
                            class="p-1 rounded hover:bg-blue-100 transition flex items-center gap-1"
                            title="Reset Password"
                            @click="onResetPassword(staff.user.id, staff.user.username)"
                        >
                            <KeyRound class="w-4 h-4 text-blue-500" />
                            <span class="text-xs text-blue-500">Reset Password</span>
                        </button>
                        <button
                            class="p-1 rounded hover:bg-red-100 transition flex items-center gap-1"
                            title="Delete Staff"
                            @click="onDeleteStaff(staff.id)"
                        >
                            <Trash2 class="w-4 h-4 text-red-500" />
                            <span class="text-xs text-red-500">Delete</span>
                        </button>
                    </div>
                </li>
                <li v-if="gym_staffs.length === 0" class="text-xs text-base-content/60">No staff found.</li>
            </ul>
        </div>

        <!-- Add/Edit Modal -->
        <Transition name="modal" appear>
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs space-y-4">
                    <h3 class="font-semibold text-lg mb-2">
                        {{ isEditMode ? 'Edit Staff' : 'Add Staff' }}
                    </h3>
                    <form @submit.prevent="isEditMode ? onEditStaff() : onAddStaff()" class="space-y-3">
                        <input v-model="modalForm.firstname" type="text" placeholder="First Name" class="input input-bordered w-full" required />
                        <input v-model="modalForm.lastname" type="text" placeholder="Last Name" class="input input-bordered w-full" required />
                        <input v-model="modalForm.contact_number" type="text" placeholder="Contact Number" class="input input-bordered w-full" />
                        <input v-if="!isEditMode" v-model="modalForm.password" type="password" placeholder="Password" class="input input-bordered w-full" required />
                        <div class="flex gap-2 mt-2">
                            <button class="btn btn-primary flex-1" type="submit" :disabled="isSubmitting">
                                <span v-if="isSubmitting" class="loading loading-spinner loading-xs mr-2"></span>
                                {{ isEditMode ? 'Update' : 'Add' }}
                            </button>
                            <button class="btn btn-ghost flex-1" type="button" @click="closeModal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Users, UserPlus, UserCog, Pencil, Trash2, KeyRound } from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { get_gym_staffs, create_gym_staff, update_gym_staff, delete_gym_staff } from '~/core/gym-staff/gym-staff.api'
import { reset_password } from '~/core/user/user.api'
import type { GymStaff } from '~/core/gym-staff/gym-staff'
import type { GymLimit } from '~/core/gym-limit/gym-limit'
import { showDeleteConfirm } from '~/utils/sweetalert'

const { gym_id } = useGlobalStore()

const is_loading_staffs = ref(false)
const gym_staffs = ref<GymStaff[]>([])
const limit = ref<GymLimit | null>(null)

const showModal = ref(false)
const isEditMode = ref(false)
const isSubmitting = ref(false)
const modalForm = ref({
    user_id: '',
    firstname: '',
    lastname: '',
    contact_number: '',
    password: ''
})

const isLimitReached = computed(() => {
    if (!limit.value) return false
    return gym_staffs.value.length >= limit.value.value
})

const isNearLimit = computed(() => {
    if (!limit.value) return false
    const percentage = gym_staffs.value.length / limit.value.value
    return percentage >= 0.8 && !isLimitReached.value
})

function openAddModal() {
    isEditMode.value = false
    modalForm.value = {
        user_id: '',
        firstname: '',
        lastname: '',
        contact_number: '',
        password: ''
    }
    showModal.value = true
}

function openEditModal(staff: GymStaff) {
    isEditMode.value = true
    modalForm.value = {
        user_id: staff.user.id,
        firstname: staff.user.firstname || '',
        lastname: staff.user.lastname || '',
        contact_number: staff.user.contact_number || '',
        password: ''
    }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    isSubmitting.value = false
}

async function refreshStaffs() {
    if (!gym_id) return
    is_loading_staffs.value = true
    const response = await get_gym_staffs({ gym_id })
    gym_staffs.value = response.gym_staffs
    limit.value = response.gym_limit
    is_loading_staffs.value = false
}

async function onAddStaff() {
    if(!gym_id) return
    isSubmitting.value = true
    const res = await create_gym_staff({
        firstname: modalForm.value.firstname,
        lastname: modalForm.value.lastname,
        contact_number: modalForm.value.contact_number,
        password: modalForm.value.password,
        gym_id
    })
    isSubmitting.value = false
    if (res.success) {
        showToastSuccess('Staff added successfully!')
        closeModal()
        await refreshStaffs()
    } else {
        showToastError(res.msg)
    }
}

async function onEditStaff() {
    isSubmitting.value = true
    const res = await update_gym_staff({
        user_id: modalForm.value.user_id,
        firstname: modalForm.value.firstname,
        lastname: modalForm.value.lastname,
        contact_number: modalForm.value.contact_number
    })
    isSubmitting.value = false
    if (res.success) {
        showToastSuccess('Staff updated successfully!')
        closeModal()
        await refreshStaffs()
    } else {
        showToastError(res.msg)
    }
}

async function onDeleteStaff(gym_staff_id: string) {
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

async function onResetPassword(user_id: string, username: string) {
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

onMounted(refreshStaffs)
</script>