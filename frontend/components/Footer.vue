<template>
    <footer
        class="w-full bg-white border-t border-base-200 py-4 px-4 flex flex-col items-center justify-center gap-1 text-xs text-base-content/60 mt-auto"
    >
        <span>
            v{{ version }} &mdash;
            <span class="text-primary">jaytechsolutions.help@gmail.com</span>
        </span>
    </footer>
</template>


<script setup lang="ts">

const config = useRuntimeConfig()
const version = config.public.appVersion

</script>