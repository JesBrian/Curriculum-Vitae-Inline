<template>
  <Card shadow style="width: 628px; height: 408px;">
    <div style="width: 100%; height: 100%; background: lightblue;">This is Register Modal !</div>
    <div>已有账号，<Button @click.native="loginModal">登录</Button></div>
  </Card>
</template>

<script>
  export default {
    name: 'RegisterModal',

    methods: {
      loginModal () {
        this.$store.commit('changeShowModal', 'LoginModal');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>