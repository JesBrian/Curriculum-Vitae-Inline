<template>
  <div id="app">
    <PageFrame>
      <RouterView />
    </PageFrame>

    <TempShow v-if="$store.state.showTemp" />
    <ModalFrame v-if="$store.state.showModal" />
    <TipsProcess v-if="$store.state.showTips" />
  </div>
</template>

<script>
  import PageFrame from './layout/PageFrame.vue'
  import TempShow from './layout/TempShow.vue'
  import ModalFrame from './components/Modal/ModalFrame.vue'
  import TipsProcess from './components/Tips/TipsProcess.vue'

  export default {
    components: {
      PageFrame, TempShow, ModalFrame, TipsProcess
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