// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-swiper',
    '@formkit/nuxt',
    'nuxt-headlessui',
    'nuxt-directus',
    'dayjs-nuxt',
  ],
  directus: {
    url: process.env.DIRECTUS_URL || 'http://api.dvgames.ru',
    autoFetch: true,
  },
  googleFonts: {
    families: {
      Jost: [400],
    },
  },
  swiper: {
    prefix: 'Swiper',
    styleLang: 'scss',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  headlessui: {
    prefix: 'Headless',
  },
  dayjs: {
    locales: ['ru'],
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
    defaultLocale: 'ru',
    defaultTimezone: 'Asia/Vladivostok',
  },
});
