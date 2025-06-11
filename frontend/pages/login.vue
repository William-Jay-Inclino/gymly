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
                <div class="divider text-xs text-base-content/60">or</div>
                <button
                    class="btn btn-outline btn-neutral w-full flex items-center gap-2"
                    type="button"
                    @click="signup_with_google"
                >
                    <svg class="w-5 h-5" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="24"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.4-1.3 2.6-2.7 3.4v2.8h4.4c2.6-2.4 4.1-5.9 4.1-10.3z"/><path fill="#34A853" d="M24 36c3.6 0 6.6-1.2 8.8-3.2l-4.4-2.8c-1.2.8-2.7 1.3-4.4 1.3-3.4 0-6.3-2.3-7.3-5.4h-4.5v3.1C15.2 33.8 19.3 36 24 36z"/><path fill="#FBBC05" d="M16.7 25.9c-.3-.8-.5-1.6-.5-2.5s.2-1.7.5-2.5v-3.1h-4.5C11.3 20.2 12 22.9 12 24s.7 3.8 2.2 5.2l4.5-3.3z"/><path fill="#EA4335" d="M24 17.7c2 0 3.7.7 5 2.1l3.7-3.7C30.6 13.8 27.6 12 24 12c-4.7 0-8.8 2.2-11.3 5.7l4.5 3.1c1-3.1 3.9-5.4 7.3-5.4z"/></g></svg>
                    Sign up with Google
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
import { useRuntimeConfig } from '#imports'

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

function signup_with_google() {
    window.location.href = `${API_URL}/auth/google/signup`
}
</script>