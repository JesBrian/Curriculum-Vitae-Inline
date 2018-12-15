<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <router-link to="/" >
          <img class="logo" src="../../../public/img/logo.png">
        </router-link>
      </div>

      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          Item 1
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          Item 2
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          Item 4
        </MenuItem>
      </div>

      <div class="layout-user">
        <img @click="changeRightNavbar" class="user" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
      </div>
    </Menu>
  </Header>
</template>

<script>
  export default {
    name: 'TopNavbar',

    methods: {
      changeRightNavbar () {
        this.$emit('changeRightNavbar')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ivu-layout-header {
    padding:0 28px 0 20px;
  }

  .layout-logo {
    float: left;
    .logo {
      width: 28px; height: 28px; margin: 16px 0;
    }
  }

  .layout-user {
    float:right;
    .user {
      width:35px; height:35px; margin-top:13px; border-radius:50%; box-shadow:0 0 6px #282828;
    }
  }
</style>