<template>
  <div class="layout">
    <Layout>
      <TopNavbar />
      <Layout>
        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1">
              <Icon type="ios-navigate"></Icon>
              <span>Option 1</span>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="ios-search"></Icon>
              <span>Option 2</span>
            </MenuItem>
            <MenuItem name="1-3">
              <Icon type="ios-settings"></Icon>
              <span>Option 3</span>
            </MenuItem>
          </Menu>
          <div slot="trigger"></div>
        </Sider>

        <Content class="page-layout" style="padding:50px 20px 20px;">
          <PathNavbar />

          <Layout style="background:#fff; min-height:260px">
            <slot />
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import TopNavbar from './TopNavbar/TopNavbar.vue'
  import PathNavbar from './PathNavbar/PathNavbar.vue'

  export default {
    name: 'PageFrame',

    components: {
      TopNavbar, PathNavbar
    },

    data () {
      return {
        isCollapsed: false
      }
    },

    computed: {
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
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
    width: 0px;
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