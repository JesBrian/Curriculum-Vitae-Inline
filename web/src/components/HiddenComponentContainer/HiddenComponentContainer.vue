<template>
  <div id="hiddenComponentContainer"></div>
</template>

<script>
  export default {
    name: 'HiddenComponentContainer'
  }
</script>

<style lang="scss" scoped>
  #hiddenComponentContainer {
    width: 0; height: 0; top: 100%; left: 100%; position: fixed; z-index: -999;
  }
</style>