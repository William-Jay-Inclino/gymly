<template>
    <div class="w-full">
        <label class="block mb-2 text-base-content/80 font-medium">Select the member’s activity for today</label>
        <div v-if="is_loading" class="flex justify-center items-center py-8">
            <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
        <div v-else>
            <div class="flex flex-wrap gap-3">
                <div
                    v-for="membership in filteredMemberships"
                    :key="membership.id"
                    @click="toggleMembership(membership)"
                    class="group cursor-pointer relative rounded-xl border border-base-200 shadow-sm p-4 w-full sm:w-[260px] transition-all duration-150
                        hover:border-primary hover:shadow-lg
                        flex flex-col gap-2
                        "
                    :class="{
                        'bg-primary/10 border-primary ring-2 ring-primary': isSelected(membership.id),
                        'bg-base-100': !isSelected(membership.id)
                    }"
                >
                    <div class="flex items-center justify-between">
                        <div class="font-semibold text-base-content">
                            {{ membership.plan_name || 'Membership' }}
                        </div>
                        <input
                            type="checkbox"
                            class="checkbox checkbox-primary"
                            :checked="isSelected(membership.id)"
                            @change.prevent
                            tabindex="-1"
                        />
                    </div>
                    <div class="text-xs text-base-content/60 mt-1">
                        <span v-if="membership.sessions_left">
                            Sessions left:
                            <span>{{ membership.sessions_left }}</span>
                        </span>
                        <span v-if="membership.end_date">
                            Ends: {{ formatDate(membership.end_date) }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="filteredMemberships.length === 0" class="text-base-content/60 text-center py-8 flex flex-col items-center gap-3">
                No memberships found.
                <button class="btn btn-primary btn-sm mt-2" @click="$emit('add-membership')">
                    Add Membership Plan
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import type { Membership } from "~/core/membership/membership.types"

const props = defineProps<{
    is_loading?: boolean
    memberships: Membership[]
    modelValue: string[]
}>()

const emit = defineEmits(["update:modelValue", "add-membership"])

const search = ref("")

const filteredMemberships = computed(() =>
    props.memberships.filter(m =>
        m.plan_name?.toLowerCase().includes(search.value.toLowerCase())
    )
)

function isSelected(id: string) {
    return props.modelValue.includes(id)
}

function toggleMembership(membership: Membership) {
    let newValue = [...props.modelValue]
    if (isSelected(membership.id)) {
        newValue = newValue.filter(id => id !== membership.id)
    } else {
        newValue.push(membership.id)
    }
    emit("update:modelValue", newValue)
}

function formatDate(dateStr: string | null) {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString()
}
</script>