<template>

  <ul class="services">
    <li class="services__item" v-for="item of props.list" :key="item.id">
      <img class="services__item-image" :src="`${apiBase}${item.image?.data?.attributes?.url}`"
           alt="#000">
      <h3 class="services__item-title">
        {{ item.title }}
      </h3>
      <p class="services__item-text">
        {{ item.text }}
      </p>
    </li>
  </ul>

</template>

<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: []
  }
})

const {apiBase} = useRuntimeConfig()

onMounted(() => {
  console.log(apiBase)
})
</script>

<style lang="scss" scoped>
.services {

  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;


  &__item {
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__item-image {
    width: 4.375rem;
    margin: 0 0 1.5rem 0;
  }

  &__item-title {
    margin: 0 0 1.25rem 0;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
  }

  &__item-text {
    margin: 0 0 1rem 0;
    text-align: center;
    line-height: 1.8;
    font-weight: 400;
    color: $gray;
  }
}
</style>