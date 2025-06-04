<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">

        <GymOwnerHeader />

        <!-- <GymOwnerNavBar /> -->
        <div class="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-[100rem] mx-auto w-full items-start">
            <div class="lg:w-64 w-full">
                <GymOwnerSideBar />
            </div>

            <main class="flex-1 w-full">
                <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8">
                    <NuxtPage />
                </div>
            </main>
        </div>

        <GymOwnerFooter />
    </div>
</template>
