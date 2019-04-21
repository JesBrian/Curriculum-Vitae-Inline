<template>
  <div class="base-cell special-cell-circle"
       :style="`width: ${data.format.size.size[0]}px; height: ${data.format.size.size[1]}px;
                border: ${data.style.border[1]}px ${data.style.border[2]} ${data.style.border[3]};
                background: ${data.style.bgColor}; opacity: ${data.style.opacity};
                box-shadow: 0 0 ${data.style.shadow[1]} ${data.style.shadow[2]}; `">
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellCircle',

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
  .special-cell-circle {
    border-radius: 50%;
  }
</style>