import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
    '@nuxtjs/strapi',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],

  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    shortcuts: [],
    rules: [],
    icons: {
      scale: 1.2,
    },
  },

  vueuse: {
    ssrHandlers: true,
  },

  strapi: {
    url: process.env.API_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

})
