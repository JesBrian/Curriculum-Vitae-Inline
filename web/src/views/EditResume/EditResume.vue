<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />

    <Layout>
      <!-- 左侧菜单 -->
      <Sider v-model="isCollapsed" breakpoint="md" collapsible collapsed-width="78" class="left-navbar">
        <LeftNavbar :is-collapsed="isCollapsed" />
      </Sider>

      <Content class="page-layout" :style="`padding:50px ${showNodePanel ? 200 : 40}px 18px 15px; position: relative;`">
        <PathNavbar />

        <Layout style="width:100%; height:100%; padding:13px; box-sizing:border-box; border-radius:3px; box-shadow: 0 1px 10px -1px #282828;">
          <div style="width:98%; margin:6px auto 0; padding:0 138px 13px 58px; position:relative; box-sizing:border-box;">
            <div style="left:16px; top:0; position:absolute;">
              <Button @click="changeZoomRate(false)" icon="md-remove" type="info" shape="circle" size="small" ghost style="margin-right:18px;"></Button>
            </div>
            <div style="width:100%; margin-top:-6px;">
              <Slider v-model="zoomRate" show-input ></Slider>
            </div>
            <div style="right:0; top:0; position:absolute;">
              <Button @click="changeZoomRate(true)" icon="md-add" type="info" shape="circle" size="small" ghost></Button>
              <Button @click="changeZoomRate(false, 0, true)" icon="md-list" type="info" size="small" ghost style="margin:0 0 0 12px;">重置缩放</Button>
            </div>
          </div>

          <div style="width:100%; height:100%; padding:6px 6px 1px 6px; box-sizing:border-box; overflow:auto; text-align:center; box-shadow:0 0 3px #999;">
            <EditContainer :style="`zoom:${(zoomRate + 30) * 1.25}%`" />
          </div>

          <div style="padding-top: 13px;">
            <InputNumber v-model="$store.state.designConf.size[0]" :min="1" size="small" style="width:68px;" />
            <span style="margin:2px 5px;">x</span>
            <InputNumber v-model="$store.state.designConf.size[1]" :min="1" size="small" style="width:68px; margin-right:28px;" />

            <div style="float: right;">
              <Button @click="showTempResume" type="success" icon="logo-buffer" size="small" ghost style="margin:0 0 0 6px;">预览</Button>
              <Button @click="exportResume" type="primary" icon="md-code-download" size="small" ghost style="margin:0 0 0 6px;">导出</Button>
              <Button @click="saveResume" type="info" icon="md-list" size="small" ghost style="margin:0 0 0 6px;">保存</Button>
              <Button @click="delNowCurriculumVitae" type="error" icon="md-trash" size="small" ghost style="margin:0 0 0 6px;">删除</Button>
            </div>
          </div>
        </Layout>

        <Layout @click.native="switchShowNodePanel" :style="`width:${showNodePanel ? 180 : 20}px; height:100%; top: 0; right: 0; position: absolute; background: #50596E; box-shadow: 0 0 8px #282828; color: #FFF;`">
          <div v-if="showNodePanel" style="overflow: auto;">
          </div>
          <div v-else style="text-align: center;">
            层级节点面板
          </div>
        </Layout>
      </Content>
    </Layout>

    <Drawer v-if="$store.state.userInfo" v-model="showRightNavbar" title="Basic Drawer" :closable="false">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
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
        showNodePanel: false,
        zoomRate: 50,
      }
    },

    beforeCreate () {
      if (this.$store.state.designConf.size.length === 0) {
        // this.$router.push('/');
      }
    },

    beforeDestroy () {
      this.$store.commit('changeDesignConf');
    },

    methods: {
      changeRightNavbar () {
        if (this.$store.state.userInfo) {
          this.showRightNavbar = !this.showRightNavbar;
          return true;
        }
        this.$store.commit('changeShowModal', 'LoginRegisterModal');
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
      },

      switchShowNodePanel () {
        this.showNodePanel = !this.showNodePanel;
      },

      showTempResume () {
        this.$store.commit('changeShowModal', 'TempShowModal');
      },

      exportResume () {
        alert('给钱也不会给你开通这功能！');
      },

      saveResume () {
        alert('往我账号里打钱立马给你开通该功能！');
      },

      delNowCurriculumVitae () {
        confirm('确认要删除该编辑中的简历/名片');
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