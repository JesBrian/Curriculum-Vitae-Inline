<template>
  <div id="app">

    <PageFrame>
      <RouterView />
    </PageFrame>

  </div>
</template>

<script>
  import PageFrame from './layout/PageFrame.vue'

  export default {
    components: {
      PageFrame
    }
  }
</script>

<style lang="scss">
  html, body, #app, .layout, .ivu-layout {
    width:100%;
    height:100%;
  }

  .ivu-layout-sider-zero-width-trigger {
    z-index:9;
  }
</style>