<template>
  <div class="lg:sticky lg:top-8 self-start w-full">
    <div class="bg-base-100 rounded-xl shadow-lg p-6 space-y-4">
      <nav class="flex flex-col space-y-2">
        <button
          v-for="item in menuItems"
          :key="item.label"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium"
          :class="item.active 
            ? 'bg-primary text-white shadow-md' 
            : 'hover:bg-base-200 text-base-content'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {
  Home,
  Users,
  Dumbbell,
  ClipboardList,
  Settings
} from 'lucide-vue-next'

const menuItems = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Memberships', icon: Users, active: false },
  { label: 'Instructors', icon: Dumbbell, active: false },
  { label: 'Logs', icon: ClipboardList, active: false },
  { label: 'Settings', icon: Settings, active: false }
]
</script>
