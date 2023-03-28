export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("capitalize", {
        created: (el) => {
            const word = el.textContent.split(" ")[0];
            el.textContent = `${word[0].toUpperCase()}${word.slice(1)}`
        }
    })

})