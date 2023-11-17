<template>
  <div class="carousel">
    <template v-for="({id, background, show,title, text, button}, index) of carouselList" :key="id">
      <div
          class="carousel__item"
          v-if="shownSlide === index"
      >
        <img
            class="carousel__image"
            :src="`${apiBase}${background?.data?.attributes?.url}`"
            loading="lazy"
            alt="#000"
        >
        <div class="text-block">
          <span class="text-block__label">
            #New Arrival
          </span>
          <h3 class="text-block__title">
            {{ title }}
          </h3>
          <p class="text-block__text">
            {{ text }}
          </p>
          <component :is="buttons[button.component]" :size="'small'" v-bind="button"/>
        </div>
      </div>
    </template>

    <div class="carousel-menu">
      <ul class="carousel-menu__list">
        <li class="carousel-menu__item"
            :class="{active:index === shownSlide}"
            v-for="(item, index) of carouselList"
            :key="item.id"
            @click="onSelectSlide(index)"
        />
      </ul>
    </div>

  </div>
</template>

<script lang="ts" setup>
import useNavigationHover from "~/hooks/useNavigationHover";
import useCarousel from "~/hooks/useCarousel";
import VButtonDiscover from "~/components/UI/VButtonDiscover.vue";

const buttons = {
  buttonDiscover: VButtonDiscover
}

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})

const {apiBase} = useRuntimeConfig()


const {
  onNextSlide,
  onSelectSlide,
  onPrevSlide, data: carouselList,
  shownSlide
} = useCarousel(props.list)


</script>

<style lang="scss" scoped>
.carousel {
  height: 750px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__image {
    position: absolute;
    object-fit: contain;
    width: 100%;
    object-position: right bottom;
    max-height: 80%;
  }

  .text-block {
    z-index: 1;
    max-width: 50%;

    &__label {
      display: inline-block;
      background: $black;
      color: $white;
      text-transform: uppercase;
    }

    &__title {
      font-size: 2.75rem;
      font-weight: 300;
      line-height: 1.3;
      text-transform: uppercase;
    }

    &__text {
      opacity: .8;
    }
  }

  .carousel-menu {
    z-index: 1;

    &__list {
      display: flex;
      justify-content: center;
    }

    &__item {
      cursor: pointer;
      border: 1px solid $notActiveWhite;
      background: #837a56;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
    }

    .active {
      background: white;
    }
  }
}
</style>