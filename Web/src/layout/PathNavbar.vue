<template>
  <Breadcrumb :style="{margin: '0 0 20px'}">
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Components</BreadcrumbItem>
    <BreadcrumbItem>Layout</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})

  export default class PathNavbar extends Vue {
  }
</script>

<style scoped>

</style>