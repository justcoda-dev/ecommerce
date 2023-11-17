<template>
  <footer class="footer">

  </footer>
</template>

<script lang="ts" setup>
interface IProps {
  data: {}
}

const props = defineProps<IProps>()

onMounted(() => {
  console.log(props.data)
})
</script>

<style lang="scss" scoped>

</style>