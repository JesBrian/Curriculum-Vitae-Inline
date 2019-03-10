<template>
  <div ref="editContainer" :style="`width:${$store.state.designConf.size[0]}px; height:${$store.state.designConf.size[1]}px;`" style="margin:0 auto; display:inline-block; position: relative; overflow:hidden; box-shadow:0 0 6px #383838; border-radius:3px; background:lightblue;">
    <DraggableResizableCell v-for="cellItem in $store.state.designConf.cell"
                            :id="`cell${cellItem._id}`"
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
        this.$store.commit('changeDesignConfCell', {
          op: 'add',
          cell: this.$store.state.dragComponent
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

</style>