<template>
  <div class="page" v-if="!pending">
    <v-section class="banner-section">
      <v-container>
        <v-carousel :list="data.attributes?.carousel"/>
      </v-container>
    </v-section>
    <v-section class="services-section">
      <v-container>
        <v-services :list="data.attributes?.service"/>
      </v-container>
    </v-section>
    <v-section class="products-section">
      <v-container>
        <v-products v-bind="data.attributes?.productList"/>
      </v-container>
    </v-section>
    <v-section class="banners-section">
      <v-container>
        <v-banners-list v-bind="data.attributes?.bannersList"/>
      </v-container>
    </v-section>
    <v-section class="discount-section">
      <v-container>
        <v-discount-banner v-bind="data.attributes?.discountBanner"/>
      </v-container>
    </v-section>
    <v-section class="testimonials-section">
      <v-container>
        <v-testimonials v-bind="data.attributes?.testimonials"/>
      </v-container>
    </v-section>
    <v-section class="instagram-row-section">
      <v-container>
        <h2 class="instagram-row-section__title">
          {{ data.attributes?.instagram_row?.title?.text }}
        </h2>
        <p class="instagram-row-section__text">
          {{ data.attributes?.instagram_row?.description?.text }}
        </p>
      </v-container>
      <v-instagram-row v-bind="data.attributes?.instagram_row"/>
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
import VBannersList from "~/components/VBannersList.vue";
import VDiscountBanner from "~/components/VDiscountBanner.vue";
import VTestimonials from "~/components/VTestimonials.vue";
import VInstagramRow from "~/components/VInstagramRow.vue";

//
interface IHomePage {
  data: {
    attributes: any
  },
}

const {
  data,
  pending,
  refresh
} = useAsyncData<IHomePage>(async () => await api.get("home-page?populate=deep"))

</script>

<style lang="scss" scoped>
.page {
}

// sections
.banner-section {
  background: $bannerBg;
}

.services-section {
  background: $white;
}

.products-section {
  background: $darkWhite;
  padding: 5rem 0;
}

.products-section {

}

.discount-section {
  background: $bannerBg;
}

.testimonials-section {
  padding: 105px 0;
}

.instagram-row-section {
  &__title {
    font-size: 2.5rem;
    margin-bottom: 24px;
    text-align: center;
    line-height: 1.5;
    font-weight: 600;
  }

  &__text {
    margin-bottom: 16px;
    text-align: center;
    color: $gray;
  }
}
</style>