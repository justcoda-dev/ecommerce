<template>
  <button @click="onClick" class="discover-button">
    <NuxtLink :to="props.path" :style="{fontSize:sizes[props.size]}">
      {{ props.text }}
    </NuxtLink>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: "discover button"
  },
  size: {
    type: String,
    required: false,
    default: "small"
  },
  path: {
    type: String,
    required: false,
    default: ""
  }
})

const sizes = {
  small: "0.94rem",
  large: "1.44rem"
}

const emit = defineEmits()
const onClick = () => {
  emit("onButtonDiscover")
}

</script>

<style lang="scss" scoped>
.discover-button {
  background: #c2a942;
  border: none;
  font-size: 1.4375rem;
  line-height: 1.8;
  font-weight: 400;

  & > a {
    color: $white;
    padding: 10px 20px;
  }
}
</style>