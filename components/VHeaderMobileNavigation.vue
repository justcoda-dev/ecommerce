<template>
  <nav v-if="props.showList" class="mobile-navigation">
    <ul class="mobile-navigation__list">
      <li class="mobile-navigation__item"
          v-for="{path, text, id, deepList, show} of navigationWithShowTrigger"
          :key="id"
          @mouseover="onNavigationOver(id)"
          @mouseleave="onNavigationLeave(id)"
          @click="onNavigationClick(id)"
      >
        <NuxtLink :to="path">
          {{ text }}
        </NuxtLink>
        <ul class="mobile-navigation__deep-list" v-if="deepList && show">
          <li class="mobile-navigation__deep-item"
              v-for="{path,text, id} of deepList"
              :key="id">
            <NuxtLink v-capitalize :to="path">
              {{ text }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import useNavigationHover from "../hooks/useNavigationHover";
import VBurgerButton from "~/components/UI/VBurgerButton.vue";
import {watchEffect} from "#imports";

const props = defineProps({
  navigationList: {
    type: Array,
    required: true,
    default: []
  },
  showList: {
    type: Boolean,
    required: true,
    default: false
  }
})

const menuToggle = ref(props.showList);

const {
  onClick: onNavigationClick,
  onOver: onNavigationOver,
  onLeave: onNavigationLeave,
  state: navigationWithShowTrigger
} = useNavigationHover(props.navigationList)

</script>

<style lang="scss" scoped>
.mobile-navigation {
  &__list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  &__item {
    position: relative;
    padding: 0.9rem 1.5rem;
    cursor: pointer;

    & > a {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 0.8rem;
      color: $notActiveWhite;
    }
  }

  &__deep-list {
    display: flex;
    flex-direction: column;
    background: $black;
    padding: 0.5rem 0;
    width: max-content;
    margin: 0.125rem 0;
    top: 3.5rem;
  }

  &__deep-item {
    padding: 0.25rem 1.5rem;
    line-height: 1.8;
    font-weight: 400;

    & > a {
      color: $white;
    }
  }
}
</style>