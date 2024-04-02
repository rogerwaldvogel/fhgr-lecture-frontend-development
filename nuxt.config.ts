// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/supabase', '@pinia/nuxt'],
    css: ['~/assets/css/main.css'],
    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/*'],
        }
    }
})