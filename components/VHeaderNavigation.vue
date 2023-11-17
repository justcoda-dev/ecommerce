<template>
  <nav class="navigation" :class="{'nav-light':light}">
    <ul class="navigation__list">
      <li class="navigation__item"
          v-for="navItem of navigationWithShowTrigger"
          :key="navItem.id"
          @mouseover="onNavigationOver(navItem.id)"
          @mouseleave="onNavigationLeave(navItem.id)"
          @click="onNavigationClick(navItem.id)"
      >
        <NuxtLink :to="navItem.attributes?.path">
          {{ navItem.attributes?.name }}
        </NuxtLink>
        <!--        <ul class="navigation__deep-list" v-show="deepList && show">-->
        <!--          <li class="navigation__deep-item"-->
        <!--              v-for="{path,text, id} of deepList"-->
        <!--              :key="id">-->
        <!--            <NuxtLink v-capitalize :to="path">-->
        <!--              {{ text }}-->
        <!--            </NuxtLink>-->
        <!--          </li>-->
        <!--        </ul>-->
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import useNavigationHover from "../hooks/useNavigationHover";

interface IProps {
  data: [],
  light: boolean,
}

const props = defineProps<IProps>()


const {
  onClick: onNavigationClick,
  onOver: onNavigationOver,
  onLeave: onNavigationLeave,
  state: navigationWithShowTrigger
} = useNavigationHover(props.data)

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
    padding: 0 1.25rem 0 1.25rem;
    cursor: pointer;

    & > a {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 0.625rem;
    }

    &:first-child > a {
      color: $bannerBg;

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

.nav-light {

  a {
    color: $black;
  }

  .navigation__deep-list {
    background: $white;
  }
}
</style>