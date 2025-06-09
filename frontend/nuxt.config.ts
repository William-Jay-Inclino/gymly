import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            graphqlApiUrl: process.env.GRAPHQL_API_URL,
            appVersion: process.env.APP_VERSION,
            TZ: process.env.TZ,
            accessTokenKeyName: process.env.ACCESS_TOKEN_KEY_NAME,
            accessTokenKey: process.env.SECRET_KEY_ACCESS_TOKEN,
            SERVER: process.env.SERVER,
        }
    },
    compatibilityDate: '2025-05-15',
    devtools: { enabled: false },
    app: {
        baseURL: '/gymly/',
        head: {
            title: 'Gymly',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Gymly - A simple app for gym owners to manage members, track attendance, and view analytics' },
                { name: 'author', content: 'William Jay Inclino' },
            ],
            link: [
                { rel: 'author', href: 'https://www.facebook.com/jewell.inclino' },
            ],
        }
    },
    vite: {
        plugins: [tailwindcss()],
        esbuild: {
            drop: ['debugger'],
            pure: ['console.log', 'console.debug', 'console.trace'],
        }
    },
    plugins: [
        { src: '~/plugins/vue-toastification.ts', mode: 'client' },
    ],
    css: ["~/assets/app.css"],
    build: {
      transpile: ['vue-toastification'],
  },
    modules: ["@pinia/nuxt"],
})