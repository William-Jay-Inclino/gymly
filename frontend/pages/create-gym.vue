<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">
        <div
            class="w-full max-w-xl relative z-10"
            :class="[
                'p-0 sm:p-8',
                'space-y-8',
                'rounded-none sm:rounded-2xl',
                'shadow-none sm:shadow-2xl',
                'bg-transparent sm:bg-white'
            ]"
        >
            <div class="flex flex-col items-center mb-4 px-4 sm:px-0">
                <span class="inline-flex items-center gap-2 mb-2">
                    <Building2 class="w-8 h-8 text-primary" />
                    <span class="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">Create Your Gym</span>
                </span>
                <span class="text-base-content/70 text-xs sm:text-sm text-center">Welcome! Set up your gym to get started as a Gym Owner.</span>
            </div>
            <div>
                <div class="flex items-center justify-center mb-6 px-4 sm:px-0">
                    <div class="flex items-center gap-2">
                        <span :class="['w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all', step === 1 ? 'bg-primary text-white' : 'bg-base-200 text-base-content/60']">1</span>
                        <span class="text-base-content/80 font-semibold text-xs sm:text-base">Gym Info</span>
                        <span class="w-8 h-0.5 bg-base-200 mx-2 hidden sm:block"></span>
                        <span :class="['w-8 h-8 flex items-center justify-center rounded-full font-bold transition-all', step === 2 ? 'bg-primary text-white' : 'bg-base-200 text-base-content/60']">2</span>
                        <span class="text-base-content/80 font-semibold text-xs sm:text-base">Plans</span>
                    </div>
                </div>
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
                <div v-else class="px-4 sm:px-0">
                    <div class="mb-6">
                        <h2 class="text-lg sm:text-xl font-bold text-primary mb-2 flex items-center gap-2">
                            <CreditCard class="w-5 h-5 text-primary" /> Default Subscription Plans
                        </h2>
                        <p class="text-base-content/70 text-xs sm:text-sm">These plans will be available to your members by default. You can customize them later.</p>
                    </div>
                    <div class="space-y-4">
                        <div
                            v-for="plan in default_plans"
                            :key="plan.name"
                            class="rounded-xl sm:border border-base-200 sm:bg-base-100 p-4 shadow-none sm:shadow-sm flex flex-col sm:flex-row sm:items-center gap-4"
                        >
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-base sm:text-lg font-semibold text-base-content/90">{{ plan.name }}</span>
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
                            <div class="flex flex-col items-end min-w-[100px] sm:min-w-[120px]">
                                <span class="text-primary font-bold text-base sm:text-lg">
                                    ₱{{ plan.price.toLocaleString('en-PH', { minimumFractionDigits: 2 }) }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-3 mt-8">
                        <button class="btn btn-outline w-full sm:w-auto flex items-center justify-center" @click="go_to_step_1">
                            <ArrowLeft class="w-4 h-4 mr-1" /> Back
                        </button>
                        <button class="btn btn-primary w-full sm:w-auto" @click="finish_setup">
                            Finish Setup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Building2, CreditCard, ArrowLeft } from 'lucide-vue-next'

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

function go_to_step_2() {
    step.value = 2
}

function go_to_step_1() {
    step.value = 1
}

function finish_setup() {
    // Here you would send gym_name, gym_location, and default_plans to your backend
    // For now, just redirect to dashboard or show a success message
    // router.push('/dashboard')
    alert('Gym setup complete! You can now manage your gym.')
}
</script>