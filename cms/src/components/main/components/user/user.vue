<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <Avatar :src="userAvator"/>
      <b>{{$store.state.user.userName}}</b>
      <Icon :size="22" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="editInfo">修改信息</DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import './user.less'
import { mapActions } from 'vuex'
export default {
  name: 'User',

  props: {
    userAvator: {
      type: String,
      default: ''
    }
  },

  methods: {
    ...mapActions([
      'handleLogOut'
    ]),

    handleClick (name) {
      switch (name) {
        case 'editInfo':
          this.$router.push({
            name: 'modifyInfo'
          });
          break;
        case 'logout':
          this.handleLogOut().then(() => {
            this.$router.push({
              name: 'login'
            })
          });
          break
      }
    }
  }
}
</script>
