<template>
  <div class="base-cell special-cell-upload"
       :style="`width: ${data.format.size.size[0]}px; height: ${data.format.size.size[1]}px;
                border: ${data.style.border[1]}px ${data.style.border[2]} ${data.style.border[3]};
                box-shadow: 0 0 ${data.style.shadow[1]}px ${data.style.shadow[2]};
                background: ${data.style.bgColor}; opacity: ${data.style.opacity};
                border-radius: ${data.style.radius[1]}px; `">
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellUpload',

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