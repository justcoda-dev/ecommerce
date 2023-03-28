<template>
  <ul class="contacts-list">
    <li class="contacts-list__item"
        v-for="item of props.contactsList"
        :key="item.id"
    >
      <!--      <v-font-awesome-icon :icon="['fas', item.icon]"/>-->
      <span>
     {{ item.text }}
   </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
  contactsList: {
    type: Array,
    required: true,
  }
})
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

  @media screen and (max-width: 990px) {
    flex-wrap: wrap;
    &__item {
      margin-bottom: 0.6rem;
    }
  }
  @media screen and (max-width: 776px) {
    flex-direction: column;
  }
}

</style>