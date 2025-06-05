<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" data-theme="light">

        <Header />

        <div class="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-[100rem] mx-auto w-full items-start">
            <div class="lg:w-64 w-full">
                <SideBar />
            </div>

            <main class="flex-1 w-full">
                <NuxtPage />
            </main>
        </div>

        <Footer />
    </div>
</template>
