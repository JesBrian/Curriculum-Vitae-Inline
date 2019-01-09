<template>
  <Breadcrumb style="margin:28px 0 18px 43px;">
    <BreadcrumbItem to="/">
      <Icon type="ios-home" /> 首页
    </BreadcrumbItem>
    <slot />
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'PathNavbar'
  }
</script>

<style lang="scss" scoped>

</style>