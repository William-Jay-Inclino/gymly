<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-8" data-theme="light">
        <button
            v-if="step === 2"
            class="fixed top-3 left-3 sm:absolute sm:top-4 sm:left-4 p-2 rounded-full hover:bg-base-200 transition text-base-content/60 hover:text-primary z-30"
            type="button"
            @click="go_to_step_1"
            :disabled="is_loading"
            aria-label="Back"
        >
            <ArrowLeft class="w-5 h-5" />
        </button>
        <div
            class="w-full max-w-xl relative z-10"
            :class="[
                'p-4 sm:p-8',
                'space-y-8',
                'rounded-none sm:rounded-2xl',
                'shadow-none sm:shadow-2xl',
                'bg-transparent sm:bg-white'
            ]"
        >
            <div v-if="step === 1" class="flex flex-col items-center mb-5 px-4 sm:px-0">
                <span class="text-xl sm:text-2xl font-extrabold tracking-tight text-primary text-center">
                    Great to Have You Here!
                </span>
                <span class="text-base-content/70 text-xs sm:text-sm text-center">
                    Let's get you up and running — just a few quick steps to complete your setup.
                </span>
            </div>
            <div v-if="step === 2" class="flex flex-col items-center mb-5 px-4 sm:px-0">
                <span class="text-xl sm:text-2xl font-extrabold tracking-tight text-primary text-center">
                    Take Note!
                </span>
            </div>
            <div>
                <form v-if="step === 1" @submit.prevent="go_to_step_2" class="space-y-6 px-4 sm:px-0">
                    <div>
                        <label class="label font-semibold text-base-content/80">Gym Name</label>
                        <input
                            v-model="gym_name"
                            type="text"
                            placeholder="Enter your gym's name"
                            class="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label class="label font-semibold text-base-content/80">Location</label>
                        <input
                            v-model="gym_location"
                            type="text"
                            placeholder="Enter your gym's location"
                            class="input input-bordered w-full"
                            required
                        />
                    </div>
                    <button class="btn btn-primary w-full mt-4" type="submit">
                        Next
                    </button>
                </form>
                <div v-else class="relative px-2 sm:px-0">
                    <div class="mb-4 sm:mb-6 mt-4">
                        <!-- <h2 class="text-base sm:text-xl font-bold text-primary mb-1 sm:mb-2 flex items-center gap-2">
                            <CreditCard class="w-5 h-5 text-primary" /> Subscription Plans
                        </h2> -->
                        <p class="text-base-content/70 text-xs sm:text-sm">
                            <span>These are the default subscription plans that will be available for <span class="font-semibold">your gym members</span> to purchase.</span>
                            <br>
                            <span>
                                <span class="text-error font-semibold">Note:</span> These plans are <span class="font-semibold">not</span> for your own subscription. You can customize this later.
                            </span>
                        </p>
                    </div>
                    <div class="space-y-3">
                        <div
                            v-for="plan in default_plans"
                            :key="plan.name"
                            class="rounded-lg sm:rounded-xl border border-base-200 bg-base-100 p-3 sm:p-4 shadow-none sm:shadow-sm flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                        >
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-sm sm:text-lg font-semibold text-base-content/90">{{ plan.name }}</span>
                                    <span
                                        v-if="plan.num_of_days"
                                        class="badge badge-outline text-xs flex items-center"
                                    >
                                        {{ plan.num_of_days }} day{{ plan.num_of_days > 1 ? 's' : '' }}
                                    </span>
                                    <span v-if="plan.num_of_sessions" class="badge badge-outline text-xs">{{ plan.num_of_sessions }} session{{ plan.num_of_sessions > 1 ? 's' : '' }}</span>
                                </div>
                                <div class="text-base-content/70 text-xs sm:text-sm mb-1">{{ plan.description }}</div>
                            </div>
                            <div class="flex flex-col items-end min-w-[80px] sm:min-w-[120px]">
                                <span class="text-primary font-bold text-base sm:text-lg">
                                    ₱{{ plan.price.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button class="btn btn-primary w-full flex items-center justify-center" @click="finish_setup" :disabled="is_loading">
                            <span v-if="is_loading" class="loading loading-spinner loading-xs mr-2"></span>
                            Finish Setup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CreditCard, ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { create_gym } from '~/core/gym/gym.api'
import { showToastError } from '~/utils/toast'
import { useGlobalStore } from '~/core/global.store'

definePageMeta({
    middleware: ["auth"],
})


const is_loading = ref(false)
const step = ref(1)
const gym_name = ref('')
const gym_location = ref('')

const default_plans = [
    {
        name: "Day Pass",
        description: "Enjoy unlimited access to all gym facilities for one day.",
        price: 200,
        num_of_days: 1,
        num_of_sessions: null,
    },
    {
        name: "Monthly Membership",
        description: "Full access to the gym for 30 days. Ideal for regular members.",
        price: 1000,
        num_of_days: 30,
        num_of_sessions: null,
    },
    {
        name: "Boxing 10-Session Pack",
        description: "Attend any 10 boxing classes at your convenience within the validity period.",
        price: 1200,
        num_of_days: null,
        num_of_sessions: 10,
    },
]

const router = useRouter()
const { user } = useGlobalStore()

function go_to_step_2() {
    step.value = 2
}

function go_to_step_1() {
    step.value = 1
}

async function finish_setup() {
    if (is_loading.value) return
    is_loading.value = true
    try {
        const owner_id = user?.id
        if (!owner_id) {
            showToastError('User not found. Please login again.')
            is_loading.value = false
            return
        }
        const res = await create_gym({
            owner_id,
            name: gym_name.value,
            location: gym_location.value,
            plans: default_plans
        })
        if (res.success) {
            // showToastSuccess('Welcome to Gymly!')
            router.push('/memberships')
        } else {
            showToastError(res.msg || 'Failed to create gym')
        }
    } catch (e) {
        showToastError('Failed to create gym')
    } finally {
        is_loading.value = false
    }
}
</script>