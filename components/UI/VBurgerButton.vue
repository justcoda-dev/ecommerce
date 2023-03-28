<template>
  <button class="burger" @click="onClick">
    <div/>

      Menu

  </button>
</template>

<script lang="ts" setup>

const emit = defineEmits()
const state = ref(false)

const onClick = () => {
  state.value = !state.value
  emit("onBurgerToggle", state)
}
</script>

<style lang="scss" scoped>
.burger {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  cursor: pointer;
  color: #808080;

  & > div {
    width: 20px;
    background: #808080;
    height: 3px;
    position: relative;
    margin-right: 5px;

    &:before {
      display: block;
      content: "";
      background: #808080;
      height: 3px;
      position: absolute;
      width: 100%;
      top: 7px;
    }

    &:after {
      display: block;
      content: "";
      background: #808080;
      height: 3px;
      position: absolute;
      width: 100%;
      top: -7px;
    }
  }
}
</style>