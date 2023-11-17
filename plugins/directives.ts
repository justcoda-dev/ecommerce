export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("capitalize", el => {
        const word = el.textContent.split(" ")[0];
        el.textContent = `${word[0].toUpperCase()}${word.slice(1)}`
    })
    nuxtApp.vueApp.directive("visible", (el, binding) => {
        if (binding.value) {
            el.style.visibility = ""
        } else {
            el.style.visibility = "hidden"
        }
    })
})