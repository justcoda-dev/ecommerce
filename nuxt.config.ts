

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/style/main.scss",
        "@fortawesome/fontawesome-svg-core/styles.css"
    ],
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: process.env.API_BASE || "http://localhost:1337",
            otherUrl: process.env.OTHER_URL || "default_other_url"
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:`
                    @import "@/assets/style/variables/colors.scss";
                    @import "@/assets/style/variables/fonts.scss";
                    `
                }
            }
        }
    }
})

