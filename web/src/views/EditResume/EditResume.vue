<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />
    <Layout>

      <!-- 左侧菜单 -->
      <Sider v-model="isCollapsed" breakpoint="md" collapsible collapsed-width="78" class="left-navbar">
        <LeftNavbar :is-collapsed="isCollapsed" />
      </Sider>

      <Content class="page-layout" style="padding:50px 20px 18px;">
        <PathNavbar />

        <Layout style="width:100%; height:100%; padding:13px; box-sizing:border-box; border-radius:3px; box-shadow: 0 1px 10px -1px #282828;">
          <div style="width:97%; height:38px; margin:6px auto 0;">
            <Button @click="changeZoomRate(false)" icon="md-remove" type="info" shape="circle" size="small" ghost style="float:left;"></Button>
            <div style="width:200px; display:inline-block;">
              <Slider v-model="zoomRate" show-input></Slider>
            </div>
            <Button @click="changeZoomRate(false, 0, true)" icon="md-list" type="info" size="small" ghost style="margin:0 0 0 12px; float:right;">重置</Button>
            <Button @click="changeZoomRate(true)" icon="md-add" type="info" shape="circle" size="small" ghost style="float:right;"></Button>
          </div>

          <div style="width:100%; height:100%; padding:6px; box-sizing:border-box; overflow:auto; text-align:center; ">
            <div style="margin:0 auto; display:inline-block; box-shadow:0 0 6px #383838; border-radius:3px;">
              <EditContainer :style="`zoom:${(zoomRate + 30) * 1.25}%`" />
            </div>
          </div>
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
  import LeftNavbar from './LeftNavbar/LeftNavbar.vue'
  import PathNavbar from './PathNavbar/PathNavbar.vue'
  import EditContainer from '../../components/EditContainer.vue'

  export default {
    name: 'EditResume',

    components: {
      TopNavbar, PathNavbar, LeftNavbar, EditContainer
    },

    data () {
      return {
        isCollapsed: false,
        showRightNavbar: false,

        zoomRate: 50,
      }
    },

    beforeCreate () {
      if (this.$store.state.resumeConfig.length === 0) {
        this.$router.push('/');
      }
    },

    beforeDestroy () {
      this.$store.commit('changeResumeConfig');
    },

    methods: {
      changeRightNavbar () {
        this.showRightNavbar = !this.showRightNavbar;
      },

      changeZoomRate (category = true, step = 10, reset = false) {
        if (reset) {
          this.zoomRate = 50; return;
        }
        if (category) {
          this.zoomRate += step;
        } else {
          this.zoomRate -= step;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    background: #f5f7f9; position: relative; overflow: hidden;
  }
  .menu-item span{
    display: inline-block; overflow: hidden; width: 69px; text-overflow: ellipsis; white-space: nowrap; vertical-align: bottom; transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px); transition: font-size .2s ease, transform .2s ease; vertical-align: middle; font-size: 16px;
  }
  .collapsed-menu span{
    width: 0; transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px); transition: font-size .2s ease .2s, transform .2s ease .2s; vertical-align: middle; font-size: 22px;
  }

  .left-navbar {
    border-right:1px solid #555; box-shadow:0 0 18px #000;
    /deep/ .ivu-layout-sider-zero-width-trigger {
      margin-top:-6px;
    }
  }

  .page-layout {
    padding-top:30px; position:relative;
  }
</style>