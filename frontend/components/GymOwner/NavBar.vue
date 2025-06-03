<template>
    <div class="navbar bg-base-100 shadow-sm px-6">
        <div class="flex-1">
            <a class="btn btn-ghost text-2xl font-semibold text-neutral hover:bg-base-200 hover:text-primary transition duration-300 rounded-lg px-4 py-2">
                <Dumbbell class="w-6 h-6 stroke-current" />
                <span class="flex-1 text-left">Gimple</span>
            </a>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost btn-circle avatar hover:bg-base-200 transition"
                >
                    <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            alt="User avatar"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                    </div>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-xl shadow-lg mt-3 w-52 p-3 z-50"
                >
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge badge-primary text-white">New</span>
                        </a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                    <li>
                        <a class="text-error hover:text-red-500 transition">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { Dumbbell } from 'lucide-vue-next'
</script>