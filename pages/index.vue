<template>
  <div class="page" v-if="!pending">
    <v-section class="banner">
      <v-container>
        <v-carousel :list="homePage?.carousel"/>
      </v-container>
    </v-section>
    <v-section class="services">
      <v-container>
        <v-services :list="homePage?.service"/>
      </v-container>
    </v-section>
    <v-section class="products">
      <v-container>
        <v-products v-bind="homePage?.productList"/>
      </v-container>
    </v-section>
  </div>
</template>

<script lang="ts" setup>
import api from "../api/api";
import VCarousel from "~/components/VCarousel.vue";
import VServices from "~/components/VServices.vue";
import VSection from "~/components/UI/VSection.vue";
import VContainer from "~/components/UI/VContainer.vue";
import VProducts from "~/components/VProducts.vue";

const {
  data,
  pending
} = useAsyncData(async () => await api.get("home-page?populate=deep"))

const homePage = computed(() => data.value?.attributes)
console.log(homePage.value)
</script>

<style lang="scss" scoped>
.page {
}

// sections
.banner {
  background: $bannerBg;
}

.services {
  background: $white;
}

.products {
  background: $darkWhite;
}
</style>