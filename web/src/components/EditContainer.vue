<template>
  <div ref="editContainer" style="padding:1px; border:1px dashed #666;">
    <div style="width:1600px; height:800px; margin:0 auto; overflow:hidden; background:lightblue;"></div>
  </div>
</template>

<script>
  export default {
    name: 'EditContainer',

    mounted () {
      this.$refs.editContainer.addEventListener('drop', (event) => {
        // let tempCellDom = document.querySelector('#tempCellComponent');
        // tempCellDom.removeAttribute('id');
        // event.target.appendChild(tempCellDom);
      });
      this.$refs.editContainer.addEventListener('dragover', (event) => {
        event.preventDefault();
      });
    },

    beforeDestroy () {
      this.$refs.editContainer.removeEventListener('drop');
      this.$refs.editContainer.addEventListener('dragover');
    }
  }
</script>

<style lang="scss" scoped>

</style>