<template>
  <Header class="top-navbar" :class="{'active': isShowComponentConfArea}">
    <Menu mode="horizontal" theme="dark" active-name="1" style="height:0;">
      <div class="layout-logo">
        <router-link to="/" >
          <img class="logo" src="../../../../public/img/logo.png" />
        </router-link>
      </div>

      <div class="layout-user">
        <img @click="changeRightNavbar" class="user" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
      </div>
    </Menu>

    <div class="component-conf-container" style="width:100%; height:100%; position:relative;">
      <Tabs value="name1" style="z-index: 5;">
        <TabPane label="标签一" name="name1">
          <div class="component-conf-content" v-show="isShowComponentConfArea" >
            <ColorPicker v-model="color" alpha size="small" />
          </div>
        </TabPane>
        <TabPane label="标签二" name="name2">
          <div class="component-conf-content" v-show="isShowComponentConfArea" >
          </div>
        </TabPane>
        <TabPane label="标签三" name="name3">
          <div class="component-conf-content" v-show="isShowComponentConfArea" >
          </div>
        </TabPane>
      </Tabs>

      <div @click="changeShowComponentConfArea" style="line-height:23px; text-align:center; width: 188px; height:23px; top: 98%; left: 50%; position:absolute; transform: translateX(-50%); border-radius: 0 0 8px 8px; background:#50596E; box-shadow: 0 8px 18px -6px #000;">
        <Icon type="ios-arrow-up" size="22" color="#FFF" />
      </div>
    </div>
  </Header>
</template>

<script>
  export default {
    name: 'TopNavbar',

    data () {
      return {
        isShowComponentConfArea: true,
        color: '#000'
      }
    },

    methods: {
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
    margin-bottom: 18px;
    padding:0;
    position:relative;
    box-shadow:0 0 18px #000;

    &.active {
      height: 108px;
    }

    .layout-logo {
      top: -8px; left: 18px; position:absolute;
      .logo {
        width: 18px; height: 18px;
      }
    }

    .layout-user {
      top: -5px; right: 18px; position: absolute;
      .user {
        width: 23px; height: 23px; border-radius:50%; box-shadow:0 0 6px #282828;
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
        color: #BBB;
      }
    }
  }
</style>