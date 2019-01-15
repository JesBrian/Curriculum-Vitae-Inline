<template>
  <Breadcrumb style="margin:28px 0 18px 43px;">
    <BreadcrumbItem to="/">
      <Icon type="ios-home" /> 首页
    </BreadcrumbItem>
    <slot />

    <div style="margin-right:18px; float:right">
      <slot name="right" />
    </div>
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'PathNavbar'
  }
</script>

<style lang="scss" scoped>

</style>