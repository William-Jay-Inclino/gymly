<template>
  <ClientOnly>
    <div v-if="global_store.user && global_store.current_gym" class="mb-8">
      <div class="rounded-2xl bg-white/80 border border-base-200 px-5 py-4 flex items-center gap-3 shadow backdrop-blur-sm">
        <div>
          <div class="font-semibold text-base-content/60 text-lg flex items-center gap-2">
            Welcome, {{ global_store.user.username }}
          </div>
          <div class="text-xs text-base-content/60 mt-1">
            Glad to see you at {{ global_store.current_gym.name }} today!
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useGlobalStore } from '~/core/global.store';
import { Smile } from 'lucide-vue-next'

const global_store = useGlobalStore()
</script>