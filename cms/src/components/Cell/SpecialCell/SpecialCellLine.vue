<template>
  <div class="base-cell special-cell-line"
       :style="`width: ${data.format.size.size[0]}px; opacity: ${data.style.opacity};
                border-top: ${data.style.border[1]}px ${data.style.border[2]} ${data.style.border[3]}; `">
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellLine',

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
  .special-cell-line {
    height: 0;
  }
</style>