<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 组件管理
      </BreadcrumbItem>
    </PathNavbar>
    组件管理
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'CellManagement',

    components: {
      PathNavbar
    }
  }
</script>

<style lang="scss" scoped>

</style>