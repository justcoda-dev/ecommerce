<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.container {
  padding: 0 15px;
  margin: auto;
  //

  @media (min-width: $s) {
  }

  @media (min-width: $m) {
    margin: 0 75px;
  }
  @media (min-width: $l) {
    max-width: 1110px;
    margin: auto;
  }
  //
  //
  //@media (min-width: 900px) {
  //}
}

</style>
