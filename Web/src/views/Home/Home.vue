<template>
  <Layout>
    <Header class="home-header">
      <div class="home-header-logo">
        <router-link to="/" >
          <img class="logo" src="../../../public/img/logo.png">
        </router-link>
      </div>
    </Header>
    <Layout>
      <Sider hide-trigger style="background:#FFF;">
        <RouterLink to="/Home/ChooseFormat">新建</RouterLink>
        <RouterLink to="/Home/SelfWeb">网络</RouterLink>
        <RouterLink to="/Home/UploadLocal">本地</RouterLink>
      </Sider>
      <Layout>
        <Content>
          <RouterView />
        </Content>
        <Footer style="background:#FFF;">Footer</Footer>
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
      height: 60px;
      box-sizing: content-box;
      border-bottom:1px solid #444;
      box-shadow:0 0 18px #000;
      z-index:99;
      &-logo {
        float: left;
        .logo {
          width: 28px; height: 28px; margin: 16px 0;
        }
      }
    }
  }
</style>
