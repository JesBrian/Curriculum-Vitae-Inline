<template>
  <Icon class="base-cell special-cell-heart" type="md-heart" />
</template>

<script>
  export default {
    name: 'SpecialCellHeart',

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