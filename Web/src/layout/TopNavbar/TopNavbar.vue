<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
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

      <div style="float:right;">
        <img @click="changeRightNavbar" style="width:35px; height:35px; border-radius:50%; box-shadow:0 0 6px #282828;" src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
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

<style scoped>

</style>