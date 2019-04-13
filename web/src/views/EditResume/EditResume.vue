<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />

    <Layout>
      <!-- 左侧菜单 -->
      <Sider v-model="isCollapsed" breakpoint="md" collapsible collapsed-width="78" class="left-navbar">
        <LeftNavbar :is-collapsed="isCollapsed" />
      </Sider>

      <Content class="page-layout" :style="`padding:50px ${showNodePanel ? 200 : 45}px 18px 15px; position: relative;`">
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

            <ColorPicker @on-change="changeBg" :value="$store.state.designConf.bg" alpha size="small" />

            <div style="float: right;">
              <Button @click="showTempResume" type="success" icon="logo-buffer" size="small" ghost style="margin:0 0 0 6px;">预览</Button>
              <Button @click="exportResume" type="primary" icon="md-code-download" size="small" ghost style="margin:0 0 0 6px;">导出</Button>
              <Button @click="saveResume" type="info" icon="md-list" size="small" ghost style="margin:0 0 0 6px;">保存</Button>
              <Button @click="delNowCurriculumVitae" :disabled="(!$store.state.designConf.status) || ($route.query.id === '')" type="error" icon="md-trash" size="small" ghost style="margin:0 0 0 6px;">删除</Button>
            </div>
          </div>
        </Layout>

        <Layout :style="`width:${showNodePanel ? 180 : 25}px; height:100%; top: 0; right: 0; box-sizing: border-box; position: absolute; background: #50596E; box-shadow: 0 0 8px #282828; color: #FFF;`">
          <div v-if="showNodePanel" style="width: 100%; height: 100%; padding: 18px 10px; overflow: auto;">
            <template v-if="$store.state.designConf.cell.length" >
              <div v-for="(item, index) in $store.state.designConf.cell" class="nodeCell">
                {{index + 1}}
                <Icon @click="delNode(index)" type="md-trash" size="18" style="margin-left: auto;" />
              </div>
            </template>
            <div v-else style="width: 100%; height: 100%;">暂无任何节点</div>
            <div @click="switchShowNodePanel" style="width: 23px; height: 168px; left: -23px; top: 50%; position: absolute; transform: translateY(-50%); background: #50596E; box-shadow: -6px 0 18px -6px #000; border-radius: 8px 0 0 8px; line-height: 168px; text-align: center;">
              <Icon type="ios-arrow-forward" size="22" color="#FFF" />
            </div>
          </div>
          <div @click="switchShowNodePanel" v-else style="width: 100%; height: 100%; padding: 15px 2px; box-sizing: border-box; text-align: center;">
            节点层级面板
          </div>
        </Layout>
      </Content>
    </Layout>

    <Drawer v-if="$store.state.userInfo" v-model="showRightNavbar" title="Basic Drawer" :closable="false">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>

    <LoginTips />
  </Layout>
</template>

<script>
  import TopNavbar from './TopNavbar/TopNavbar.vue'
  import LeftNavbar from './LeftNavbar/LeftNavbar.vue'
  import PathNavbar from './PathNavbar/PathNavbar.vue'
  import EditContainer from '../../components/EditContainer.vue'
  import LoginTips from '../../components/LoginTips/LoginTips.vue'

  export default {
    name: 'EditResume',

    components: {
      TopNavbar, PathNavbar, LeftNavbar, EditContainer, LoginTips
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
      this.id = this.$route.query.id;
      if ((this.$store.state.designConf.size.length === 0) || (this.id === '')) {
        // this.$router.push('/');
      }
      if (this.id) {
        this.$http.get(`getDesignById?id=${this.id}`).then(({data}) => {
          const confData = data.data;
          const designConf = {
            name: confData.name,
            logo: confData.logo,
            bg: confData.bg,
            status: confData.status,
            size: confData.size, // [长,宽]
            cell: confData.cell,
            tags: confData.tags
          };
          this.$store.commit('changeDesignConf', designConf);
          this.$nextTick(() => {
            this.updateLocalHistory();
          });
        }).catch(err => {
          console.log(err);
        });
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

      changeBg (color = '') {
        this.$store.commit('changeDesignConfBg', color);
      },

      switchShowNodePanel () {
        this.showNodePanel = !this.showNodePanel;
      },

      delNode (index) {
        this.$store.commit('changeDesignConfCell', {
          op: 'del', index: index
        });
      },

      showTempResume () {
        this.$store.commit('changeShowModal', 'TempShowModal');
      },

      exportResume () {
        alert('给钱也不会给你开通这功能！');
      },

      saveResume () {
        let designData = {
          name: '',
          logo: '',
          author: this.$store.state.userInfo.id,
          tags: [],
          ...this.$store.state.designConf
        };
        if (this.id) {
          designData.id = this.id
        }
        this.$http.put('saveDesign', designData).then(({data}) => {
          if (data.status === 200) {
            this.id = data.data;
            this.updateLocalHistory();
          }
        }).catch(err => {
          console.log(err);
        });
      },

      updateLocalHistory () {
        this.$localForage.getItem('designHistory').then(res => {
          const designId = this.id;
          let history = [], flag = true;
          if (res) {
            history = res;
          }
          for (let i = 0, len = history.length; i < len; i++) {
            if (history[i].id === designId) {
              history[i].name =this.$store.state.designConf.name;
              history[i].time = Date.now();
              flag = false;
              break;
            }
          }
          if (flag) {
            history.push({
              id: this.id,
              name: this.$store.state.designConf.name,
              time: Date.now()
            });
          }
          this.$localForage.setItem('designHistory', history);
        }).catch(err => {
          console.log(err);
        });
      },

      delNowCurriculumVitae () {
        this.$Modal.confirm({
          title: '警告',
          content: '<p>确认要删除该编辑中的简历</p>',
          onOk: () => {
            this.$http.put('switchDesignStatus', {
              id: this.id,
              status: false
            }).then(({data}) => {
              if (data.status === 200) {
                this.$store.commit('changeDesignConf', {
                  status: false
                });
              }
            }).catch(err => {
              console.log(err);
            });
          },
        });
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


  .nodeCell {
    width: 100%; height: 28px; padding: 0 8px 0 12px; display: flex; flex-direction: row; align-items: center; border-radius: 14px;
    &:hover {
      background: rgba(255, 255, 255, 0.08); box-shadow: 1px 1px 8px -2px #000;
    }
  }
</style>