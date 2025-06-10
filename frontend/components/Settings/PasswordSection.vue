<template>
    <section class="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <KeyRound class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">Update Password</h2>
        </div>
        <form class="space-y-3" @submit.prevent="on_update_password">
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Current Password</span>
                </label>
                <input
                    v-model="current_password"
                    type="password"
                    class="input input-bordered w-full"
                    required
                    autocomplete="current-password"
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">New Password</span>
                </label>
                <input
                    v-model="new_password"
                    type="password"
                    class="input input-bordered w-full"
                    required
                    autocomplete="new-password"
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Confirm New Password</span>
                </label>
                <input
                    v-model="confirm_password"
                    type="password"
                    class="input input-bordered w-full"
                    required
                    autocomplete="new-password"
                />
            </div>
            <button class="btn btn-primary w-full mt-2" type="submit" :disabled="is_loading">
                <span v-if="is_loading" class="loading loading-spinner loading-xs mr-2"></span>
                Update
            </button>
            <div v-if="msg" :class="msg_class" class="mt-2 text-sm text-center">{{ msg }}</div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { KeyRound } from 'lucide-vue-next'
import { update_password } from '~/core/user/user.api'
import { useGlobalStore } from '~/core/global.store'

// --- State ---
const { user } = useGlobalStore()
const current_password = ref('')
const new_password = ref('')
const confirm_password = ref('')
const is_loading = ref(false)
const msg = ref('')
const msg_class = ref('text-success')

// --- Methods ---
async function on_update_password() {
    msg.value = ''
    msg_class.value = 'text-success'

    if (new_password.value !== confirm_password.value) {
        msg.value = 'New password and confirmation do not match.'
        msg_class.value = 'text-error'
        return
    }

    is_loading.value = true
    try {
        const res = await update_password({
            user_id: user?.id,
            current_password: current_password.value,
            new_password: new_password.value,
        })
        msg.value = res.msg
        msg_class.value = res.success ? 'text-success' : 'text-error'

        if (res.success) {
            current_password.value = ''
            new_password.value = ''
            confirm_password.value = ''
        }
    } finally {
        is_loading.value = false
    }
}
</script>