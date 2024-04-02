// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/supabase', '@pinia/nuxt', '@nuxtjs/google-fonts'],
    css: ['~/assets/css/main.css'],
    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/*'],
        }
    },
    // https://fonts.google.com/
    googleFonts: {
        families: {
            // https://google-fonts.nuxtjs.org/getting-started/options#families
            'Workbench': true,
            Lato: [100, 300],
        }
    }
})