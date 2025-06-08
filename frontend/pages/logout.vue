<template>
    <div>
        Logout 
    </div>
</template>

<script setup lang="ts">

    definePageMeta({
        middleware: ['auth'],
    })

</script>