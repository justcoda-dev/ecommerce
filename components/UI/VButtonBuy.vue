<template>
  <button class="buy-button"
          :class="btnTypes[props.type] || 'product-type'"
          @click="onClick"
  >
    <slot>buy now</slot>
  </button>
</template>

<script lang="ts" setup>
interface IProps {
  type: "banner" | "product" | undefined
}

const props = defineProps<IProps>()

const emit = defineEmits()

const onClick = () => {
  emit("click")
}

const btnTypes = {
  banner: "banner-type",
  product: "product-type",
}

</script>

<style lang="scss" scoped>

.buy-button {
  background: $white;
  border: none;
  color: $black;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background: $bannerBg;
    color: $white;
  }
}

.banner-type {
  font-size: 0.75rem;
  padding: 8px 16px;
  line-height: 1.5;
  border-radius: 30px;
  background: $black;
  color: $white;
}

.product-type {
  font-weight: 300;
  font-size: 0.8rem;
  text-transform: uppercase;
  line-height: 1.8;
  padding: 0.5rem;
}
</style>