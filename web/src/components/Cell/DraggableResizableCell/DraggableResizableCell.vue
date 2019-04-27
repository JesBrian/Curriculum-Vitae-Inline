<template>
  <vue-draggable-resizable :w="cellData.conf.format.size.size[0] + 6"
                           :h="cellData.conf.format.size.size[1] + 6"
                           :x="cellData.conf.format.position.axis[0]"
                           :y="cellData.conf.format.position.axis[1]"
                           :minw="0" :minh="0" :parent="true"
                           @activated="cellActive(cellIndex)"  @deactivated="cellActive(-1)"
                           @dragging="onDrag" @resizing="onResize" >
    <div class="draggable-cell">
      <component :is="cellData.special ? cellData.special : 'NormalCell'"
                 :data="cellData.conf" />
    </div>
  </vue-draggable-resizable>
</template>

<script>
  import VueDraggableResizable from './VueDraggableResizable.vue'
  import NormalCell from '../NormalCell/NormalCell.vue'
  import SpecialCellLine from '../SpecialCell/SpecialCellLine.vue'
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
      SpecialCellLine,
      SpecialCellHeart,
      SpecialCellSnow,
      SpecialCellFiveStar,
      SpecialCellTriangle,
      SpecialCellCircle
    },

    props: {
      cellIndex: {
        type: Number,
        default: 0
      },
      cellData: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    methods: {
      cellActive (index) {
        this.$emit('cellActive', index);
      },

      onResize (x, y, w, h) {
        this.$store.commit('changeDesignConfCellResize', {
          index: this.cellIndex,
          size: [w - 6, h - 6],
          position: [x, y]
        })
      },
      onDrag (x, y) {
        this.$store.commit('changeDesignConfCellResize', {
          index: this.cellIndex,
          size: this.$store.state.designConf.cell[this.cellIndex].conf.format.size.size,
          position: [x, y]
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .draggable-cell {
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>