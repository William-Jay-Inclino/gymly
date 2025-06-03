import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            graphqlApiUrl: process.env.GRAPHQL_API_URL,
            appVersion: process.env.APP_VERSION,
            TZ: process.env.TZ,
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    vite: {
        plugins: [tailwindcss()],
    },
    css: ["~/assets/app.css"],
})
