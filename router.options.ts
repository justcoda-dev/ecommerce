import type {RouterConfig} from '@nuxt/schema'

export default <RouterConfig>{
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {top: 100, behavior: 'smooth',}
    },
    routes: (_routes) => [],
}