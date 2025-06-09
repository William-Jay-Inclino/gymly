<template>
    <div v-if="user && user.role" class="max-w-2xl mx-auto space-y-8">
        <SettingsPasswordSection />

        <SettingsStaffSection v-if="user.role === UserRole.GYM_OWNER"/>

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

const { user } = useGlobalStore()


</script>