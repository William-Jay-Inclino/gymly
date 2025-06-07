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
            <div v-if="isSelected(plan.id)" class="flex flex-col gap-2 mt-2">
                <span class="badge badge-primary badge-sm self-end">Selected</span>
                <label class="text-xs text-base-content/70 font-medium mt-1">
                    Start Date:
                    <input
                        type="date"
                        class="input input-bordered input-xs ml-2"
                        :value="getStartDate(plan.id)"
                        @click.stop
                        @change.stop="updateStartDate(plan.id, ($event.target as HTMLInputElement).value)"
                        @mousedown.stop
                        @mouseup.stop
                        @keydown.stop
                        @input.stop
                        style="width: 140px;"
                    />
                </label>
                <label
                    v-if="plan.num_of_sessions"
                    class="text-xs text-base-content/70 font-medium mt-1"
                >
                    Sessions Left:
                    <input
                        type="number"
                        min="1"
                        class="input input-bordered input-xs ml-2"
                        :value="getSessionsLeft(plan.id)"
                        @click.stop
                        @change.stop="updateSessionsLeft(plan.id, ($event.target as HTMLInputElement).valueAsNumber)"
                        @mousedown.stop
                        @mouseup.stop
                        @keydown.stop
                        @input.stop
                        style="width: 100px;"
                    />
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlanStore } from '~/core/plan/plan.store';

const props = defineProps<{
    modelValue: { plan_id: string, start_date: string, sessions_left?: number }[]
}>()

const emit = defineEmits(['update:modelValue'])

const planStore = usePlanStore()
const plans = computed(() => planStore.plans)

function isSelected(id: string) {
    return props.modelValue.some(p => p.plan_id === id)
}

function getStartDate(id: string) {
    return props.modelValue.find(p => p.plan_id === id)?.start_date || ''
}

function getSessionsLeft(id: string) {
    return props.modelValue.find(p => p.plan_id === id)?.sessions_left ?? ''
}

function toggle(id: string) {
    let newValue
    if (isSelected(id)) {
        newValue = props.modelValue.filter(p => p.plan_id !== id)
    } else {
        // Default sessions_left if plan is per session
        const plan = plans.value.find(p => p.id === id)
        newValue = [
            ...props.modelValue,
            {
                plan_id: id,
                start_date: new Date().toISOString().slice(0, 10),
                ...(plan?.num_of_sessions ? { sessions_left: plan.num_of_sessions } : {})
            }
        ]
    }
    emit('update:modelValue', newValue)
}

function updateStartDate(id: string, date: string) {
    const newValue = props.modelValue.map(p =>
        p.plan_id === id ? { ...p, start_date: date } : p
    )
    emit('update:modelValue', newValue)
}

function updateSessionsLeft(id: string, sessions: number) {
    const newValue = props.modelValue.map(p =>
        p.plan_id === id ? { ...p, sessions_left: sessions } : p
    )
    emit('update:modelValue', newValue)
}
</script>