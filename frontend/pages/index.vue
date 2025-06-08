<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" data-theme="light">
        <!-- Decorative background shapes -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0"></div>
        <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-8 relative z-10">
            <div class="flex flex-col items-center">
                <span class="inline-flex items-center gap-2 mb-2">
                    <Dumbbell class="w-8 h-8" style="color: #3b82f6;" />
                    <span class="text-4xl font-extrabold tracking-tight" style="color: #3b82f6;">Gymly</span>
                </span>
                <span class="text-base-content/70 text-sm mb-4 text-center">Welcome back! Please sign in to continue.</span>
            </div>
            <form @submit.prevent="handleLogin" class="space-y-5">
                <div>
                    <label class="label">
                        <span class="label-text text-base-content/80">Username</span>
                    </label>
                    <input
                        v-model="username"
                        type="text"
                        placeholder="Enter your username"
                        class="input input-bordered w-full"
                        required
                        autocomplete="username"
                    />
                </div>
                <div>
                    <label class="label">
                        <span class="label-text text-base-content/80">Password</span>
                    </label>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Enter your password"
                        class="input input-bordered w-full"
                        required
                        autocomplete="current-password"
                    />
                </div>
                <button
                    class="btn btn-primary w-full mt-2 shadow-md hover:scale-[1.02] transition-transform"
                    :disabled="isLoading"
                    type="submit"
                >
                    <span v-if="isLoading" class="loading loading-spinner loading-xs mr-2"></span>
                    Sign In
                </button>
            </form>
            <div class="flex items-center justify-between mt-4">
                <span class="text-xs text-base-content/60">&copy; {{ new Date().getFullYear() }} Gymly</span>
                <span class="text-xs text-base-content/60">All rights reserved.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Dumbbell } from 'lucide-vue-next'
import { login } from '~/utils/session'

const config = useRuntimeConfig()
const API_URL = config.public.apiUrl
const router = useRouter();

const username = ref('')
const password = ref('')
const isLoading = ref(false)


async function handleLogin() {
    isLoading.value = true
    try {
        const response = await login({ username: username.value, password: password.value, api_url: API_URL })
        console.log('response', response);
        if(response.access_token) {

            set_access_token(response.access_token)
            showToastSuccess('Welcome back! You are now logged in.')
            router.push('/dashboard');
        } else {
            showToastError('Login failed. Please check your credentials.')
            return
        }

    } catch (e: any) {
        showToastError('Login failed. Please try again.')
    } finally {
        isLoading.value = false
    }
}
</script>