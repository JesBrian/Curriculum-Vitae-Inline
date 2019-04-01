<template>
  <Icon class="base-cell" type="ios-star" />
</template>

<script>
  export default {
    name: 'SpecialCellFiveStar',

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