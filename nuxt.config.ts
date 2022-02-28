import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@unocss/nuxt'
    ],
    css: [
        '@/assets/styles/global.css'
    ],
    unocss: {
        uno: true, // enabled `@unocss/preset-uno`
        icons: {
            scale: 1.2,
        }, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        // core options
        shortcuts: [],
        rules: [],
    },
})
