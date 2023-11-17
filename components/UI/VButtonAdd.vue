<template>
  <button class="add-button" @click="onClick">
    <slot> add to cart</slot>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits()
const onClick = () => {
  emit("click")
}
</script>

<style lang="scss" scoped>
.add-button {
  background: $black;
  border: none;
  color: $white;
  cursor: pointer;
  font-weight: 300;
  font-size: 0.8rem;
  text-transform: uppercase;
  line-height: 1.8;
  padding: 0.5rem;

  &:hover {
    background: $bannerBg;
  }
}
</style>