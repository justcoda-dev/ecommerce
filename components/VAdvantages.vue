<template>
  <div class="advantages">
    <ul class="advantages__list">
      <li class="advantages__list-item"
          v-for="advantage of props.advantages?.data"
          :key="advantage.id"
          :style="{background:advantage.attributes?.background_color?.data?.attributes?.rgb_collor_model}"
      >
        <img class="advantages__list-item-icon"
             :src="`${apiBase}${advantage.attributes?.icon?.data?.attributes?.url}`" alt="#">
        <div class="advantages__list-item-text">
          <h5 class="advantages__list-item-title"
              :style="{color:advantage.attributes?.title?.color?.data?.attributes?.rgb_collor_model}"
          >
            {{ advantage.attributes?.title?.text }}
          </h5>
          <p class="advantages__list-item-description"
             :style="{color:advantage.attributes?.description?.color?.data?.attributes?.rgb_collor_model}"
          >
            {{ advantage.attributes?.description?.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  advantages: {
    data: []
  }
}

const {public: {apiBase}} = useRuntimeConfig();
const props = defineProps<IProps>()

onMounted(() => {
})
</script>

<style lang="scss" scoped>
.advantages {
  &__list {
  }

  &__list-item {
    display: flex;
    padding: 24px;
  }

  &__list-item-icon {
    width: 74px;
    height: 74px;
  }

  &__list-item-text {
    margin: 0 0 0 30px;
  }

  &__list-item-title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: $black;
    margin: 0 0 0.5rem;
  }

  &__list-item-description {
    box-sizing: border-box;
    margin: 0;
    font-size: 1rem;
    color: $gray;
    font-weight: 400;
    line-height: 1.8;
    white-space: normal;
    word-wrap: break-word;
  }
}
</style>