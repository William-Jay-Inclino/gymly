<template>
    <div v-if="user && user.role" class="lg:sticky lg:top-8 self-start w-full">
        <div class="bg-base-100 rounded-xl shadow-lg p-6 space-y-4">
            <nav class="flex flex-col space-y-2">
                <NuxtLink
                    v-for="item in menuItems"
                    :key="item.label"
                    :to="item.route"
                    class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium group"
                    :class="item.label === 'Logout'
                        ? 'hover:bg-red-100 w-full text-left'
                        : isActive(item.route)
                            ? 'shadow-md text-white'
                            : 'hover:bg-base-200 text-base-content'"
                    :style="isActive(item.route) && item.label !== 'Logout' ? { background: '#3b82f6' } : {}"
                >
                    <span>
                        <component
                            :is="item.icon"
                            class="w-5 h-5"
                            :class="item.label === 'Logout'
                                ? 'text-red-500 group-hover:text-red-600'
                                : isActive(item.route)
                                    ? 'text-white'
                                    : 'text-base-content'"
                        />
                    </span>
                    <span
                        :class="item.label === 'Logout'
                            ? 'text-red-500 group-hover:text-red-600'
                            : isActive(item.route)
                                ? 'text-white'
                                : 'text-base-content'"
                    >
                        {{ item.label }}
                    </span>
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
    Layers,
} from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { UserRole } from '~/core/user/user.types'

const { user } = useGlobalStore()

const menuItems = computed(() => [
    { label: 'Dashboard', icon: Home, route: '/dashboard' },
    { label: 'Log Attendance', icon: Clock, route: '/attendance' },
    { label: 'Member Management', icon: Users, route: '/memberships' },
    // Only show Subscription Plans if not GYM_STAFF
    ...(user.role !== UserRole.GYM_STAFF
        ? [{ label: 'Subscription Plans', icon: Layers, route: '/plans' }]
        : []),
    { label: 'Settings', icon: Settings, route: '/settings' },
    { label: 'Logout', icon: LogOut, route: '/logout' }
])

const route = useRoute()
const isActive = (menuRoute: string) => route.path === menuRoute
</script>