<template>
    <div class="min-h-screen flex items-center justify-center" data-theme="light">
        <div class="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-4">
            <span class="loading loading-spinner loading-lg text-primary"></span>
            <span class="text-black text-lg font-bold">Signing you in with Google...</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { set_access_token } from '~/utils/session'
import { useGlobalStore } from '~/core/global.store'
import { get_user_by_access_token } from '~/core/auth/auth.api'

const router = useRouter()
const route = useRoute()
const global_store = useGlobalStore()
const config = useRuntimeConfig()
const api_url = config.public.apiUrl

onMounted(async() => {
    const token = route.query.token as string | undefined

    if (token) {
        set_access_token(token)

        const user = await get_user_by_access_token({
            access_token: token,
            api_url
        })

        if (user) {
            global_store.set_user(user)

            if(global_store.current_gym) {
                router.replace('/dashboard')
            } else {
                router.replace('/create-gym')
            }
            

        } else {
            console.error('Failed to fetch user data')
            router.replace('/login')
            return
        }
    } else {
        router.replace('/login')
    }
})
</script>