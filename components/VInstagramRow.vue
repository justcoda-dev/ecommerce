<template>
  <div class="instagram-row">
    <ul class="instagram-row__photo-list">
      <li class="instagram-row__photo-list-item"
          v-for="(photo, index) of props.photos?.data"
          :key="photo.id"
          @click="openViewer(index)"
      >

        <img class="instagram-row__photo-list-item-image" alt="#"
             :src="`${apiBase}${photo.attributes?.url}`"
        >
      </li>
    </ul>
    <v-image-view
        :images="imagesData"
        v-model:show="viewerState"
        v-model:shownImageIndex="shownImageIndex"
    />

  </div>
</template>

<script lang="ts" setup>
import VImageView from "~/components/VImageView.vue";

interface IProps {
  photos: object
}

const props = defineProps<IProps>()
const {public: {apiBase}} = useRuntimeConfig()

const viewerState = ref(false)

const shownImageIndex = ref(0)

const imagesData = computed(() => props.photos.data.map((photo) => {
  return {
    id: photo.id,
    url: `${apiBase}${photo.attributes?.url}`,
  }
}))


const openViewer = (imageIndex) => {
  viewerState.value = true
  shownImageIndex.value = imageIndex
}

</script>

<style lang="scss" scoped>
.instagram-row {

  &__photo-list {
    display: flex;
    @media (max-width: $l) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  &__photo-list-item {
    height: 270px;
    flex: 0 0 16.66667%;
    @media (max-width: $l) {
      flex: 0 0 33%;
    }
    @media (max-width: $m) {
      flex: 0 0 100%;
    }

    :hover {
      cursor: zoom-in;
    }
  }

  &__photo-list-item-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>