<template>
    <div class="min-h-screen bg-base-100 flex flex-col">
        <!-- Hero Section -->
        <header class="flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-gradient-to-r from-base-100 to-blue-50 rounded-b-3xl shadow">
            <img
                src="/images/gym.png"
                alt="Gym"
                class="w-full max-w-md h-64 object-cover rounded-2xl shadow-lg"
            />
            <div class="max-w-lg flex flex-col gap-4 items-start">
                <h1 class="text-4xl font-extrabold text-primary flex flex-wrap items-center gap-2">
                    Gymly
                    <span class="bg-gradient-to-r from-[#0033a0] via-[#fff200] to-[#ce1126] bg-clip-text text-transparent font-extrabold flex items-center gap-1">
                        Philippines
                    </span>
                </h1>
                <p class="text-lg text-base-content/70">
                    A simple app for gym owners to manage members, track attendance, and view analytics.
                </p>
                <button
                    class="btn btn-lg bg-gradient-to-r from-primary to-blue-500 text-white border-0 shadow-lg hover:scale-105 hover:from-blue-600 hover:to-primary-focus transition-transform duration-150 flex items-center gap-2"
                    @click="signUpWithGoogle"
                >
                    <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    <span class="font-semibold tracking-wide">Signup with Google</span>
                </button>
                <span class="text-success font-semibold mt-2">Start free. Upgrade anytime.</span>
            </div>
        </header>

        <!-- Features Section -->
        <section class="max-w-6xl mx-auto py-12 px-4 w-full">
            <h2 class="text-2xl font-bold text-center mb-8 text-primary">Features</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-3">
                    <UserIcon class="w-12 h-12 text-primary mb-2" />
                    <h3 class="font-semibold text-lg text-blue-600 flex items-center gap-2">
                        Member Management
                    </h3>
                    <p class="text-base-content/70 text-center">
                        Easily add, edit, and organize your gym members in one place.
                    </p>
                </div>
                <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-3">
                    <CalendarCheckIcon class="w-12 h-12 text-primary mb-2" />
                    <h3 class="font-semibold text-lg text-blue-600 flex items-center gap-2">
                        Attendance Tracking
                    </h3>
                    <p class="text-base-content/70 text-center">
                        Track check-ins, auto-validate expired subscriptions, and renew in just 3 clicks.
                    </p>
                </div>
                <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-3">
                    <BarChart3Icon class="w-12 h-12 text-primary mb-2" />
                    <h3 class="font-semibold text-lg text-blue-600 flex items-center gap-2">
                        Analytics & Insights
                    </h3>
                    <p class="text-base-content/70 text-center">
                        View revenue (daily, weekly, monthly, or custom), membership count, and attendance stats.
                    </p>
                </div>
                <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-3">
                    <BellIcon class="w-12 h-12 text-primary mb-2" />
                    <h3 class="font-semibold text-lg text-blue-600 flex items-center gap-2">
                        Notifications
                    </h3>
                    <p class="text-base-content/70 text-center">
                        Send reminders and updates to members via text or email.
                    </p>
                </div>
            </div>
        </section>

        <!-- Loom Video Section -->
        <section class="max-w-3xl mx-auto my-12 px-4 w-full">
            <h2 class="text-2xl font-bold text-primary mb-4 text-center">See Gymly in Action</h2>
            <div class="w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.loom.com/embed/faed0e88e8d84b1b8045f6c7ba3d19c6"
                    frameborder="0"
                    allowfullscreen
                    class="w-full h-72 md:h-96"
                ></iframe>
            </div>
        </section>

        <!-- Advantages Section -->
        <section class="bg-blue-50 rounded-xl max-w-4xl mx-auto my-12 py-10 px-6 text-center w-full">
            <h2 class="text-2xl font-bold mb-4 text-primary">Why Choose Gymly?</h2>
            <ul class="space-y-3 text-base-content/80 text-lg max-w-md mx-auto text-left">
                <li class="flex items-center gap-2">
                    <CheckCircle2Icon class="w-5 h-5 text-success" /> Simple, intuitive interface
                </li>
                <li class="flex items-center gap-2">
                    <GiftIcon class="w-5 h-5 text-success" /> Very cheap compared to other gym management apps
                </li>
                <li class="flex items-center gap-2">
                    <CloudIcon class="w-5 h-5 text-success" /> Cloud-based, access anywhere
                </li>
                <li class="flex items-center gap-2">
                    <UserIcon class="w-5 h-5 text-success" /> Built for small and local gyms
                </li>
                <li class="flex items-center gap-2">
                    <HeadsetIcon class="w-5 h-5 text-success" /> Dedicated support
                </li>
            </ul>
        </section>

        <!-- Pricing Section -->
        <section class="max-w-4xl mx-auto py-12 px-4 w-full">
            <h2 class="text-2xl font-bold text-center mb-8 text-primary">Pricing</h2>
            <div class="flex flex-col md:flex-row gap-8 justify-center">
                <div class="bg-white rounded-xl shadow p-8 flex-1 flex flex-col items-center mb-6 md:mb-0">
                    <h3 class="text-xl font-semibold text-success mb-2 flex items-center gap-2">
                        <GiftIcon class="w-5 h-5" /> Free Tier
                    </h3>
                    <p class="mb-4 text-base-content/70">Basic features for small gyms</p>
                    <ul class="mb-4 space-y-2 text-base-content/80">
                        <li>
                            <UserIcon class="inline w-4 h-4 mr-1" /> Up to 50 members <span class="text-xs text-gray-500">(limit can be increased)</span>
                        </li>
                        <li>
                            <CalendarCheckIcon class="inline w-4 h-4 mr-1" /> Attendance tracking
                        </li>
                        <li>
                            <BarChart3Icon class="inline w-4 h-4 mr-1" /> Basic analytics
                        </li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl shadow p-8 flex-1 flex flex-col items-center border-2 border-primary">
                    <h3 class="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                        <CrownIcon class="w-5 h-5" /> Paid Tier
                    </h3>
                    <p class="mb-4 text-base-content/70">Advanced features for growing gyms</p>
                    <ul class="mb-4 space-y-2 text-base-content/80">
                        <li><UsersIcon class="inline w-4 h-4 mr-1" /> Unlimited members</li>
                        <li><BarChart3Icon class="inline w-4 h-4 mr-1" /> Advanced analytics</li>
                        <li><BellIcon class="inline w-4 h-4 mr-1" /> Automated notifications</li>
                        <li><HeadsetIcon class="inline w-4 h-4 mr-1" /> Priority support</li>
                    </ul>
                    <span class="text-2xl font-bold text-primary">₱1999<span class="text-base font-normal">/month</span></span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {
    UserIcon,
    UsersIcon,
    CalendarCheckIcon,
    BarChart3Icon,
    BellIcon,
    CheckCircle2Icon,
    CloudIcon,
    HeadsetIcon,
    GiftIcon,
    CrownIcon
} from 'lucide-vue-next';

function signUpWithGoogle() {
    // TODO: Integrate Google sign-in
    alert('Google sign-up coming soon!');
}
</script>

<style scoped>
/* Responsive aspect ratio for Loom video */
.aspect-w-16 {
    aspect-ratio: 16 / 9;
}
@media (max-width: 768px) {
    .aspect-w-16 {
        aspect-ratio: 16 / 9;
    }
}
</style>