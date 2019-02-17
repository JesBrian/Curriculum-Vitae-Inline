<template>
  <div id="hiddenComponentContainer">
    <div v-for="categoryItem in cellList" >
      <NormalCell v-for="cellItem in categoryItem.cell" />
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
    },

    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  #hiddenComponentContainer {
    width: 0; height: 0; top: 100%; left: 100%; position: fixed; z-index: -999;
  }
</style>