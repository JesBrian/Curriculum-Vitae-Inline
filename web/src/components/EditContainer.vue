<template>
  <div ref="editContainer" class="edit-container"
       :style="`width:${$store.state.designConf.size[0]}px; height:${$store.state.designConf.size[1]}px; background: ${$store.state.designConf.bg};`">
    <DraggableResizableCell v-for="(cellItem, index) in $store.state.designConf.cell"
                            :id="`cell${cellItem._id}`"
                            :key="`${cellItem._id}${index}`"
                            :cell-data="cellItem" />
  </div>
</template>

<script>
  import DraggableResizableCell from './Cell/DraggableResizableCell/DraggableResizableCell.vue'

  export default {
    name: 'EditContainer',

    components: {
      DraggableResizableCell
    },

    mounted () {
      this.$refs.editContainer.addEventListener('drop', (event) => {
        let cellData = JSON.parse(JSON.stringify(this.$store.state.dragComponent));
        const size = cellData.conf.format.size.size;
        cellData.conf.format.position.axis = [event.offsetX - size[0] / 2, event.offsetY - size[1] / 2];
        this.$store.commit('changeDesignConfCell', {
          op: 'add',
          cell: cellData
        });
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
  .edit-container {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px #383838;
    border-radius: 3px;
  }
</style>