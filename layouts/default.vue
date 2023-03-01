<template>
  <div class="layout">
    <v-header class="layout__header" v-bind="headerData"/>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {onBeforeMount} from "../.nuxt/imports";
import {ref} from "../.nuxt/imports";
import strapi from "../api/api";
import VCarousel from "../components/VCarousel";
import VHeader from "../components/VHeader";


const headerData = ref({})
const footerData = ref({})

onBeforeMount(async () => {
  try {
    const response = await strapi.get("layout?populate=deep")
    headerData.value = response.attributes?.header
  } catch (e) {
    console.error("error in default layout request", e)
  }

})

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
}
</style>