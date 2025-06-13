<template>

    <div class="max-w-2xl mx-auto space-y-8">

            <ClientOnly>
                <SettingsUserSection />
                <SettingsGymSection v-if="show_gym_section" />
                <SettingsStaffSection v-if="show_staff_section"/>
                <SettingsPasswordSection v-if="show_password_section"/>
            </ClientOnly>

            
            <SettingsLimitSection />
            
    </div>

</template>

<script setup lang="ts">
import { useGlobalStore } from '~/core/global.store'
import { UserRole } from '~/core/user/user.types';


definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})

const global_store = useGlobalStore()

const show_gym_section = computed(() => {
    return global_store.user && global_store.user.role === UserRole.GYM_OWNER
})

const show_staff_section = computed(() => {
    return global_store.user && global_store.user.role === UserRole.GYM_OWNER
})

const show_password_section = computed(() => {
    return global_store.user && global_store.user.created_by !== 'google-oauth'
})

</script>