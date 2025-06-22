<template>
    <header class="w-full border-b border-blue-400" style="background-color: #3b82f6;">
        <div class="flex flex-col items-center py-8 px-4 max-w-3xl mx-auto">
            <div class="flex items-center mb-3">
                <h1 class="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white relative flex items-baseline"
                    style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif;">
                    Gymly
                    <sub class="align-baseline text-xs md:text-sm text-blue-200 ml-1 tracking-widest font-semibold">PH</sub>
                </h1>
                <span class="inline-flex items-center justify-center p-3">
                    <Activity class="w-8 h-8 text-white" style="stroke-width: 1.5;" />
                </span>
            </div>
            <p class="text-sm sm:text-base md:text-lg font-normal text-white text-center sm:whitespace-nowrap italic"
               style="font-family: 'Source Sans Pro', 'Segoe UI', system-ui, sans-serif; line-height: 1.6;">
                "A simple app for gym owners to manage members, track attendance, and view analytics"
            </p>
        </div>
    </header>
</template>

<script setup>
import { Activity } from 'lucide-vue-next'
</script>