<template>
  <teleport to="body" v-if="show">
    <div class="image-viewer" @click="closeViewerOut" @mouseover="addCursor">
      <button class="image-viewer__button-close" @click="closeViewer">
        close
      </button>
      <button class="image-viewer__button prev" @click="prevPicture">prev</button>
      <ul class="image-viewer__list">
        <li class="image-viewer__list-item" v-for="(image, index) of images"
            :key="index"
            v-show="index === props.shownImageIndex"
        >
          <img class="image-viewer__list-item-image" :src="image.url" alt="#">
        </li>
      </ul>
      <button class="image-viewer__button next" @click="nextPicture">next</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>


interface IProps {
  images: [{ id: number, url: string }],
  show: boolean,
  shownImageIndex: number
}

const props = defineProps<IProps>()
const emit = defineEmits()

const closeViewer = () => {
  emit("update:show", false)
}

const closeViewerOut = (e) => {
  if (e.target === e.currentTarget) {
    emit("update:show", false)
  }
}

const addCursor = (e) => {
  if (e.target === e.currentTarget) {
    e.target.style.cursor = "zoom-out"
  } else {
    e.target.style.cursor = "default"
  }
}
const nextPicture = () => {
  emit("update:shownImageIndex", props.shownImageIndex < props.images.length - 1 ? props.shownImageIndex + 1 : 0)
}

const prevPicture = () => {
  emit("update:shownImageIndex", props.shownImageIndex === 0 ? props.images.length - 1 : props.shownImageIndex - 1)
}

</script>

<style lang="scss" scoped>
.image-viewer {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background: black;
  z-index: 10;

  &__button-close {
    position: absolute;
    top: 0;
  }

  &__button {
    position: absolute;
  }

  &__list {
    margin: 0;
    padding: 0;
    height: 90%;
  }

  &__list-item {
    height: 100%;
    width: 100%;
  }

  &__list-item-image {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .prev {
    left: 20px;
  }

  .next {
    right: 20px;
  }
}
</style>