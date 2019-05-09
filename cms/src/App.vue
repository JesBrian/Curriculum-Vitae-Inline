<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app, .layout, .ivu-layout {
  .size;
}

.ivu-layout-sider-zero-width-trigger {
  z-index:9;
}

.base-cell {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
</style>
