<template>
  <Header class="top-navbar" :class="{'active': isShowComponentConfArea && componentConf !== null}">
    <Menu mode="horizontal" theme="dark" active-name="1" style="height:0;">
      <div class="layout-logo">
        <router-link to="/" >
          <img class="logo" src="../../../../public/img/logo.png" />
        </router-link>
      </div>

      <div class="layout-user">
        <Avatar @click.native="changeRightNavbar" :src="$store.state.userInfo && $store.state.userInfo.avatar ? `http://localhost:3000/img/avatar/${$store.state.userInfo.avatar}` : ''" class="user" shape="square" icon="md-person" size="small" title="请登录" />
      </div>
    </Menu>

    <div v-if="componentConf !== null" class="component-conf-container" style="width:100%; height:100%; position:relative;">
      <Tabs value="format" style="line-height: 35px; z-index: 5;">
        <TabPane label="规格" name="format" style="padding-top:6px; ">
          <div v-show="isShowComponentConfArea" class="component-conf-content" >
            <Row :gutter="32" >
              <Col span="8">
                <Row>
                  <Col span="4">定位:</Col>
                  <Col span="20">
                    <InputNumber v-model="componentConf.format.position.axis[0]" :min="0" size="small" />
                    <span>X</span>
                    <InputNumber v-model="componentConf.format.position.axis[1]" :min="0" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="8">
                <Row>
                  <Col span="4">长宽:</Col>
                  <Col span="20">
                    <InputNumber v-model="componentConf.format.size.size[0]" :min="0" size="small" />
                    <span>X</span>
                    <InputNumber v-model="componentConf.format.size.size[1]" :min="0" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="8">
                <Row>
                  <Col span="4">层级:</Col>
                  <Col span="20">
                    <InputNumber :min="1" size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="输入" name="input" style="padding-top:6px; ">
          <div v-show="isShowComponentConfArea" class="component-conf-content" >
            <Row :gutter="16" >
              <Col span="5">
                <Row>
                  <Col span="6">{{componentConf.input.title}}:</Col>
                  <Col span="17">
                    <Input v-if="componentConf.input.type === 'text'" v-model="componentConf.input.text.val" size="small" />
                    <InputNumber v-if="componentConf.input.type === 'number'" v-model="componentConf.input.number.val" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="5">
                <Row>
                  <Col span="10">对齐方式:</Col>
                  <Col span="14">
                    <Select v-model="componentConf.input.align[0]" size="small" style="width:60px">
                      <Option value="left">靠左</Option>
                      <Option value="center">居中</Option>
                      <Option value="right">靠右</Option>
                    </Select>
                  </Col>
                  <!--<Col span="8">-->
                    <!--<Select v-model="componentConf.input.align[1]" size="small" style="width:60px">-->
                      <!--<Option value="top">顶部</Option>-->
                      <!--<Option value="center">中间</Option>-->
                      <!--<Option value="bottom">底部</Option>-->
                    <!--</Select>-->
                  <!--</Col>-->
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="8">字体大小:</Col>
                  <Col span="16">
                    <InputNumber v-model="componentConf.input.size" :min="12" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="8">字体颜色:</Col>
                  <Col span="16">
                    <ColorPicker v-model="componentConf.input.color" alpha size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row :gutter="16" >
              <Col span="5">
                <Row>
                  <Col span="8">下划线:</Col>
                  <Col span="16">
                    <Switch v-model="componentConf.input.underline" size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="样式" name="style" style="padding-top:6px; ">
          <div v-show="isShowComponentConfArea" class="component-conf-content" >
            <Row :gutter="16" >
              <Col span="6">
                <Row>
                  <Col span="10">边界线宽度:</Col>
                  <Col span="14">
                    <InputNumber v-model="componentConf.style.border[1]" :min="0" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="10">边界线形式:</Col>
                  <Col span="14">
                    <Select v-model="componentConf.style.border[2]" size="small" style="width: 80px;">
                      <Option value="solid">实线</Option>
                      <Option value="double">双实线</Option>
                      <Option value="dotted">点状</Option>
                      <Option value="dashed">虚线</Option>
                    </Select>
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="10">边界线颜色:</Col>
                  <Col span="14">
                    <ColorPicker v-model="componentConf.style.border[3]" alpha size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="8">背景色:</Col>
                  <Col span="16">
                    <ColorPicker v-model="componentConf.style.bgColor" alpha size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row :gutter="16" >
              <Col span="6">
                <Row>
                  <Col span="9">阴影宽度:</Col>
                  <Col span="15">
                    <InputNumber v-model="componentConf.style.shadow[1]" :min="0" size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="9">阴影颜色:</Col>
                  <Col span="15">
                    <ColorPicker v-model="componentConf.style.shadow[2]" alpha size="small" />
                  </Col>
                </Row>
              </Col>
              <Col span="6">
                <Row>
                  <Col span="10">组件透明度:</Col>
                  <Col span="14">
                    <InputNumber v-model="componentConf.style.opacity" :min="0" :max="1" :step="0.1" size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane label="特殊" name="special" style="padding-top:6px; ">
          <div class="component-conf-content" v-show="isShowComponentConfArea">
          </div>
        </TabPane>
      </Tabs>

      <div @click="changeShowComponentConfArea" style="width: 188px; height:25px; top: 98%; left: 50%; position:absolute; transform: translateX(-50%); border-radius: 0 0 8px 8px; background:#50596E; box-shadow: 0 8px 18px -6px #000; line-height:25px; text-align:center; ">
        <Icon :type="isShowComponentConfArea ? 'ios-arrow-up' : 'ios-arrow-down'" size="22" color="#FFF" />
      </div>
    </div>
  </Header>
