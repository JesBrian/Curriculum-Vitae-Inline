<template>
  <div ref="editContainer" class="edit-container"
       :style="`width:${$store.state.template.designConf.size[0]}px; height:${$store.state.template.designConf.size[1]}px; background: ${$store.state.template.designConf.bg};`">
    <DraggableResizableCell v-for="(cellItem, index) in $store.state.template.designConf.cell"
                            :id="`cell${cellItem._id}`" :key="`${cellItem._id}${index}`"
                            :style="$store.state.template.nowComponentIndex === index ? 'border: 1px dashed #000;' : 'border: 1px dashed transparent;'" :cellIndex="index"
                            :cell-data="cellItem" @cellActive="cellActive" />
  </div>
</template>

<script>
  import DraggableResizableCell from './Cell/DraggableResizableCell/DraggableResizableCell.vue'

  export default {
    name: 'EditContainer',

    components: {
      DraggableResizableCell
    },

    data () {
      return {
        activeIndex: -1,
        timer: null
      }
    },

    mounted () {
      this.$refs.editContainer.addEventListener('drop', (event) => {
        let cellData = JSON.parse(JSON.stringify(this.$store.state.template.dragComponent));
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
    },

    methods: {
      cellActive (index) {
        // if (this.timer) {
        //   clearTimeout(this.timer);
        // }
        // this.timer = setTimeout(() => {
        //   this.$store.commit('changeNowComponentIndex', index);
        //   clearTimeout(this.timer);
        // }, 200)
        if (index === -1) {
          return ;
        }
        this.$store.commit('changeNowComponentIndex', index);
      }
    }
  }
</script>

<style lang="less" scoped>
  .edit-container {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px #383838;
    border-radius: 3px;
  }
</style>