<template>
    <div class="mb-8">
        <div class="rounded-2xl bg-white/80 border border-base-200 px-5 py-4 flex items-center gap-3 shadow backdrop-blur-sm">
            <span class="text-2xl">👋</span>
            <div>
                <div class="font-semibold text-base-content/60 text-lg">
                    Welcome, <span class="text-primary">{{ user.username }}</span>
                </div>
                <div v-if="current_gym" class="text-xs text-base-content/60 mt-1">
                    Glad to see you at {{ current_gym.name }} today!
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/core/global.store';

const { user, current_gym } = useGlobalStore()
</script>