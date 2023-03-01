<template>
  <div class="page">
    <v-section class="banner">
      <v-container>
        <v-carousel :list="data.carousel"/>
      </v-container>
    </v-section>
    <v-section class="services">
      <v-container>
        <v-service v-for="item of service" :service="item"/>
      </v-container>
    </v-section>
  </div>
</template>

<script lang="ts" setup>
import api from "../api/api";
import VCarousel from "/components/VCarousel.vue";
import VService from "~/components/VService.vue";
import VSection from "~/components/UI/VSection.vue";
import VContainer from "~/components/UI/VContainer.vue";

const data = ref({})

onBeforeMount(async () => {
  try {
    const response = await api.get("home-page?populate=deep")
    data.value = response.attributes
    console.log(data.value.carousel)
  } catch (e) {
    console.error("error in main page request", e)
  }

})
</script>

<style lang="scss" scoped>
.page {
}

.banner {
  background: $bannerBg;
}

.services {
}
</style>