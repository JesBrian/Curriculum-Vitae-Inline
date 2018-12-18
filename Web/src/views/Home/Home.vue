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
        <img class="home-header-user-avatar" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
      </div>
    </Header>

    <Layout>
      <Sider hide-trigger class="home-left-navbar">
        <div class="home-left-navbar-user">
          <img class="home-left-navbar-user-avatar" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
        </div>

        <RouterLink to="/Home/ChooseFormat">新建</RouterLink> /
        <RouterLink to="/Home/SelfWeb">网络</RouterLink> /
        <RouterLink to="/Home/UploadLocal">本地</RouterLink>
      </Sider>

      <Layout>
        <Content>
          <RouterView />
        </Content>

        <Footer class="home-footer">Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'home',
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
      width: 108px!important; min-width: 108px!important; max-width: 108px!important; padding: 8px 12px; background: #515a6e; border-right:1px solid #555; box-shadow:0 0 18px #000;
      &-user {
        text-align: center;
        &-avatar {
          width: 43px; height: 43px; margin: 8px auto; border-radius: 50%; box-shadow:0.5px 0.5px 10px #282828;
        }
      }
    }

    &-footer {
      height: 38px; padding: 0; background: #515a6e; border-top:1px solid #555; box-shadow:0 0 18px #000;
    }
  }
</style>
