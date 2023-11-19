<template>
  <div class="layout">
    <v-header
        class="layout__header"
        v-if="!pending"
        v-bind="data?.attributes?.header"
        :light="lightHeader"
    />
    <div class="content">
      <slot/>
    </div>
    <v-footer
        class="layout__footer"
        v-bind="data?.attributes?.footer"
    />
  </div>
</template>

<script lang="ts" setup>
import strapi from "../api/api";
import VCarousel from "~/components/VCarousel";
import VHeader from "~/components/VHeader";
import VFooter from "~/components/VFooter.vue";

const lightHeader = ref(false)

const {
  data,
  pending,
  error
} = useAsyncData(async () => await strapi.get("layout?populate=deep"))


const setHeaderThem = () => {
  const scrollHeight = 300
  if (scrollHeight < window.scrollY) {
    lightHeader.value = true
  } else {
    lightHeader.value = false
  }
}

onMounted(() => {
  document.addEventListener("scroll", setHeaderThem)
})

onBeforeUnmount(() => {
  document.removeEventListener("scroll", setHeaderThem)
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

  &__footer {

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