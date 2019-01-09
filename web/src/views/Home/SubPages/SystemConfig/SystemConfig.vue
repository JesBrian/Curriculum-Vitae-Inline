<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 系统配置
      </BreadcrumbItem>
    </PathNavbar>

    系统配置页
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'SystemConfig',

    components: {
      PathNavbar
    }
  }
</script>

<style lang="scss" scoped>

</style>