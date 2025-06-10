<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-6 sm:pt-8 px-2 sm:px-4">
            <form 
                class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-md flex flex-col max-h-[95vh] overflow-hidden"
                @submit.prevent="submit_form"
            >
                <div class="overflow-y-auto flex-1 px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary text-center">
                        Add Plan<span v-if="member"> for {{ member.firstname }}</span>
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Select Plan</span>
                            </label>
                            <PlanList v-model="selected_plans" />
                        </div>
                    </div>
                </div>
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2">
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