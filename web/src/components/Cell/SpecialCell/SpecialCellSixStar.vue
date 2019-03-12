<template>
  <div class="base-cell">
    SixStar
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellSixStar',

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