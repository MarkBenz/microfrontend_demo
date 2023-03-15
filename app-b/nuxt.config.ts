// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    css: [
        '~/assets/css/remoteAppStyles.css',
    ],
    vite: {
        // @ts-ignore
        plugins: [
            federation({
                name: 'app-b',
                filename: 'remoteEntry.js',
                exposes: {
                    './app': './app.vue',
                    './styles': './assets/css/remoteAppStyles.css',
                },
                shared: []
            })
        ]
    },
    devServer: {
        port: 4002,
        host: 'localhost'
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    experimental: {
        inlineSSRStyles: true,
        asyncEntry: true
    }
})
