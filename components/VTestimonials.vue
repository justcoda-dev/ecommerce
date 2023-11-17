<template>
  <div class="testimonials">
    <v-advantages class="testimonials__advantages" v-bind="advantageBlock"/>
    <v-comments class="testimonials__comments" v-bind="commentsBlock"/>
  </div>
</template>

<script lang="ts" setup>
import VComments from "~/components/VComments.vue";
import VAdvantages from "~/components/VAdvantages.vue";

interface IProps {
  commentsBlock: {},
  advantageBlock: {}
}

const props = defineProps<IProps>()
const {public: {apiBase}} = useRuntimeConfig()

</script>

<style lang="scss" scoped>
.testimonials {
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: $l) {
    grid-template-columns: 100%;
  }

  &__advantages {
    margin: 0 15px;
  }

  &__comments {
    margin: 0 15px;
  }
}
</style>