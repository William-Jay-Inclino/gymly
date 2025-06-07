<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-8 px-4">
            <form 
                class="bg-base-100 rounded-2xl shadow-2xl p-0 max-w-md w-full overflow-hidden flex flex-col" 
                @submit.prevent="submit"
            >
                <div class="px-8 pt-8 pb-2">
                    <h3 class="font-semibold text-xl mb-6 text-primary">
                        Add Plan<span v-if="member"> for {{ member.firstname }}</span>
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Select Plan</span>
                            </label>
                            <PlanList v-model="selectedPlans" />
                        </div>
                    </div>
                </div>
                <div class="bg-base-200 px-8 py-4 flex justify-end gap-2">
                    <button class="btn btn-ghost rounded-md" type="button" @click="close" :disabled="is_adding">Cancel</button>
                    <button class="btn btn-primary rounded-md" type="submit" :disabled="!canSubmit || is_adding">
                        {{ is_adding ? 'Adding Plan...' : 'Add Plan' }}
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Member } from '~/core/member/member.types'
import PlanList from '~/components/PlanList.vue'

const props = defineProps<{
    member?: Member,
    is_adding?: boolean,
    show: boolean
}>()

const emit = defineEmits(['close', 'submit'])

// Now includes sessions_left as optional
const selectedPlans = ref<{ plan_id: string, start_date: string, sessions_left?: number }[]>([])

const canSubmit = computed(() =>
    selectedPlans.value.length > 0 &&
    selectedPlans.value.every(p => !!p.start_date && (p.sessions_left === undefined || p.sessions_left > 0))
)

function close() {
    emit('close')
}

function submit() {
    if (!canSubmit.value) return
    emit('submit', {
        plans: JSON.parse(JSON.stringify(selectedPlans.value)),
        member_id: props.member?.id,
    })
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
    transition: all 0.25s ease-out;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

.modal-enter-from .bg-base-100, .modal-leave-to .bg-base-100 {
    transform: translateY(-20px) scale(0.95);
}

.modal-enter-to .bg-base-100, .modal-leave-from .bg-base-100 {
    transform: translateY(0) scale(1);
    transition: transform 0.25s ease-out;
}
</style>