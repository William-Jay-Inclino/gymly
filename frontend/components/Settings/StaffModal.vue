<template>
    <Transition name="modal" appear>
        <div v-if="show" @mousedown.self="handle_close" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
            <form
                @mousedown.stop
                :class="[
                    'bg-base-100 flex flex-col relative shadow-none',
                    'w-full h-full max-w-none max-h-none rounded-none', // mobile
                    'sm:w-[480px] sm:h-auto sm:max-w-full sm:rounded-xl sm:my-12 sm:shadow-xl' // desktop
                ]"
                @submit.prevent="is_edit_mode ? handle_edit_staff() : handle_add_staff()"
            >
                <div class="flex-1 overflow-y-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-50 sm:pb-8">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary text-center">
                        {{ is_edit_mode ? 'Edit Staff' : 'Add Staff' }}
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Email</span>
                            </label>
                            <input
                                v-model="form.email"
                                type="email"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">First Name</span>
                            </label>
                            <input
                                v-model="form.firstname"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Last Name</span>
                            </label>
                            <input
                                v-model="form.lastname"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Contact Number</span>
                            </label>
                            <input
                                v-model="form.contact_number"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                autocomplete="off"
                            />
                        </div>
                        <div v-if="!is_edit_mode">
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Password</span>
                            </label>
                            <input
                                v-model="form.password"
                                type="password"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                                autocomplete="off"
                            />
                        </div>
                    </div>
                </div>
                <!-- Fixed Bottom Buttons -->
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2 w-full sm:static fixed bottom-0 left-0 z-10">
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
// --- Props & Emits ---
const props = defineProps<{
    show: boolean
    is_edit_mode: boolean
    is_submitting: boolean
    form: {
        user_id?: string
        firstname: string
        lastname: string
        email: string
        contact_number: string
        password?: string
    }
}>()
const emit = defineEmits(['close', 'add', 'edit', 'update:form'])

// --- Local State ---
const form = ref({ ...props.form })

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
        user_id: '',
        firstname: '',
        lastname: '',
        email: '',
        contact_number: '',
        password: ''
    }
}

function handle_close() {
    reset_form()
    emit('close')
}

function handle_add_staff() {
    emit('update:form', { ...form.value })
    emit('add')
}

function handle_edit_staff() {
    emit('update:form', { ...form.value })
    emit('edit')
}
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