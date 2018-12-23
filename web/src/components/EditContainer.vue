<template>
  <Card shadow style="width:635px; position:relative;">
    <div ref="editContainer" style="width:600px; height:888px; background:lightblue;"></div>
  </Card>
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