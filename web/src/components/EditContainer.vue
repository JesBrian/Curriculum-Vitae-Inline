<template>
  <div ref="editContainer" :style="`width:${$store.state.designConf.size[0]}px; height:${$store.state.designConf.size[1]}px;`" style="position: relative; overflow:hidden; background:lightblue;">
  </div>
</template>

<script>
  import NormalCell from './Cell/NormalCell/NormalCell.vue'
  import SpecialCellCircle from './Cell/SpecialCell/SpecialCellCircle.vue'
  import SpecialCellTriangle from './Cell/SpecialCell/SpecialCellTriangle.vue'
  import SpecialCellFiveStar from './Cell/SpecialCell/SpecialCellFiveStar.vue'
  import SpecialCellSixStar from './Cell/SpecialCell/SpecialCellSixStar.vue'
  import SpecialCellHeart from './Cell/SpecialCell/SpecialCellHeart.vue'

  export default {
    name: 'EditContainer',

    components: {
      NormalCell,
      SpecialCellHeart,
      SpecialCellSixStar,
      SpecialCellFiveStar,
      SpecialCellTriangle,
      SpecialCellCircle
    },

    mounted () {
      this.$refs.editContainer.addEventListener('drop', (event) => {
        let tempCellDom = document.querySelector('#nowNewDrag');
        tempCellDom.removeAttribute('id');
        event.target.appendChild(tempCellDom);
      });
      this.$refs.editContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
    },

    beforeDestroy () {
      this.$refs.editContainer.removeEventListener('drop', null);
      this.$refs.editContainer.addEventListener('dragover', null);
    }
  }
</script>

<style lang="scss" scoped>

</style>