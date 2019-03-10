<template>
  <vue-draggable-resizable :w="cellData.conf.format.size.size[0]" :h="cellData.conf.format.size.size[1]" :minw="0" :minh="0" @dragging="onDrag" @resizing="onResize" :parent="true">
    <component :is="cellData.special ? cellData.special : 'NormalCell'"
               :data="cellData.conf" />
  </vue-draggable-resizable>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import NormalCell from '../NormalCell/NormalCell.vue'
  import SpecialCellCircle from '../SpecialCell/SpecialCellCircle.vue'
  import SpecialCellTriangle from '../SpecialCell/SpecialCellTriangle.vue'
  import SpecialCellFiveStar from '../SpecialCell/SpecialCellFiveStar.vue'
  import SpecialCellSixStar from '../SpecialCell/SpecialCellSixStar.vue'
  import SpecialCellHeart from '../SpecialCell/SpecialCellHeart.vue'

  export default {
    name: 'DraggableResizableCell',

    components: {
      VueDraggableResizable,
      NormalCell,
      SpecialCellHeart,
      SpecialCellSixStar,
      SpecialCellFiveStar,
      SpecialCellTriangle,
      SpecialCellCircle
    },

    props: {
      cellData: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    data: function () {
      return {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }
    },

    methods: {
      onResize: function (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        this.x = x
        this.y = y
      }
    }
  }
</script>

<style scoped>

</style>