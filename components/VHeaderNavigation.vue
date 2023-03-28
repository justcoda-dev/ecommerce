<template>
  <nav class="navigation">

    <ul class="navigation__list">
      <li class="navigation__item"
          v-for="{path, text, id, deepList, show} of navigationWithShowTrigger"
          :key="id"
          @mouseover="onNavigationOver(id)"
          @mouseleave="onNavigationLeave(id)"
          @click="onNavigationClick(id)"
      >
        <NuxtLink :to="path">
          {{ text }}
        </NuxtLink>
        <ul class="navigation__deep-list" v-show="deepList && show">
          <li class="navigation__deep-item"
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

const props = defineProps({
  navigationList: {
    type: Array,
    required: true,
    default: []
  }
})


const {
  onClick: onNavigationClick,
  onOver: onNavigationOver,
  onLeave: onNavigationLeave,
  state: navigationWithShowTrigger
} = useNavigationHover(props.navigationList)

const navItem = ref(null)
const deepList = ref(null)


</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__item {
    position: relative;
    padding: 0 1.25rem 1.5rem 1.25rem;
    cursor: pointer;

    & > a {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 0.625rem;
    }
  }

  &__deep-list {
    display: flex;
    flex-direction: column;
    background: $black;
    padding: 0.5rem 0;
    position: absolute;
    width: max-content;
    margin: 0.125rem 0;
    top: 2.3rem;
    left: 0;
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