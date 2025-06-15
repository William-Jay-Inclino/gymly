<template>
    <Transition name="modal" appear>
        <div
            v-if="show"
            @mousedown.self="close_modal"
            class="fixed inset-0 z-50 flex items-start justify-center bg-black/40"
        >
            <form
                @mousedown.stop
                :class="[
                    'bg-base-100 flex flex-col relative shadow-none',
                    'w-full h-full max-w-none max-h-none rounded-none', // mobile
                    'sm:w-[480px] sm:h-auto sm:max-w-full sm:rounded-xl sm:my-12 sm:shadow-xl' // desktop
                ]"
                @submit.prevent="submit_form"
            >
                <!-- Scrollable Content -->
                <div class="flex-1 overflow-y-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-32 sm:pb-8">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary text-center">
                        Add Plan<span v-if="member"> for {{ member.firstname }}</span>
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Click the card to select plan/s</span>
                            </label>
                            <PlanList v-model="selected_plans" />
                        </div>
                    </div>
                </div>
                <!-- Fixed Bottom Buttons -->
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2 w-full sm:static fixed bottom-0 left-0 z-10">
                    <button class="btn btn-ghost rounded-md w-full sm:w-auto" type="button" @click="close_modal" :disabled="is_adding">Cancel</button>
                    <button class="btn btn-primary rounded-md w-full sm:w-auto" type="submit" :disabled="!can_submit || is_adding">
                        {{ is_adding ? 'Adding Plan...' : 'Add Plan' }}
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import type { Member } from '~/core/member/member.types'
import PlanList from '~/components/PlanList.vue'

// --- Props & Emits ---
const props = defineProps<{
    member?: Member,
    is_adding?: boolean,
    show: boolean
}>()
const emit = defineEmits(['close', 'submit'])

// --- State ---
const selected_plans = ref<{ plan_id: string, start_date: string, sessions_left?: number }[]>([])

// --- Computed ---
const can_submit = computed(() =>
    selected_plans.value.length > 0 &&
    selected_plans.value.every(
        p => !!p.start_date && (p.sessions_left === undefined || p.sessions_left > 0)
    )
)

// --- Methods ---
function reset_form() {
    selected_plans.value = []
}

function close_modal() {
    reset_form()
    emit('close')
}

function submit_form() {
    if (!can_submit.value) return
    emit('submit', {
        plans: JSON.parse(JSON.stringify(selected_plans.value)),
        member_id: props.member?.id,
    })
    reset_form()
}

// --- Watchers ---
watch(() => props.show, (val) => {
    if (!val) reset_form()
})
</script>

<style scoped>
form {
    min-height: 100vh;
}
@media (min-width: 640px) {
    form {
        min-height: unset;
        height: auto;
        max-height: 90vh;
    }
}
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