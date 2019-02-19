<template>
  <div id="hiddenComponentContainer">
    <div v-for="categoryItem in cellList" >
      <NormalCell :id="`cell${cellItem._id}`" v-for="cellItem in categoryItem.cell" v-if="!cellItem.special" :data="cellItem" />
    </div>

    <SpecialCellCircle />
    <SpecialCellTriangle />
    <SpecialCellFiveStar />
    <SpecialCellSixStar />
    <SpecialCellHeart />
  </div>
</template>

<script>
  import NormalCell from '../Cell/NormalCell/NormalCell.vue'
  import SpecialCellCircle from '../Cell/SpecialCell/SpecialCellCircle.vue'
  import SpecialCellTriangle from '../Cell/SpecialCell/SpecialCellTriangle.vue'
  import SpecialCellFiveStar from '../Cell/SpecialCell/SpecialCellFiveStar.vue'
  import SpecialCellSixStar from '../Cell/SpecialCell/SpecialCellSixStar.vue'
  import SpecialCellHeart from '../Cell/SpecialCell/SpecialCellHeart.vue'

  export default {
    name: 'HiddenComponentContainer',

    components: {
      NormalCell,
      SpecialCellTriangle,
      SpecialCellCircle,
      SpecialCellFiveStar,
      SpecialCellSixStar,
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

<style lang="scss" scoped>
  #hiddenComponentContainer {
    top: 0; right: 0; position: fixed; z-index: 999;
    /*width: 100%; height: 100%; top: 0; left: 0; position: fixed; z-index: 999; background: #FFF;*/
  }
</style>