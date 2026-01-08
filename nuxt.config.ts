// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,

  app: {
    baseURL: '/basic-computer/',
  },

  nitro: {
    preset: 'static',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
