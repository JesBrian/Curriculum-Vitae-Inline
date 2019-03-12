<template>
  <div class="base-cell">
    Triangle
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellTriangle',

    props: {
      data: {
        type: Object,
        default: () => {
          return null
        }
      },
      graphics: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>