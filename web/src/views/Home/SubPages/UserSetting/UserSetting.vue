<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 账号设置
      </BreadcrumbItem>
    </PathNavbar>

    用户信息设置
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'UserSetting',

    components: {
      PathNavbar
    }
  }
</script>

<style lang="scss" scoped>

</style>