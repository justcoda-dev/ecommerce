<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  margin: auto;
  //
  @media screen and (min-width: 992px) {
    max-width: 1110px;
    margin: 0 auto;
  }

  //@media (min-width: 768px) {
  //}
  //
  //@media (min-width: 576px) {
  //}
  //
  //@media (min-width: 900px) {
  //}
}

</style>
