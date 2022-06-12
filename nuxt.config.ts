import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  module: ["@nuxt/content", "@vueuse/nuxt"],
  buildModule: [],

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  css: [
    "@/assets/css/main.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/fonts.css",
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
})
