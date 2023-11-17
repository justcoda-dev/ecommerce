<template>
  <div class="discount-banner">
    <div class="discount-banner__image-block">
      <img
          class="discount-banner__image"
          :src="`${apiBase}${selectedProductAttributes.image?.data?.attributes?.url}`"
          alt=""
      >
    </div>
    <div class="discount-banner__text-block">
      <h3 class="discount-banner__title">{{ props.title }}</h3>
      <p class="discount-banner__valid-date">
        {{ daysFromUnix }} {{ time }}</p>
      <div class="discount-banner__product-description">
        <a href="">
          {{ selectedProductAttributes.title }}
        </a>
        <p>{{ selectedProductAttributes.price }}$</p>

      </div>
      <ul class="discount-banner__products-list">
        <li class="discount-banner__products-item"
            v-for="(product,index) of props.products?.data"
            :key="product.id"
            @click="changeProduct(index)"
            :style="[selectedProduct === index ? {'outline':'1px solid #808080'} : '']"
        >
          <img
              class="discount-banner__products-item-image"
              :src="`${apiBase}${product?.attributes?.image?.data?.attributes?.url }`"
              alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {createCountdown} from "~/functions/createCountdown";

interface IProps {
  title: string,
  products: {
    data: [any]
  },
  valid: string,
  description?: string
}

const {apiBase} = useRuntimeConfig()
const props = defineProps<IProps>()

const selectedProduct = ref(0)
const selectedProductAttributes = computed(() => props.products?.data[selectedProduct.value]?.attributes)

const [date, dataTime] = props.valid.split("Z").join("").split("T")
const differenceInTime = new Date(date).getTime() - new Date().getTime()
const differenceTimeInUnix = new Date(differenceInTime).getTime();

const daysFromUnix = computed(() => {
  const days = Math.ceil(differenceTimeInUnix / 1000 / 60 / 60 / 24);
  if (days) {
    return `${days} ${days > 10 ? "days" : "day"}`
  } else {
    return `0 days`
  }
})

const timeIntervalId = ref();
const bannerIntervalId = ref();

const currentUnixTime = ref(new Date().getTime())
const time = ref(createCountdown(currentUnixTime.value))

//events
const changeProduct = (index: number) => {
  selectedProduct.value = index
  clearTimeout(bannerIntervalId.value)
  bannerIntervalId.value = setInterval(() => {
    selectedProduct.value = selectedProduct.value < props.products.data.length - 1 ? selectedProduct.value + 1 : 0
  }, 10000)
}
//hooks
onMounted(() => {
  timeIntervalId.value = setInterval(() => {
    currentUnixTime.value += 1000
    time.value = createCountdown(currentUnixTime.value)
  }, 1000)

  bannerIntervalId.value = setInterval(() => {
    selectedProduct.value = selectedProduct.value < props.products.data.length - 1 ? selectedProduct.value + 1 : 0
  }, 10000)
})

onBeforeUnmount(() => {
  clearTimeout(timeIntervalId.value)
  clearTimeout(bannerIntervalId.value)
})


</script>

<style lang="scss" scoped>
.discount-banner {
  display: flex;

  &__image-block {
    width: 50%;
  }

  &__image {
    object-fit: cover;
    width: 100%;
    position: center;
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    color: $white;

  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.5;
  }

  &__product-description {
    font-size: 2rem;
    font-weight: 700;

    a {
    }
  }

  &__valid-date {
    font-size: 2.375rem;
    font-weight: 700;
  }

  &__products-list {
    display: flex;

  }

  &__products-item {
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;

  }

  &__products-item-image {
    object-fit: cover;
    width: 100%;
  }
}
</style>