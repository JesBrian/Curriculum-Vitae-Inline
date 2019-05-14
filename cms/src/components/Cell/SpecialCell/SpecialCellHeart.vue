<template>
  <Icon class="base-cell special-cell-heart" type="md-heart" :size="data.format.size.size[0]" :color="data.input.color" />
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

<style lang="less" scoped>

</style>