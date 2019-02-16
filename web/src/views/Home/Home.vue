<template>
  <Layout>
    <Header class="home-header">
      <div class="home-header-logo">
        <router-link to="/" >
          <img class="logo" src="../../../public/img/logo.png">
          <span class="label">在线简历制作系统</span>
        </router-link>
      </div>

      <div class="home-header-user">
        <Avatar @click.native="showLoginModal" class="home-header-user-avatar" icon="md-person" title="请登录" />
      </div>
    </Header>

    <Layout>
      <Sider hide-trigger class="home-left-navbar">
        <div class="home-left-navbar-user">
          <Avatar @click.native="showLoginModal" class="home-left-navbar-user-avatar" icon="md-person" title="请登录" />
        </div>

        <RouterLink class="home-left-navbar-link" to="/Home/CreateResume">
          <Icon type="ios-copy" class="icon" />新建
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/SelfWeb">
          <Icon type="md-planet" class="icon" />网络
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/UploadLocal">
          <Icon type="md-calendar" class="icon" />历史
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/CellManagement">
          <Icon type="logo-buffer" class="icon" />组件
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/TestFunctions">
          <Icon type="ios-flask" class="icon" />趣味
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/SystemConfig">
          <Icon type="ios-construct" class="icon" />配置
        </RouterLink>

        <div style="height:58px;"></div>
      </Sider>

      <Layout style="padding-bottom: 78px;">
        <RouterView />
      </Layout>

      <Footer class="home-footer">
        <Button icon="md-list" ghost style="margin:0 6px;">取消</Button>
        <Button icon="md-list" ghost style="margin:0 6px;">上一步</Button>
        <Button icon="md-list" ghost style="margin:0 6px;">下一步</Button>
      </Footer>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'home',

  create () {
    this.$localForage.getItem('user', (err, value) => {
    });
  },

  methods: {
    showLoginModal () {
      this.$store.commit('changeShowModal', 'LoginRegisterModal');
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    &-header {
      height: 60px; padding: 0 18px 0 32px; box-sizing: content-box; border-bottom:1px solid #555; box-shadow:0 0 18px #000; z-index:99;
      &-logo {
        float: left;
        .logo {
          width: 28px; height: 28px; margin: 16px 18px 0 0; float: left;
        }
        .label {
          font-size: 18px; color: #EEE;
        }
      }
      &-user {
        float: right;
        &-avatar {
          width:35px; height:35px; border-radius:50%; box-shadow:0 0 6px #282828; font-size: 18px; cursor: pointer;
        }
      }
    }

    &-left-navbar {
      width: 88px!important; min-width: 88px!important; max-width: 88px!important; padding: 8px 0 8px 1px; overflow:auto; background: #515a6e; border-right:1px solid #555; box-shadow:0 0 18px #000;
      &-user {
        text-align: center;
        &-avatar {
          width: 43px; height: 43px; margin: 8px auto 16px; border-radius: 50%; box-shadow:0.5px 0.5px 10px #282828; line-height: 43px; text-align: center; font-size: 26px; cursor: pointer;
        }
      }

      &-link {
        height: 88px; padding-top: 12px; display: block; border-top: 1px solid #454545; text-align: center; font-size: 18px; font-weight: 700; color: #BBB;
        &:last-child {
          border-bottom: 1px solid #454545;
        }
        &.router-link-exact-active {
          background: #363B4A; color: #FFF; box-shadow: 4px 0 3px -2px #333;
        }
        > .icon {
          display: block; font-size: 35px;
        }
      }
    }

    &-footer {
      width: 100%; height: 51px; left: 0; bottom: 0; padding: 0 13px 0 0; position: absolute; background: #515a6e; border-top:1px solid #555; box-shadow:0 0 18px #000; text-align: right; line-height: 49px;
    }
  }
</style>
