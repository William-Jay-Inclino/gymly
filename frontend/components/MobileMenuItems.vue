<template>
  <nav class="flex w-full justify-around items-center py-2 bg-white rounded-xl shadow-md sticky top-0 left-0 max-w-full z-50 border-b border-base-200">
    <NuxtLink
      v-for="item in menu_items"
      :key="item.label"
      :to="item.route"
      class="flex flex-col items-center transition px-2 py-1 rounded-lg"
      :class="[
        item.label === 'Logout'
          ? 'text-red-500 hover:text-red-600'
          : is_active(item.route)
            ? 'shadow-md text-white'
            : 'text-base-content/70 hover:text-primary',
        is_active(item.route) && item.label !== 'Logout' ? 'bg-[#3b82f6]' : ''
      ]"
      :style="is_active(item.route) && item.label !== 'Logout' ? { background: '#3b82f6' } : {}"
    >
      <component
        :is="item.icon"
        class="w-6 h-6"
        :class="item.label === 'Logout'
          ? 'text-red-500'
          : is_active(item.route)
            ? 'text-white'
            : 'text-base-content'"
      />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Home, Users, Settings, Clock, LogOut, Layers } from 'lucide-vue-next'

const menu_items = [
  { label: 'Dashboard', icon: Home, route: '/dashboard' },
  { label: 'Log Attendance', icon: Clock, route: '/attendance' },
  { label: 'Member Management', icon: Users, route: '/memberships' },
  { label: 'Subscription Plans', icon: Layers, route: '/plans' },
  { label: 'Settings', icon: Settings, route: '/settings' },
  { label: 'Logout', icon: LogOut, route: '/logout' }
]

const route = useRoute()
const is_active = (menu_route: string) => route.path === menu_route
</script>

<style scoped>
@media (min-width: 1024px) {
  nav {
    display: none;
  }
}
</style>