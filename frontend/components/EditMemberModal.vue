<template>
    <Transition name="modal" appear>
        <div v-if="show" @mousedown.self="$emit('close')" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40">
            <form
                @mousedown.stop
                class="bg-base-100 w-full h-full max-w-none max-h-none rounded-none shadow-none flex flex-col relative"
                @submit.prevent="submit"
            >
                <div class="flex-1 overflow-y-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-2">
                    <h3 class="font-semibold text-lg sm:text-xl mb-6 text-primary text-center">Edit Member</h3>
                    <div class="space-y-4">
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
                    </div>
                </div>
                <!-- Fixed Bottom Buttons -->
                <div class="bg-base-200 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-end gap-2 w-full fixed bottom-0 left-0 z-10">
                    <button class="btn btn-ghost rounded-md w-full sm:w-auto" type="button" @click="$emit('close')" :disabled="is_updating">Cancel</button>
                    <button class="btn btn-primary rounded-md w-full sm:w-auto" type="submit" :disabled="is_updating">
                        <span v-if="is_updating" class="loading loading-spinner loading-xs mr-2"></span>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps(['show', 'member', 'is_updating'])
const emit = defineEmits(['close', 'submit'])

const form = ref({
    id: '',
    firstname: '',
    lastname: '',
    contact_number: ''
})

watch(
    () => props.member,
    (val) => {
        if (val) {
            form.value = { ...val }
        }
    },
    { immediate: true }
)

function submit() {
    emit('submit', { ...form.value })
}
</script>

<style scoped>
form {
    min-height: 100vh;
}
.flex-1 {
    padding-bottom: 96px; /* space for fixed buttons */
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