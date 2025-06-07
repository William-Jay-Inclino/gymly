<template>
    <Transition name="modal" appear>
        <div v-if="show" class="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-8 px-4">
            <form
                class="bg-base-100 rounded-2xl shadow-2xl p-0 max-w-md w-full overflow-hidden flex flex-col"
                @submit.prevent="submit"
            >
                <div class="px-8 pt-8 pb-2">
                    <h3 class="font-semibold text-xl mb-6 text-primary">Add Member</h3>
                    <div class="space-y-4">
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">First Name</span>
                            </label>
                            <input
                                v-model="firstname"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Last Name</span>
                            </label>
                            <input
                                v-model="lastname"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                            />
                        </div>
                        <div>
                            <label class="label pb-1">
                                <span class="label-text text-base-content/80">Contact Number</span>
                            </label>
                            <input
                                v-model="contact_number"
                                type="text"
                                class="input input-bordered w-full bg-base-200 focus:bg-base-100 transition"
                                required
                            />
                        </div>
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
                        {{ is_adding ? 'Adding Member...' : 'Add Member' }}
                    </button>
                </div>
            </form>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import PlanList from '~/components/PlanList.vue'

const props = defineProps<{
    show: boolean
    is_adding?: boolean
}>()

const emit = defineEmits(['close', 'submit'])

const firstname = ref('')
const lastname = ref('')
const contact_number = ref('')
const selectedPlans = ref<{ plan_id: string, start_date: string, sessions_left?: number }[]>([])

const canSubmit = computed(() =>
    firstname.value.trim() !== '' &&
    lastname.value.trim() !== '' &&
    selectedPlans.value.length > 0 &&
    selectedPlans.value.every(
        p => !!p.start_date && (p.sessions_left === undefined || p.sessions_left > 0)
    )
)

function resetForm() {
    firstname.value = ''
    lastname.value = ''
    contact_number.value = ''
    selectedPlans.value = []
}

function close() {
    resetForm()
    emit('close')
}

function submit() {
    if (!canSubmit.value) return

    emit('submit', {
        firstname: firstname.value,
        lastname: lastname.value,
        contact_number: contact_number.value,
        plans: selectedPlans.value, 
    })
    resetForm()
}

// Also reset when modal is hidden by parent (e.g. pressing ESC or clicking outside)
watch(() => props.show, (val) => {
    if (!val) resetForm()
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