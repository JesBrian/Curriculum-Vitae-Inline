<template>
  <div :class="['base-cell', position ? 'hide' : '']">
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
      position: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>