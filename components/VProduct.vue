<template>
  <div class="product">
    <div class="product__image-block">
      <div class="product__image-background"/>
      <img class="product__image"
           :src="`${apiBase}${product.attributes?.image?.data?.attributes?.url}`" alt="">
      <div class="product__buttons-block">
        <v-button-add/>
        <v-button-buy/>
      </div>
    </div>
    <div class="product__text-block">
      <div class="product__text-block-rate">
        {{ product.attributes?.rate }}
      </div>
      <div class="product__text-block-title">
        {{ product.attributes?.title }}
      </div>
      <div class="product__text-block-price">
        {{ product.attributes?.price }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButtonAdd from "~/components/UI/VButtonAdd.vue";
import VButtonBuy from "~/components/UI/VButtonBuy.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }

})

const {apiBase} = useRuntimeConfig()

</script>

<style lang="scss" scoped>
.product {
  position: relative;

  &__image-block {
    width: 100%;
  }

  &__image-background {
    position: absolute;
    background: $bannerBg;
    width: 200px;
    height: 200px;
    top: 25%;
    margin: 0 auto;
    left: 0;
    right: 0;
    border-radius: 50%;
    z-index: 1;
  }

  &__image {
    //object-fit: contain;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &__buttons-block {
  }

  &__text-block {
  }

  &__text-block-rate {
  }

  &__text-block-title {
  }

  &__text-block-price {
  }
}
</style>