<template>
    <section class="bg-white rounded-xl shadow p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <KeyRound class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">Update Password</h2>
        </div>
        <form class="space-y-3 max-w-sm" @submit.prevent="onUpdatePassword">
            <input
                v-model="currentPassword"
                type="password"
                placeholder="Current Password"
                class="input input-bordered w-full"
                required
            />
            <input
                v-model="newPassword"
                type="password"
                placeholder="New Password"
                class="input input-bordered w-full"
                required
            />
            <input
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm New Password"
                class="input input-bordered w-full"
                required
            />
            <button class="btn btn-primary w-full mt-2" type="submit" :disabled="isLoading">
                <span v-if="isLoading" class="loading loading-spinner loading-xs mr-2"></span>
                Update
            </button>
            <div v-if="msg" :class="msgClass" class="mt-2 text-sm">{{ msg }}</div>
        </form>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { KeyRound } from 'lucide-vue-next'
import { update_password } from '~/core/user/user.api'
import { useGlobalStore } from '~/core/global.store'

const { user } = useGlobalStore()

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)
const msg = ref('')
const msgClass = ref('text-success')

async function onUpdatePassword() {
    msg.value = ''
    msgClass.value = 'text-success'

    if (newPassword.value !== confirmPassword.value) {
        msg.value = 'New password and confirmation do not match.'
        msgClass.value = 'text-error'
        return
    }

    isLoading.value = true
    const res = await update_password({
        user_id: user?.id,
        current_password: currentPassword.value,
        new_password: newPassword.value,
    })
    isLoading.value = false

    msg.value = res.msg
    msgClass.value = res.success ? 'text-success' : 'text-error'

    if (res.success) {
        currentPassword.value = ''
        newPassword.value = ''
        confirmPassword.value = ''
    }
}
</script>