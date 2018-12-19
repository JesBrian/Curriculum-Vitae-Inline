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
        <img @click="showLoginModal" class="home-header-user-avatar" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
      </div>
    </Header>

    <Layout>
      <Sider hide-trigger class="home-left-navbar">
        <div class="home-left-navbar-user">
          <img @click="showLoginModal" class="home-left-navbar-user-avatar" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
        </div>

        <RouterLink class="home-left-navbar-link" to="/Home/CreateResume">
          <Icon type="ios-copy" class="icon" />新建
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/SelfWeb">
          <Icon type="md-planet" class="icon" />网络
        </RouterLink>
        <RouterLink class="home-left-navbar-link" to="/Home/UploadLocal">
          <Icon type="logo-buffer" class="icon" />本地
        </RouterLink>
      </Sider>

      <Layout>
        <Content>
          <RouterView />
        </Content>

        <Footer class="home-footer">
          <Button icon="md-list" ghost style="margin:0 6px;">取消</Button>
          <Button icon="md-list" ghost style="margin:0 6px;">保存</Button>
        </Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'home',

  methods: {
    showLoginModal () {
      this.$store.commit('changeShowModal', 'LoginModal');
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    &-header {
      height: 60px; padding: 0 18px 0 38px; box-sizing: content-box; border-bottom:1px solid #555; box-shadow:0 0 18px #000; z-index:99;
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
          width:35px; height:35px; margin-top:13px; border-radius:50%; box-shadow:0 0 6px #282828;
        }
      }
    }

    &-left-navbar {
      width: 88px!important; min-width: 88px!important; max-width: 88px!important; padding: 8px 1px; background: #515a6e; border-right:1px solid #555; box-shadow:0 0 18px #000;
      &-user {
        text-align: center;
        &-avatar {
          width: 43px; height: 43px; margin: 8px auto; border-radius: 50%; box-shadow:0.5px 0.5px 10px #282828;
        }
      }

      &-link {
        height: 88px; padding-top: 12px; display: block; border-top: 1px solid #454545; text-align: center; font-size: 18px; font-weight: 700; color: #BBB;
        &:last-child {
          border-bottom: 1px solid #454545;
        }
        &.router-link-exact-active {
          background: #3F4757; color: #FFF;
        }
        > .icon {
          display: block; font-size: 35px;
        }
      }
    }

    &-footer {
      height: 52px; padding: 0 13px 0 0; background: #515a6e; border-top:1px solid #555; box-shadow:0 0 18px #000; text-align: right; line-height: 49px;
    }
  }
</style>
