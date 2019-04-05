<template>
  <Icon class="base-cell special-cell-heart" type="ios-snow" :size="data.format.size.size[0]" />
</template>

<script>
  export default {
    name: 'SpecialCellSnow',

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