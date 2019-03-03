<template>
  <div id="app">
    <RouterView />
    <ModalTotal v-if="$store.state.showModal !== ''" />
  </div>
</template>

<script>
  import ModalTotal from './layout/Modal/ModalTotal.vue'

  export default {
    components: {
      ModalTotal
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
    display: inline-block;
    position: absolute;
    overflow: hidden;

    &.hide {
      margin: 30px;
      position: relative;
    }
  }
</style>