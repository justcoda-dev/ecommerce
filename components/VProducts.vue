<template>
  <div class="products">
    <h2>{{ props.title }}</h2>
    <p> {{ props.text }}</p>
    <ul class="products__list">
      <li class="products__item" v-for="item of props.products?.data" :key="item.id">
        <v-product :product="item"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import VProduct from "~/components/VProduct.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  },
  products: {
    type: Object,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.products {

  &__list {
    display: flex;
    //flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  &__item {
    flex: 0 1 300px;
  }
}
</style>