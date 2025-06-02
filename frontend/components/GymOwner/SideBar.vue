<template>
    <div class="lg:sticky lg:top-8 self-start w-full">
        <div class="bg-base-100 rounded-xl shadow-lg p-6 space-y-4">
            <nav class="flex flex-col space-y-2">
                <NuxtLink
                    v-for="item in menuItems"
                    :key="item.label"
                    :to="item.route"
                    class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium"
                    :class="isActive(item.route)
                        ? 'bg-primary text-white shadow-md'
                        : 'hover:bg-base-200 text-base-content'"
                >
                    <component :is="item.icon" class="w-5 h-5" />
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script setup>
	import { useRoute } from 'vue-router'
	import {
		Home,
		Users,
		Dumbbell,
		ClipboardList,
		Settings
	} from 'lucide-vue-next'

	const menuItems = [
		{ label: 'Dashboard', icon: Home, route: '/gym-owner/dashboard' },
		{ label: 'Memberships', icon: Users, route: '/gym-owner/memberships' },
		{ label: 'Logs', icon: ClipboardList, route: '/gym-owner/logs' },
		{ label: 'Settings', icon: Settings, route: '/gym-owner/settings' }
	]

	const route = useRoute()
	const isActive = (menuRoute) => route.path === menuRoute
</script>