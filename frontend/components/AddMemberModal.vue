<template>
    <dialog ref="modalRef" class="modal modal-open">
        <form
            method="dialog"
            class="modal-box bg-base-100 max-w-md p-0 overflow-hidden mt-8" 
            style="align-self: flex-start;"                               
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
                        <PlanList
                            v-model="selectedPlans"
                        />
                    </div>
                </div>
            </div>
            <div class="modal-action bg-base-200 px-8 py-4 flex justify-end gap-2">
                <button class="btn btn-ghost rounded-md" type="button" @click="close" :disabled="is_adding">Cancel</button>
                <button class="btn btn-primary rounded-md" type="submit" :disabled="!canSubmit || is_adding">
                    {{ is_adding ? 'Adding Member...' : 'Add Member' }}
                </button>
            </div>
        </form>
    </dialog>
</template>

<script setup lang="ts">

const props = defineProps<{
    is_adding?: boolean
}>()

const emit = defineEmits(['close', 'submit'])

const modalRef = ref<HTMLDialogElement | null>(null)
const firstname = ref('')
const lastname = ref('')
const contact_number = ref('')
const selectedPlans = ref<string[]>([]) // <-- should be an array

const canSubmit = computed(() =>
    firstname.value.trim() !== '' &&
    lastname.value.trim() !== '' &&
    selectedPlans.value.length > 0
)

function close() {
    emit('close')
}

function submit() {
    if (!canSubmit.value) return
    
    emit('submit', deepClone({
        firstname: firstname.value,
        lastname: lastname.value,
        contact_number: contact_number.value,
        planIds: selectedPlans.value, // <-- send array
    }))
    // close()
}

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})

defineExpose({ close })
</script>