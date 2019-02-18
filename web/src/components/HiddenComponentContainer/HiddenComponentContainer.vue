<template>
  <div id="hiddenComponentContainer">
    <div v-for="categoryItem in cellList" >
      <NormalCell v-for="cellItem in categoryItem.cell" :data="cellItem" />
    </div>
  </div>
</template>

<script>
  import NormalCell from '../Cell/NormalCell/NormalCell.vue'

  export default {
    name: 'HiddenComponentContainer',

    components: {
      NormalCell
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
    /*width: 0; height: 0; top: 100%; left: 100%; position: fixed; z-index: -999;*/
    width: 100%; height: 100%; top: 0; left: 0; position: fixed; z-index: 999; background: #FFF;
  }
</style>