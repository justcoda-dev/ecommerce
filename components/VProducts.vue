<template>
  <div class="products">
    <div class="products__text-block">
      <h2 class="products__title">{{ props.title }}</h2>
      <p class="products__text"> {{ props.text }}</p>
    </div>
    <ul class="products__list">
      <li class="products__item" v-for="item of props.products?.data" :key="item.id">
        <v-product class="products__item-product" :product="item"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import VProduct from "~/components/VProduct.vue";

interface IProps {
  title: string,
  text: string,
  products: {
    data: []
  }
}

const props = defineProps<IProps>()

</script>

<style lang="scss" scoped>
.products {
  padding: 0;

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    //gap: 30px;
    justify-content: space-around;
    flex-wrap: wrap;

  }


  &__item {
    flex: 0 0 100%;
    @media (min-width: $s) {
      flex: 0 0 50%;
    }
    @media (min-width: $l) {
      flex: 0 0 25%;
    }
  }

  &__item-product {
    padding: 10px;
  }

  &__text-block {
    margin-bottom: 2rem;
  }

  &__title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  &__text {
    text-align: center;
    color: $gray;
    margin-bottom: 1rem;
  }
}
</style>