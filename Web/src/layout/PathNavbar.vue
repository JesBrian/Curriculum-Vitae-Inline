<template>
  <Breadcrumb class="path-navbar" :style="{margin: '0 0 20px'}">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Components</BreadcrumbItem>
    <BreadcrumbItem>Layout</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'PathNavbar'
  }
</script>

<style lang="scss" scoped>
  .path-navbar {
    top:-5px;
    position:absolute;
  }
</style>