<template>
  <section ref="section" class="section">
    <slot/>
  </section>
</template>

<script lang="ts" setup>
const section = ref({})

onMounted(() => {
  const observer = new IntersectionObserver((elemets) => {
    elemets.forEach(section => {
      if (section.isIntersecting) {
      } else {
      }
    })
  })
  observer.observe(section.value)
})

</script>

<style lang="scss" scoped>
.section {

}
</style>