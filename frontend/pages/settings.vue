<template>

    <div class="max-w-2xl mx-auto space-y-8">

            <ClientOnly>
                <SettingsUserSection />
                <SettingsGymSection />
                <SettingsStaffSection v-if="user && user.role === UserRole.GYM_OWNER"/>
            </ClientOnly>

            <SettingsPasswordSection />
            
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