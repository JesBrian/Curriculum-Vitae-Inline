<template>
  <div class="base-cell special-cell-triangle"
       :style="`border-bottom-color: ${data.style.bgColor}; opacity: ${data.style.opacity}; `">
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
      graphics: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .special-cell-triangle {
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 25px solid transparent;
  }
</style>