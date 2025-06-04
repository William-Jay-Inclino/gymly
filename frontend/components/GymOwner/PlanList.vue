<template>
    <div class="grid gap-4 sm:grid-cols-2">
        <div
            v-for="plan in plans"
            :key="plan.id"
            @click="toggle(plan.id)"
            class="group cursor-pointer rounded-xl border transition-all duration-150 p-4 bg-base-100 hover:bg-primary/5 shadow-sm select-none"
            :class="[
                isSelected(plan.id)
                    ? 'border-primary ring-2 ring-primary bg-primary/5'
                    : 'border-base-200',
            ]"
        >
            <div class="flex items-center justify-between mb-1">
                <span class="font-medium text-base text-base-content">
                    {{ plan.name }}
                </span>
            </div>
            <div class="text-sm text-base-content/70 mb-2">{{ plan.description }}</div>
            <div class="flex items-center gap-2 mb-1">
                <span class="font-semibold text-lg text-primary">₱{{ plan.price }}</span>
                <span v-if="plan.num_of_days" class="text-xs text-base-content/60">/ {{ plan.num_of_days }} {{ plan.num_of_days > 1 ? 'days' : 'day' }}</span>
                <span v-else-if="plan.num_of_sessions" class="text-xs text-base-content/60">/ {{ plan.num_of_sessions }} {{ plan.num_of_sessions > 1 ? 'sessions' : 'session' }}</span>
            </div>
            <div v-if="isSelected(plan.id)" class="flex justify-end">
                <span class="badge badge-primary badge-sm">Selected</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { usePlanStore } from '~/core/plan/plan.store';

const props = defineProps<{
    modelValue: string[] // Array of selected plan ids
}>()

const emit = defineEmits(['update:modelValue'])

const planStore = usePlanStore()

const plans = computed(() => planStore.plans)

function isSelected(id: string) {
    return props.modelValue.includes(id)
}

function toggle(id: string) {
    let newValue: string[]
    if (isSelected(id)) {
        newValue = props.modelValue.filter(pid => pid !== id)
    } else {
        newValue = [...props.modelValue, id]
    }
    emit('update:modelValue', newValue)
}
</script>