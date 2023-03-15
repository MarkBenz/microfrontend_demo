// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    ssr: false,
    tailwindcss: {
      configPath: './tailwindcss-config.js',
    },
    vite: {
        // @ts-ignore
        plugins: [
            federation({
                name: 'host-app',
                remotes: {
                    app_a: "http://localhost:4002/assets/remoteEntry.js",
                    app_b: "http://localhost:4003/assets/remoteEntry.js"
                },
                shared: ['vue', 'tailwindcss']
            })
        ]
    },
    devServer: {
        port: 4001,
        host: 'localhost'
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
