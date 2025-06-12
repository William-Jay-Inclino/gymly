<template>
    <section class="bg-white rounded-xl shadow p-4 sm:p-6 space-y-4">
        <div class="flex items-center gap-2 mb-2">
            <Building2 class="w-5 h-5 text-primary" />
            <h2 class="font-semibold text-base-content">Gym Information</h2>
        </div>
        <form class="space-y-4" @submit.prevent="update_gym_info">
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Gym Name</span>
                </label>
                <input
                    v-model="gym_name"
                    type="text"
                    class="input input-bordered w-full"
                    placeholder="Enter gym name"
                    required
                />
            </div>
            <div>
                <label class="label pb-1">
                    <span class="label-text text-base-content/80">Location</span>
                </label>
                <input
                    v-model="gym_location"
                    type="text"
                    class="input input-bordered w-full"
                    placeholder="Enter gym location"
                    required
                />
            </div>
            <button class="btn btn-primary w-full mt-2 flex items-center justify-center" type="submit" :disabled="is_loading">
                <span v-if="is_loading" class="loading loading-spinner loading-xs mr-2"></span>
                Update Gym
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
import { Building2 } from 'lucide-vue-next'
import { useGlobalStore } from '~/core/global.store'
import { update_gym } from '~/core/gym/gym.api'
import { showToastSuccess, showToastError } from '~/utils/toast'

const global_store = useGlobalStore()
const gym_name = ref('')
const gym_location = ref('')
const is_loading = ref(false)

function populate_form_from_current_gym() {
    if (global_store.current_gym) {
        gym_name.value = global_store.current_gym.name || ''
        gym_location.value = global_store.current_gym.location || ''
    }
}

// Populate form on mount and whenever current_gym changes
onMounted(populate_form_from_current_gym)
watch(() => global_store.current_gym, populate_form_from_current_gym, { immediate: true })

async function update_gym_info() {
    if (!global_store.current_gym?.id) {
        showToastError('No gym found to update.')
        return
    }
    is_loading.value = true
    try {
        const res = await update_gym({
            id: global_store.current_gym.id,
            name: gym_name.value,
            location: gym_location.value,
        })
        if (res.success && res.data) {
            showToastSuccess('Gym updated successfully!')
            global_store.set_current_gym(res.data)
        } else {
            showToastError(res.msg || 'Failed to update gym')
        }
    } catch (e) {
        showToastError('Failed to update gym')
    } finally {
        is_loading.value = false
    }
}
</script>