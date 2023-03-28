<template>
  <div class="layout">
    <v-header v-if="!headerDataPending" class="layout__header"
              v-bind="headerData?.attributes?.header"/>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "../.nuxt/imports";
import strapi from "../api/api";
import VCarousel from "../components/VCarousel";
import VHeader from "../components/VHeader";

const footerData = ref({})

const {
  data: headerData,
  pending: headerDataPending,
  error
} = useAsyncData(async () => await strapi.get("layout?populate=deep"))


</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &__header {
    z-index: 2;
  }
}

.content {
  flex: 1 0 auto;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 990px) {
    position: relative;
  }
}
</style>