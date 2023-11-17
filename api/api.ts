import {useRuntimeConfig} from "nuxt/app";

const exclusion = [
    "createdAt", "publishedAt", "updatedAt"
]

const strapi = async (params: string, options?: RequestInit) => {
    const {public: {apiBase}} = useRuntimeConfig()
    const response = await fetch(`${apiBase}/api/${params}`, options)
    return response.json()
}

strapi.get = async (params: string) => {
    try {
        const {data} = await strapi(params)
        exclusion.forEach(exKey => delete data.attributes[exKey])
        return data
    } catch (e) {
        console.error("api get request", e)
    }
}

strapi.post = (params: string, query?: {}) => {
    return
}

strapi.put = () => {
}

strapi.delete = () => {
}

export default strapi;