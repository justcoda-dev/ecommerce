<template>
  <header class="header" :class="{light}">
    <div class="header__contacts-background" v-if="!light">
      <v-container>
        <v-contacts-list v-bind="props?.contacts"/>
      </v-container>
    </div>

    <div class="header__navigation-background">
      <v-container>
        <div class="header__navigation-menu">
          <div class="header__logo">
            <NuxtLink :to="props.logo?.path" @click="homeClick(props.logo?.path)">
              {{ props.logo?.text }}
            </NuxtLink>
          </div>

          <v-header-navigation
              class="desktop"
              :light="light"
              v-bind="props.navigations"
          />

          <v-burger-button
              class="mobile"
              @onBurgerToggle="onBurgerButton"
          />
        </div>

        <v-header-mobile-navigation
            class="mobile-menu"
            :light="light"
            :showList="navMobileToggle"
            v-bind="props.navigations"
        />
      </v-container>
    </div>

  </header>
</template>

<script lang="ts" setup>
import VContainer from "~/components/UI/VContainer";
import VHeaderNavigation from "~/components/VHeaderNavigation.vue";
import VContactsList from "~/components/UI/VContactsList.vue";
import VBurgerButton from "~/components/UI/VBurgerButton";
import VHeaderMobileNavigation from "~/components/VHeaderMobileNavigation.vue";

interface IProps {
  contacts: {},
  logo: {},
  navigations: {},
  light: boolean
}

const props = defineProps<IProps>()

const navMobileToggle = ref(false)
const router = useRouter()

const homeClick = (src: string) => {
  router.push({path: src})
}

const onBurgerButton = (event: Ref) => {
  navMobileToggle.value = event.value
}

</script>

<style lang="scss" scoped>
.header {
  &__contacts-background {
    color: $white;
    background: $black;
  }


  &__logo {
    font-weight: 800;
    font-size: 1.25rem;
    padding: 0.3rem 0;
    margin-right: 1rem;

    & > a {
      @media (min-width: $l) {
        color: $black;

      }

      @media (max-width: $l) {
        color: $white;

      }
    }
  }

  &__navigation-background {
    @media screen and (min-width: $l) {
      background: transparent;

    }

    @media screen and (max-width: $l) {
      background: $black;

    }
  }

  &__navigation-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 0.6rem 0.9rem;
  }


  .desktop {
    display: block;
    @media (max-width: $l) {
      display: none;
    }
  }

  .mobile {
    display: none !important;
    @media (max-width: $l) {
      display: flex !important;

    }

  }

  .mobile-menu {
    display: none !important;
    @media (max-width: $l) {
      display: flex !important;

    }
  }
}


.light {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px #878787;

  .header__navigation-background {
    background: $white;
  }

  .header__logo {
    & > a {
      color: $black;
    }
  }
}
</style>