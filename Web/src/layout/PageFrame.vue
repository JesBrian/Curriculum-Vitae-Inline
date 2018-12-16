<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />
    <Layout>

      <!-- 左侧菜单 -->
      <Sider v-model="isCollapsed" breakpoint="md" collapsible collapsed-width="78" class="left-navbar">
        <LeftNavbar :is-collapsed="isCollapsed" />
        <div slot="trigger"></div>
      </Sider>

      <Content class="page-layout" style="padding:50px 20px 18px;">
        <PathNavbar />

        <Layout style="padding:20px; background:#EEE; overflow:auto;">
          <slot />
        </Layout>
      </Content>
    </Layout>

    <Drawer title="Basic Drawer" :closable="false" v-model="showRightNavbar">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>

    <div id="tempDragBox" style="top: 100%; left: 100%; position: fixed; z-index: -999;"></div>
  </Layout>
</template>

<script>
  import TopNavbar from './TopNavbar/TopNavbar.vue'
  import PathNavbar from './PathNavbar/PathNavbar.vue'
  import LeftNavbar from './LeftNavbar/LeftNavbar.vue'

  export default {
    name: 'PageFrame',

    components: {
      TopNavbar, PathNavbar, LeftNavbar
    },

    data () {
      return {
        isCollapsed: false,
        showRightNavbar: false
      }
    },

    methods: {
      changeRightNavbar () {
        this.showRightNavbar = !this.showRightNavbar;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .left-navbar {
    border-right:1px solid #555;
    box-shadow:0 0 18px #000;
  }

  .page-layout {
    padding-top:30px;
    position:relative;
  }
</style>