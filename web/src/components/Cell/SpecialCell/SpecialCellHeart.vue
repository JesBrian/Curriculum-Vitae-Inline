<template>
  <div :class="['base-cell', position ? 'hide' : '']">
    Heart
  </div>
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