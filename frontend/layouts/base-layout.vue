<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">
        <Header />

        <!-- Mobile Menu: sticky at the top, only on mobile -->
        <div class="w-full block lg:hidden sticky top-0 z-40">
            <client-only>
                <MobileMenuItems />
            </client-only>
        </div>

        <div class="flex-1 flex flex-col lg:flex-row gap-8 px-4 py-10 max-w-[100rem] mx-auto w-full items-start">
            <!-- Desktop Sidebar & AuthUser -->
            <div class="lg:w-64 w-full hidden lg:block">
                <AuthUser />
                <client-only>
                    <SideBar />
                </client-only>
            </div>

            <main class="flex-1 w-full">
                <NuxtPage />
            </main>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import AuthUser from '~/components/AuthUser.vue'
import SideBar from '~/components/SideBar.vue'
import MobileMenuItems from '~/components/MobileMenuItems.vue'
</script>