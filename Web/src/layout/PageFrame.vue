<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />
    <Layout>

      <!-- 左侧菜单 -->
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <LeftNavbar :is-collapsed="isCollapsed" />
        <div slot="trigger"></div>
      </Sider>

      <Content class="page-layout" style="padding:50px 20px 20px;">
        <PathNavbar />

        <Layout style="background:#fff; min-height:260px">
          <slot />
        </Layout>
      </Content>
    </Layout>

    <Drawer title="Basic Drawer" :closable="false" v-model="showRightNavbar">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
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

  .page-layout {
    padding-top:30px;
    position:relative;
  }
</style>