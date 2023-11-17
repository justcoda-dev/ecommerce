<template>
  <div class="product" @mouseover="showBackgroundCircle" @mouseleave="hideBackgroundCircle">
    <div class="product__image-block">
      <div :class="{hoverCircle:showMenu}"/>
      <img class="product__image"
           :src="`${apiBase}${product.attributes?.image?.data?.attributes?.url}`"
           alt="#000"
           loading="lazy"
      />
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
const showMenu = ref(false)

const showBackgroundCircle = () => {
  showMenu.value = true
}
const hideBackgroundCircle = () => {
  showMenu.value = false
}

</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  flex-direction: column;

  &__image-block {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: radial-gradient($white 50px, $productBackground);
  }

  .hoverCircle {
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
    max-width: 100%;
    position: relative;
    z-index: 2;
    transition: 1s;
    object-fit: cover !important;
    transform: scale(0.8);

    &:hover {
      transform: scale(1);
    }
  }

  &__buttons-block {
    padding: 1rem 0;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 5;
  }

  &__text-block {
    background: $white;
    padding: 1rem 1rem 1.5rem 1rem;
    margin-top: auto;
  }

  &__text-block-rate {
  }

  &__text-block-title {
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.5;
  }

  &__text-block-price {
  }
}
</style>