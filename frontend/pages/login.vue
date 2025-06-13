<template>
    <div class="min-h-screen flex items-center justify-center bg-white relative overflow-hidden" data-theme="light">
        <!-- Decorative background shapes (optional, remove if you want pure white) -->
        <!-- <div class="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl z-0"></div> -->
        <div class="w-full max-w-md mx-auto sm:bg-white sm:rounded-2xl sm:shadow-2xl p-4 sm:p-8 space-y-6 relative z-10">
            <div class="flex flex-col items-center">
                <span class="inline-flex items-center gap-2 mb-2">
                    <Dumbbell class="w-8 h-8" style="color: #3b82f6;" />
                    <span class="text-3xl sm:text-4xl font-extrabold tracking-tight" style="color: #3b82f6;">Gymly</span>
                </span>
                <span class="text-base-content/70 text-sm mb-4 text-center">Welcome back! Please sign in to continue.</span>
            </div>
            <form @submit.prevent="handleLogin" class="space-y-4">
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
                    class="btn w-full mt-2 shadow-md hover:scale-[1.02] transition-transform text-white"
                    :style="{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }"
                    :disabled="isLoading"
                    type="submit"
                >
                    <span v-if="isLoading" class="loading loading-spinner loading-xs mr-2"></span>
                    Sign In
                </button>
                <div class="divider text-xs text-base-content/60">or</div>
                <button @click="login_with_google" type="button" class="btn w-full flex items-center gap-2 border border-[#e5e5e5] bg-white text-black hover:bg-gray-50 transition">
                    <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    <span class="flex-1 text-center">Login with Google</span>
                </button>
            </form>
            <div class="flex flex-col sm:flex-row items-center justify-between mt-4 gap-1">
                <span class="text-xs text-base-content/60">&copy; {{ new Date().getFullYear() }} Gymly</span>
                <span class="text-xs text-base-content/60">All rights reserved.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Dumbbell } from 'lucide-vue-next'
import { login, set_access_token } from '~/utils/session'
import { showToastError } from '~/utils/toast'

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
            // showToastSuccess('Welcome back! You are now logged in.')
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

function login_with_google() {
    window.location.href = `${API_URL}/auth/google/signup`
}
</script>