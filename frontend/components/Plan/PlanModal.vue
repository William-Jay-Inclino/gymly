<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-4 sm:pt-8 px-2 sm:px-4">
            <form
                class="bg-base-100 rounded-2xl shadow-2xl w-full max-w-md relative flex flex-col max-h-[95vh] overflow-hidden"
                @submit.prevent="handle_submit"
            >
                <div class="overflow-y-auto flex-1 px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary text-center">
                        {{ is_edit_mode ? 'Edit Plan' : 'Add Plan' }}
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Plan Name</span>
                            </label>
                            <input
                                v-model="form.name"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Description</span>
                            </label>
                            <textarea
                                v-model="form.description"
                                class="textarea textarea-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                rows="2"
                                autocomplete="off"
                            ></textarea>
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Price (₱)</span>
                            </label>
                            <input
                                v-model.number="form.price"
                                type="number"
                                min="0"
                                step="0.01"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                        <div class="flex flex-col sm:flex-row gap-2">
                            <div class="flex-1">
                                <label class="label pb-1">
                                    <span class="label-text text-base-content/80">Days</span>
                                </label>
                                <input
                                    v-model.number="form.num_of_days"
                                    type="number"
                                    min="0"
                                    class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                    :disabled="!!form.num_of_sessions && form.num_of_sessions > 0"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="flex-1">
                                <label class="label pb-1">
                                    <span class="label-text text-base-content/80">Sessions</span>
                                </label>
                                <input
                                    v-model.number="form.num_of_sessions"
                                    type="number"
                                    min="0"
                                    class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                    :disabled="!!form.num_of_days && form.num_of_days > 0"
                                    autocomplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2">
                    <button class="btn btn-ghost rounded-md w-full sm:w-auto" type="button" @click="handle_close" :disabled="is_submitting">Cancel</button>
                    <button class="btn btn-primary rounded-md w-full sm:w-auto" type="submit" :disabled="is_submitting">
                        <span v-if="is_submitting" class="loading loading-spinner loading-xs mr-2"></span>
                        {{ is_edit_mode ? 'Update' : 'Add' }}
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { CreatePlanInput } from '~/core/plan/plan.types'

// --- Props & Emits ---
const props = defineProps<{
    show: boolean
    is_edit_mode: boolean
    is_submitting: boolean
    form: Partial<CreatePlanInput & { id?: string }>
}>()
const emit = defineEmits(['close', 'submit', 'update:form'])

// --- Local State ---
const form = ref<Partial<CreatePlanInput & { id?: string }>>({ ...props.form })

// --- Watchers ---
watch(() => props.form, (val) => {
    form.value = { ...val }
})
watch(() => props.show, (val) => {
    if (!val) reset_form()
})

// --- Methods ---
function reset_form() {
    form.value = {
        name: '',
        description: '',
        price: 0,
        num_of_days: null,
        num_of_sessions: null,
    }
}

function handle_close() {
    reset_form()
    emit('close')
}

function handle_submit() {
    emit('update:form', { ...form.value })
    emit('submit')
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