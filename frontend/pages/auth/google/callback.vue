<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center space-y-4">
            <span class="loading loading-spinner loading-lg text-primary"></span>
            <span class="text-base-content/70 text-sm">Signing you in with Google...</span>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useGlobalStore } from '~/core/global.store'

const router = useRouter()

const { current_gym } = useGlobalStore()

onMounted(() => {

    if(current_gym) {
        router.replace('/dashboard')
    } else {
        router.replace('/create-gym')
    }

})

</script>