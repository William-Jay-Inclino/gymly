<template>
    <div class="max-w-2xl mx-auto py-10 space-y-8">
        <!-- Change Password -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <div class="flex items-center gap-2 mb-2">
                <KeyRound class="w-5 h-5 text-primary" />
                <h2 class="font-semibold text-base-content">Change Password</h2>
            </div>
            <form class="space-y-3 max-w-sm">
                <input type="password" placeholder="Current Password" class="input input-bordered w-full" />
                <input type="password" placeholder="New Password" class="input input-bordered w-full" />
                <input type="password" placeholder="Confirm New Password" class="input input-bordered w-full" />
                <button class="btn btn-primary w-full mt-2" type="button">
                    Update Password
                </button>
            </form>
        </section>

        <!-- Staff Management -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <div class="flex items-center gap-2 mb-2">
                <Users class="w-5 h-5 text-primary" />
                <h2 class="font-semibold text-base-content">Staff Management</h2>
            </div>
            <div class="flex flex-col gap-2">
                <button class="btn btn-outline btn-primary w-fit">
                    <UserPlus class="w-4 h-4 mr-2" /> Add Staff
                </button>
                <div class="text-xs text-base-content/60">
                    Manage your gym staff here.
                </div>
            </div>
        </section>

        <!-- Display Limits -->
        <section class="bg-white rounded-xl shadow p-6 space-y-4">
            <div class="flex items-center gap-2 mb-2">
                <BarChart3 class="w-5 h-5 text-primary" />
                <h2 class="font-semibold text-base-content">Display Limits</h2>
            </div>
            <ul class="divide-y divide-base-200 text-sm">
                <li class="py-2 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <Users class="w-4 h-4 text-primary" /> Members
                    </span>
                    <span class="badge badge-outline">100</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <List class="w-4 h-4 text-primary" /> Plans
                    </span>
                    <span class="badge badge-outline">5</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <UserCog class="w-4 h-4 text-primary" /> Staffs
                    </span>
                    <span class="badge badge-outline">1</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <FileClock class="w-4 h-4 text-primary" /> System Logs
                    </span>
                    <span class="badge badge-outline">1 month</span>
                </li>
                <li class="py-2 flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <Users2 class="w-4 h-4 text-primary" /> Memberships per Member
                    </span>
                    <span class="badge badge-outline">3</span>
                </li>
            </ul>
            <div class="mt-3 text-xs text-base-content/60 italic flex items-center gap-2">
                <AlertCircle class="w-4 h-4 text-warning" />
                If you want to increase your limit, please contact system admin.
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import {
    Settings,
    KeyRound,
    Users,
    UserPlus,
    UserCog,
    BarChart3,
    List,
    FileClock,
    Users2,
    AlertCircle
} from 'lucide-vue-next'

definePageMeta({
    layout: "base-layout",
    middleware: ["auth"],
})
</script>