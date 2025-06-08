<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">
        <Header />

        <div class="flex flex-col lg:flex-row gap-8 px-4 py-10 max-w-[100rem] mx-auto w-full items-start">
            <div class="lg:w-64 w-full">
                <AuthUser />
                <SideBar />
            </div>

            <main class="flex-1 w-full">
                <NuxtPage />
            </main>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
// Replace with your actual user fetching logic
const username = ref("Jay")
</script>