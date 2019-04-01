<template>
  <vue-draggable-resizable :w="cellData.conf.format.size.size[0] + 6"
                           :h="cellData.conf.format.size.size[1] + 6"
                           :x="cellData.conf.format.position.axis[0]"
                           :y="cellData.conf.format.position.axis[1]"
                           :minw="0" :minh="0" :parent="true"
                           @dragging="onDrag" @resizing="onResize" >
    <div class="draggable-cell">
      <component :is="cellData.special ? cellData.special : 'NormalCell'"
                 :data="cellData.conf" />
    </div>
  </vue-draggable-resizable>
</template>

<script>
  import VueDraggableResizable from 'vue-draggable-resizable'
  import NormalCell from '../NormalCell/NormalCell.vue'
  import SpecialCellCircle from '../SpecialCell/SpecialCellCircle.vue'
  import SpecialCellTriangle from '../SpecialCell/SpecialCellTriangle.vue'
  import SpecialCellFiveStar from '../SpecialCell/SpecialCellFiveStar.vue'
  import SpecialCellSnow from '../SpecialCell/SpecialCellSnow.vue'
  import SpecialCellHeart from '../SpecialCell/SpecialCellHeart.vue'

  export default {
    name: 'DraggableResizableCell',

    components: {
      VueDraggableResizable,
      NormalCell,
      SpecialCellHeart,
      SpecialCellSnow,
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

<style lang="scss" scoped>
  .draggable-cell {
    margin: 3px;
    box-sizing: border-box;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }
</style>