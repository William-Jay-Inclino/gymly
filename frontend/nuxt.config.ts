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
      }
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  vite: {
      plugins: [tailwindcss()],
  },

plugins: [
    { src: '~/plugins/vue-toastification.ts', mode: 'client' },
],

  css: ["~/assets/app.css"],
  modules: ["@pinia/nuxt"],
})