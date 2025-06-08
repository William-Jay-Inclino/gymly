<template>
    <div class="lg:sticky lg:top-8 self-start w-full">
        <div class="bg-base-100 rounded-xl shadow-lg p-6 space-y-4">
            <nav class="flex flex-col space-y-2">
                <NuxtLink
                    v-for="item in menuItems"
                    :key="item.label"
                    :to="item.route"
                    class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium"
                    :class="item.label === 'Logout'
                        ? 'hover:bg-red-100 text-red-500 w-full text-left'
                        : isActive(item.route)
                            ? 'bg-primary text-white shadow-md'
                            : 'hover:bg-base-200 text-base-content'"
                >
                    <component :is="item.icon" :class="item.label === 'Logout' ? 'w-5 h-5 text-red-400' : 'w-5 h-5'" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import {
    Home,
    Users,
    Settings,
    Clock,
    LogOut,
    DollarSign,
    List 
} from 'lucide-vue-next'

const menuItems = [
    { label: 'Dashboard', icon: Home, route: '/dashboard' },
    { label: 'Log Attendance', icon: Clock, route: '/attendance' },
    { label: 'Member Management', icon: Users, route: '/memberships' },
    { label: 'Subscription Plans', icon: DollarSign, route: '/plans' },
    { label: 'System Logs', icon: List, route: '/system-logs' }, 
    { label: 'Settings', icon: Settings, route: '/settings' },
    { label: 'Logout', icon: LogOut, route: '/logout' }
]

const route = useRoute()
const isActive = (menuRoute: string) => route.path === menuRoute
</script>