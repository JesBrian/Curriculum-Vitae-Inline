<template>
  <div id="app">
    <RouterView />
    <ModalTotal v-if="$store.state.showModal !== ''" />
    <TipsProcess v-if="$store.state.showTips" />
  </div>
</template>

<script>
  import ModalTotal from './layout/Modal/ModalTotal.vue'
  import TipsProcess from './layout/Tips/TipsProcess.vue'

  export default {
    components: {
      ModalTotal, TipsProcess
    },

    created () {
      this.$localForage.getItem('userInfo', (err, val) => {
        if (val) {
          this.$store.commit('changeUserInfo', val);
        }
      });
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

  .base-cell {
    position: absolute;
  }
</style>