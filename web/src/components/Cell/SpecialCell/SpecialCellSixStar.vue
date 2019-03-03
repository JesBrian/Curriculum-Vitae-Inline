<template>
  <div :class="['base-cell', position ? 'hide' : '']">
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
      position: {
        type: Boolean,
        default: false
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