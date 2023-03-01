<template>
  <div class="carousel">
    <div class="carousel__item" v-for="item of list">
      <img class="carousel__image"
           :src="`${apiBase}${item.background?.data?.attributes?.url}`"
           alt="#000">
      <h3 class="carousel__title">
        {{ title }}
      </h3>
      <p class="carousel__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Array,
    required: false
  }
})
const {apiBase} = useRuntimeConfig()
console.log(apiBase)
const {list} = toRefs(props)
console.log(list)
</script>

<style lang="scss" scoped>
.carousel {
  height: 100vh;

  &__image {

  }

  &__item {
  }
}
</style>