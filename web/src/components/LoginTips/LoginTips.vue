<template>
  <div v-if="isShow && !$store.state.userInfo" class="login-tips">
    当前处于预览状态，数据不会存储至网络，请登录后操作
    <Button @click="userLogin" type="info" icon="md-list" size="small" style="margin-left: 18px;">登录</Button>
    <Icon @click="switchShow" type="md-close-circle" size="23" style="right: 18px; position: absolute;" />
  </div>
</template>

<script>
  export default {
    name: 'LoginTips',

    data () {
      return {
        isShow: true
      }
    },

    methods: {
      userLogin () {
        this.$store.commit('changeShowModal', 'LoginRegisterModal');
      },

      switchShow () {
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-tips {
    width: 100%;
    height: 68px;
    left: 0;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.86);
    z-index: 15;
    color: #DDD;
    font-size: 19px;
  }
</style>