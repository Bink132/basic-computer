// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'vercel'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
