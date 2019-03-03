<template>
  <div :class="['base-cell', position ? 'hide' : '']">
    FiveStar
  </div>
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
      position: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>