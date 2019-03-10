<template>
  <div>
    <Breadcrumb class="path-navbar">
      <BreadcrumbItem to="/">
        <Icon type="ios-home" /> 首页
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon type="ios-create" /> 编辑
      </BreadcrumbItem>
    </Breadcrumb>

    <div style="margin-top:-36px; float:right">
      <Button type="primary" icon="md-settings" size="small" ghost >设置</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PathNavbar'
  }
</script>

<style lang="scss" scoped>
  .path-navbar {
    top:15px;
    margin: 0;
    position:absolute;
  }
</style>