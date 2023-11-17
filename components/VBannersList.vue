<template>
  <ul class="banners-list" v-if="propsVerified">
    <li class="banners-list__item"
        v-for="(banner,index) of props.banner"
        :key="banner.id"
        :style="{
        'grid-column':SIZE_OPTIONS[index]['column'],
        'grid-row':SIZE_OPTIONS[index]['row']
        }"
    >
      <img class="banners-list__image"
           :src="`${apiBase}${banner.image?.data?.attributes?.url}`"
      />
      <div class="banners-list__text-block">
        <h3>{{ banner.title }}</h3>
        <p>{{ banner.text }}</p>

        <v-button-buy :type="'banner'">Shop now</v-button-buy>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>

import VButtonBuy from "~/components/UI/VButtonBuy.vue";

interface IBanner {
  id: number,
  image: object,
  text: string,
  title: string
}

const props = defineProps({
  banner: {
    type: Array as Array<IBanner>,
    required: true
  }
})

const SIZE_OPTIONS = [
  {
    column: "5/11",
    row: "1/2",
  },
  {
    column: "1/5",
    row: "1/3",
  },
  {
    column: "5/8",
    row: "2/3",
  },
  {
    column: "8/11",
    row: "2/3",
  }
]

const propsVerified = computed(() => {
  return props.banner.length === 4
})
const {apiBase} = useRuntimeConfig()

</script>

<style lang="scss" scoped>
.banners-list {
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: 50% 50%;
  height: 100vh;
  @media (max-width: $l) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__item {
    position: relative;
    height: 100%;
    min-height: 300px;
    @media (max-width: $l) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-height: 100%;
    }

  }

  &__image {
    display: block;
    object-fit: cover;
    object-position: center center;
    height: 100%;
    width: 100%;
  }

  &__text-block {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    padding: 0 40px;
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 8px;
      text-align: center;
    }

    p {
      text-align: center;
      margin-bottom: 16px;
    }

    @media (max-width: $s) {
      h3 {
        font-size: 1.8rem;
        font-weight: 700;
      }
      p {
        font-size: .9rem;
        line-height: 1.8;
      }
    }
  }
}
</style>