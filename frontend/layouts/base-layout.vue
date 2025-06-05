<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">
        <Header />

        <div class="flex flex-col lg:flex-row gap-8 px-4 py-10 max-w-[100rem] mx-auto w-full items-start">
            <div class="lg:w-64 w-full">
                <!-- Modern Welcome label above the sidebar -->
                <div class="mb-8">
                    <div class="rounded-2xl bg-white/80 border border-base-200 px-5 py-4 flex items-center gap-3 shadow backdrop-blur-sm">
                        <span class="text-2xl">👋</span>
                        <div>
                            <div class="font-semibold text-base-content/60 text-lg">Welcome, <span class="text-primary">{{ username }}</span></div>
                            <div class="text-xs text-base-content/60 mt-1">Glad to see you at Gymly today!</div>
                        </div>
                    </div>
                </div>
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