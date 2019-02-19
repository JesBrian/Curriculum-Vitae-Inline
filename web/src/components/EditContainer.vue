<template>
  <div ref="editContainer" :style="`width:${$store.state.designConf.size[0]}px; height:${$store.state.designConf.size[1]}px;`" style="position: relative; overflow:hidden; background:lightblue;">
  </div>
</template>

<script>
  export default {
    name: 'EditContainer',

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