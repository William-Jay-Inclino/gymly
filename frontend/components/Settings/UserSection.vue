<template>
    <section class="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <UserIcon class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">User Information</h2>
        </div>
        <form v-if="global_store.user" class="space-y-4" @submit.prevent="update_user_info">
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Username</span>
                </label>
                <input
                    :value="global_store.user.username || ''"
                    class="input input-bordered w-full"
                    disabled
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Email</span>
                </label>
                <input
                    v-model="email"
                    type="email"
                    class="input input-bordered w-full"
                    placeholder="Enter email"
                    required
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">First Name</span>
                </label>
                <input
                    v-model="firstname"
                    type="text"
                    class="input input-bordered w-full"
                    placeholder="Enter first name"
                    required
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Last Name</span>
                </label>
                <input
                    v-model="lastname"
                    type="text"
                    class="input input-bordered w-full"
                    placeholder="Enter last name"
                    required
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Contact Number</span>
                </label>
                <input
                    v-model="contact_number"
                    type="text"
                    class="input input-bordered w-full"
                    placeholder="Enter contact number"
                />
            </div>
            <button class="btn btn-primary w-full mt-2 flex items-center justify-center" type="submit" :disabled="is_loading">
                <span v-if="is_loading" class="loading loading-spinner loading-xs mr-2"></span>
                Update User
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
import { User as UserIcon } from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { update_user } from '~/core/user/user.api'
import { showToastSuccess, showToastError } from '~/utils/toast'

const global_store = useGlobalStore()
const email = ref('')
const firstname = ref('')
const lastname = ref('')
const contact_number = ref('')
const is_loading = ref(false)

function populate_form_from_user() {
    if (global_store.user) {
        email.value = global_store.user.email || ''
        firstname.value = global_store.user.firstname || ''
        lastname.value = global_store.user.lastname || ''
        contact_number.value = global_store.user.contact_number || ''
    }
}

onMounted(populate_form_from_user)
watch(() => global_store.user, populate_form_from_user, { immediate: true })

async function update_user_info() {
    if (!global_store.user?.id) {
        showToastError('No user found to update.')
        return
    }
    is_loading.value = true
    try {
        const res = await update_user({
            user_id: global_store.user.id,
            email: email.value,
            firstname: firstname.value,
            lastname: lastname.value,
            contact_number: contact_number.value || null,
        })
        if (res.success && res.data) {
            showToastSuccess('User updated successfully!')
            global_store.set_user_info({
                email: res.data.email,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                contact_number: res.data.contact_number,
            })
        } else {
            showToastError(res.msg || 'Failed to update user')
        }
    } catch (e) {
        showToastError('Failed to update user')
    } finally {
        is_loading.value = false
    }
}
</script>