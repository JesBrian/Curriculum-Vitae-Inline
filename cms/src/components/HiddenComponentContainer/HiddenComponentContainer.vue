<template>
  <div id="hiddenComponentContainer">
    <template v-for="categoryItem in cellList" >
      <template v-for="cellItem in categoryItem.cell">
        <component :is="cellItem.special ? cellItem.special : 'NormalCell'"
                   :id="`cell${cellItem._id}`"
                   :data="cellItem.conf"
                   :position="true"
        />
      </template>
    </template>
  </div>
</template>

<script>
  import NormalCell from '../Cell/NormalCell/NormalCell.vue'
  import SpecialCellLine from '../Cell/SpecialCell/SpecialCellLine.vue'
  import SpecialCellCircle from '../Cell/SpecialCell/SpecialCellCircle.vue'
  import SpecialCellTriangle from '../Cell/SpecialCell/SpecialCellTriangle.vue'
  import SpecialCellFiveStar from '../Cell/SpecialCell/SpecialCellFiveStar.vue'
  import SpecialCellSnow from '../Cell/SpecialCell/SpecialCellSnow.vue'
  import SpecialCellHeart from '../Cell/SpecialCell/SpecialCellHeart.vue'

  export default {
    name: 'HiddenComponentContainer',

    components: {
      NormalCell,
      SpecialCellLine,
      SpecialCellTriangle,
      SpecialCellCircle,
      SpecialCellFiveStar,
      SpecialCellSnow,
      SpecialCellHeart,
    },

    props: {
      cellList: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #hiddenComponentContainer {
    /*width:100%; height:100%; top: 0; right: 0; position: fixed; z-index: 999; background: lightgreen;*/
    top: 100%; left: 100%; position: fixed; z-index: -999;
}
</style>