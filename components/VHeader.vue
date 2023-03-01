<template>
  <header class="header">
    <div class="header__contacts">
      <v-container>
        <ul class="header__contacts-list">
          <li class="header__contacts-item"
              v-for="{text,id} of contactsList"
              :key="id"
          >
            <img src="" alt="">
            <span>
              {{ text }}
            </span>
          </li>
        </ul>
      </v-container>
    </div>
    <v-container>
      <div class="header__navigation-menu">

        <div class="header__logo">
          <NuxtLink :to="logoProps?.path">
            {{ logoProps?.text }}
          </NuxtLink>
        </div>

        <nav class="header__navigation">
          <ul class="header__navigation-list">
            <li class="header__navigation-item"
                v-for="{path, text, id, deepList, show} of navigationWithShowTrigger"
                :key="id"
                @mouseover="onNavigationOver(id)"
                @mouseleave="onNavigationLeave(id)"
                @click="onNavigationClick(id)"
            >
              <NuxtLink :to="path">
                {{ text }}
              </NuxtLink>
              <ul class="header__deep-navigation-list" v-if="deepList && show">
                <li class="header__deep-navigation-item"
                    v-for="{path,text, id} of deepList"
                    :key="id">
                  <NuxtLink :to="path">
                    {{ text }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </v-container>

  </header>
</template>

<script lang="ts" setup>
import useNavigationHover from "../hooks/useNavigationHover";
import VContainer from "/components/UI/VContainer";

const props = defineProps({
  contacts: {
    type: Array,
    required: false
  },
  logo: {
    type: Object,
    required: false
  },
  navigation: {
    type: Array,
    required: false
  }
})

const {navigation: navigationList, logo: logoProps, contacts: contactsList} = toRefs(props)

const {
  onClick: onNavigationClick,
  onOver: onNavigationOver,
  onLeave: onNavigationLeave,
  state: navigationWithShowTrigger
} = useNavigationHover(navigationList)


</script>

<style lang="scss" scoped>
.header {
  a {
    text-decoration: none;
    color: $black;
  }

  ul {
    list-style: none;
  }

  &__contacts {
    color: $white;
    background: $black;
  }

  &__contacts-list {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    margin: 0;
    font-size: 11px;
    line-height: 1.8;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
  }

  &__contacts-item {
    & > img {
    }

    & > span {
    }
  }

  &__logo {

  }

  &__navigation-menu {
    display: flex;
    justify-content: space-between;
    background: transparent;
  }

  &__navigation {
  }

  &__navigation-list {
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__navigation-item {
    position: relative;
    padding: 1.3rem 1.5rem;
    cursor: pointer;

    & > a {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 400;
      font-size: 0.625rem;
    }
  }

  &__deep-navigation-list {
    display: flex;
    flex-direction: column;
    background: $black;
    padding: 0.5rem 0;
    position: absolute;
    width: max-content;
  }

  &__deep-navigation-item {
    padding: 0.25rem 1.5rem;

    & > a {
      color: $white;
    }
  }
}

</style>