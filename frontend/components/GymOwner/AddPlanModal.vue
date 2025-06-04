<template>
    <dialog ref="modalRef" class="modal modal-open">
        <form method="dialog" class="modal-box bg-base-100 max-w-md p-0 overflow-hidden" @submit.prevent="submit">
            <div class="px-8 pt-8 pb-2">
                <h3 class="font-semibold text-xl mb-6 text-primary">
                    Add Plan<span v-if="member"> for {{ member.firstname }}</span>
                </h3>
                <div class="space-y-4">
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
                    {{ is_adding ? 'Adding Plan...' : 'Add Plan' }}
                </button>
            </div>
        </form>
    </dialog>
</template>

<script setup lang="ts">
import PlanList from './PlanList.vue'
import type { Member } from '~/core/member/member.types';

const props = defineProps<{
    member?: Member,
    is_adding?: boolean
}>()

const emit = defineEmits(['close', 'submit'])


const modalRef = ref<HTMLDialogElement | null>(null)
const selectedPlans = ref<string[]>([])

const canSubmit = computed(() => selectedPlans.value.length > 0)

function close() {
    emit('close')
}

function submit() {
    if (!canSubmit.value) return
    emit('submit', {
        plan_ids: deepClone(selectedPlans.value),
        member_id: props.member?.id,
    })
    // close()
}

onMounted(() => {
    if (modalRef.value) modalRef.value.showModal?.()
})

defineExpose({ close })
</script>