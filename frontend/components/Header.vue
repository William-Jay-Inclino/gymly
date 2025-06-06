<template>
    <header class="w-full bg-gradient-to-r from-primary to-secondary shadow-md py-6 px-4 flex flex-col items-center">
        <div class="flex items-center gap-3 mb-2">
            <h1 class="text-3xl md:text-4xl font-semibold font-sans text-white tracking-tight drop-shadow-lg" style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif;">
                Gimple
            </h1>
            <Dumbbell class="w-10 h-10 text-white drop-shadow-lg" />
        </div>
        <p class="text-base md:text-lg text-white/90 font-medium text-center max-w-xl font-sans flex items-center justify-center" style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif;">
            A simple app for gym owners to manage memberships, view analytics, and log attendance with ease.
        </p>
    </header>
</template>

<script setup>
import { Dumbbell } from 'lucide-vue-next'
</script>