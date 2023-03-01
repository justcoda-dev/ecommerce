import {ref} from "vue"

export default function useNavigationHover(props: any) {
    const state = ref<any[]>(props)

    const onClick = (id: number) => {
        state.value.forEach(item => {
            if (item.id === id) {
                item.show = !item.show
            }
        })
    }

    const onOver = (id: number) => {
        state.value.forEach(item => {
            if (item.id === id) {
                item.show = true
            }
        })
    }

    const onLeave = (id: number) => {
        state.value.forEach(item => {
            if (item.id === id) {
                item.show = false
            }
        })
    }
    return {onOver, onLeave, onClick, state}
}