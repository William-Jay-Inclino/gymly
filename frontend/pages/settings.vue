<template>
    <div class="max-w-2xl mx-auto space-y-8">
        <SettingsPasswordSection />

        <SettingsStaffSection/>

        <SettingsLimitSection />

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})
</script>