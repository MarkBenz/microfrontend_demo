// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from "@originjs/vite-plugin-federation";


export default defineNuxtConfig({
    ssr: false,
    vite: {
        // @ts-ignore
        plugins: [
            federation({
                name: 'app-a',
                filename: 'remoteEntry.js',
                exposes: {
                  'app': './app.vue'
                },
                shared: ['vue']
            })
        ]
    },
    devServer: {
        port: 4003,
        host: 'localhost'
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
