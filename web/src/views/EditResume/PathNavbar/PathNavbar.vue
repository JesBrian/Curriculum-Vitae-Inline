<template>
  <Breadcrumb class="path-navbar">
    <BreadcrumbItem to="/">
      <Icon type="ios-home" /> 首页
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Icon type="ios-create" /> 编辑
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'PathNavbar'
  }
</script>

<style lang="scss" scoped>
  .path-navbar {
    top:15px;
    margin: 0 0 20px;
    position:absolute;
  }
</style>