<template>
  <ul class="contacts-list" v-if="propsIsCome">
    <li class="contacts-list__item"
        v-for="item of props.data"
        :key="item.id"
    >
      <!--      <v-font-awesome-icon :icon="['fas', item.icon]"/>-->
      <span>
     {{ item.attributes?.contact }}
   </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface IProps {
  data: []
}

const props = defineProps<IProps>()
const propsIsCome = computed(() => props.data.length)
</script>

<style lang="scss" scoped>
.contacts-list {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  margin: 0;
  font-size: 11px;
  line-height: 1.8;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;

  &__item {
    padding: 0 0.8rem;

    & > span {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: $l) {
    flex-wrap: wrap;
    &__item {
      margin-bottom: 0.6rem;
    }
  }
  @media (max-width: $m) {
    flex-direction: column;
  }
}

</style>