<template>
  <Icon class="base-cell" type="ios-star" :size="data.format.size.size[0]" :color="data.input.color" />
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