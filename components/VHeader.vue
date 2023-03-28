<template>
  <header class="header">
    <div class="header__contacts-background">
      <v-container>
        <v-contacts-list :contactsList="props.contacts"/>
      </v-container>
    </div>

    <div class="header__navigation-background">
      <v-container>

        <div class="header__navigation-menu">

          <div class="header__logo">
            <NuxtLink :to="props.logo?.path">
              {{ props.logo?.text }}
            </NuxtLink>
          </div>

          <v-header-navigation
              class="desktop"
              :navigationList="props.navigation"
          />

          <v-burger-button
              class="mobile"
              @onBurgerToggle="onBurgerButton"
          />
        </div>
        <v-header-mobile-navigation
            class="mobile"
            :showList="navMobileToggle"
            :navigationList="props.navigation"
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
import {Ref} from "vue";

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

const navMobileToggle = ref(false)

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
      @media screen and (min-width: 990px) {
        color: $black;

      }

      @media screen and (max-width: 990px) {
        color: $white;

      }
    }
  }

  &__navigation-background {
    @media screen and (min-width: 990px) {
      background: transparent;

    }

    @media screen and (max-width: 990px) {
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


}

.desktop {
  display: block;
  @media screen and (max-width: 990px) {
    display: none;
  }
}

.mobile {
  display: none !important;
  @media screen and (max-width: 990px) {
    display: flex !important;
  }

}
</style>