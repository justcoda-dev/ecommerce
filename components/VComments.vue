<template>
  <div class="comments">
    <h3 class="comments__title">
      Our satisfied customer says
    </h3>
    <div class="comments__list-wrapper"
         ref="commentsListWrapper"
    >
      <ul class="comments__list"
          ref="commentsList"
      >
        <li class="comments__list-item"
            v-for="(comment, index) of comments?.data"
            :key="comment.id"
            v-visible="index === shownComment"
        >
          <div class="comments__user-card">
            <img class="comments__user-card-icon"
                 :src="`${apiBase}${comment.attributes?.web_user?.data?.attributes?.icon?.data?.attributes?.url}`"
                 alt="#">
          </div>
          <p class="comments__user-card-text">
            {{ comment.attributes.text }}
          </p>
          <h4 class="comments__user-card-name">
            {{ comment.attributes?.web_user?.data?.attributes?.name }}
            {{ comment.attributes?.web_user?.data?.attributes?.surname }}
          </h4>
        </li>
      </ul>
      <ul class="comments__changer-dots">
        <li class="comments__changer-dot"
            v-for="(comment, index) of comments?.data"
            :key="comment.id"
            :class="{'active-dot':shownComment === index}"
            @click="onClickComment(index)"
        />
      </ul>
    </div>
  </div>

</template>

<script lang="ts" setup>
interface IProps {
  comments: {
    data: []
  }
}

const props = defineProps<IProps>()
const {public: {apiBase}} = useRuntimeConfig()

const shownComment = ref(0)
const activeDot = ref(0)
const changeCommentIntervalId = ref(null)
const commentsList = ref()
const commentItems = ref()
const commentsListWrapper = ref()

const onClickComment = (index: number) => {
  shownComment.value = index

}
const changeComment = () => {
  shownComment.value = shownComment.value < props.comments?.data?.length - 1 ? shownComment.value += 1 : shownComment.value = 0
}
watch(shownComment, (curr) => {
  const paddingRight = 30;
  const wrapperWidth = commentsListWrapper.value.offsetWidth
  const length = curr ? curr * (wrapperWidth + paddingRight) : curr
  commentsList.value.style.transform = `translate3d(-${length}px,0px, 0px)`
})

onMounted(() => {
  // changeCommentIntervalId.value = setInterval(() => {
  //   changeComment()
  // }, 10000)
  const width = commentsListWrapper.value.offsetWidth
  for (const li of commentsList.value.children) {
    li.style.flex = `0 0 ${width}px`
  }
})

</script>

<style lang="scss" scoped>
.comments {
  &__title {
    font-size: 2.5rem;
    font-weight: 600;
    color: $black;
    line-height: 1.5;
    margin: 0 0 1.5rem;
  }

  &__list-wrapper {
    overflow: hidden;
  }

  &__list {
    display: flex;
    box-sizing: border-box;
    transition: all 0.25s ease 0s;
  }

  &__list-item {
    position: relative;
    margin-right: 30px;
    overflow: hidden;
    box-sizing: border-box;
  }

  &__user-card {
    font-weight: 600;
    font-size: 1.1rem;
  }

  &__user-card-icon {
    object-fit: cover;
    object-position: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  &__user-card-name {
    font-weight: 600;
    font-size: 1.1rem;
    color: $bannerBg;
  }

  &__user-card-text {
    color: $darkGray;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 1px solid #e6e6e6;
    line-height: 1.8;
    font-weight: 400;
    font-size: 1.1rem;
    box-sizing: border-box;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &__changer-dots {
    display: flex;
  }

  &__changer-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $gray;
    margin: 0 5px;
    cursor: pointer;
  }
}

.active-dot {
  background: $bannerBg;
}
</style>