</template>

<script>
  export default {
    name: 'TopNavbar',

    data () {
      return {
        isShowComponentConfArea: false,
        componentConf: null,
        initConf: null
      }
    },

    computed: {
      nowCellIndex () {
        return this.$store.state.nowComponentIndex;
      }
    },

    watch: {
      nowCellIndex (nVal) {
        if (nVal !== -1) {
          // console.log(this.$store.state.designConf.cell[nVal].conf)
          return this.componentConf = this.$store.state.designConf.cell[nVal].conf;
        }
        this.componentConf = this.initConf;
      }
    },

    created () {
      this.$localForage.getItem('componentConf').then(val => {
        if (val) {
          this.initCellConf(val);
        } else {
          this.getComponentListConfData();
        }
      }).catch(err => {
        console.log(err);
      })
    },

    methods: {
      initCellConf (conf = null) {
        this.initConf = JSON.parse(JSON.stringify(conf));
        this.componentConf = conf;
      },

      getComponentListConfData () {
        this.$http.get('componentConf').then(res => {
          const result = res.data;
          if (result.status === 200) {
            const conf = result.data;
            this.initCellConf(conf);
            this.$localForage.setItem('componentConf', conf);
          }
        }).catch(err => {
          console.log(err);
        })
      },

      changeRightNavbar () {
        this.$emit('changeRightNavbar')
      },

      changeShowComponentConfArea () {
        this.isShowComponentConfArea = !this.isShowComponentConfArea;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-navbar {
    height: 37px;
    padding:0;
    position:relative;
    box-shadow:0 0 18px #000;
    z-index: 15;

    &.active {
      height: 128px;
    }

    .layout-logo {
      top: -8px; left: 18px; position:absolute;
      .logo {
        width: 18px; height: 18px;
      }
    }

    .layout-user {
      top: -12px; right: 18px; position: absolute;
      .user {
        box-shadow:0 0 6px #282828;
      }
    }

    .component-conf {
      &-container {
        /deep/ {
          .ivu-tabs {
            overflow: visible;

            &-nav-wrap {
              margin:0 68px 0 58px;
            }
            &-ink-bar {
              background: #00C3FF;
              border-radius: 2px;
            }
            &-bar {
              margin: 0 0 4px;
              border: none;
              box-shadow: 0 2px 6px -2px #383838;
            }
            &-tab {
              color: #AAA;
              &:hover {
                color: #57a3f3;
              }
              &-active {
                color: #00C3FF!important;
              }
            }
          }
        }
      }

      &-content {
        min-width: 800px;
        max-width: 800px;
        padding: 0 18px 0;
        box-sizing: border-box;
        color: #BBB;
      }
    }
  }
</style>