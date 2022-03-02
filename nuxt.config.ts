import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    meta: {
        title: 'Paulo Guerra F',
    },
    buildModules: [
        '@unocss/nuxt'
    ],
    css: [
        '@/assets/styles/global.css'
    ],
    unocss: {
        uno: true, // enable `@unocss/preset-uno`
        icons: {
            scale: 1.2, // enable `@unocss/preset-icons` with width and size of 1.2em
        }, 
        attributify: true, // enable `@unocss/preset-attributify`,
        // core options
        shortcuts: [],
        rules: [],
    }
})
