export default function useCarousel(props: any) {

    const data = ref(props)
    const timeoutId = ref<number>(0);
    const shownSlide = ref<number>(0);

    const onSelectSlide = (index: number) => {
        shownSlide.value = index
    }

    const onNextSlide = (index: number) => {
        if (shownSlide.value < 0) {
            shownSlide.value = index++
        }
    }

    const onPrevSlide = (index: number) => {
        if (shownSlide.value === 0) {
        }
        if (shownSlide.value > 0) {
            shownSlide.value = index--
        }
    }
    return {onNextSlide, onSelectSlide, onPrevSlide, data, shownSlide}
}