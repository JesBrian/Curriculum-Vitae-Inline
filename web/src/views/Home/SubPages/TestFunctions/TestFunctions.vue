<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 实验室
      </BreadcrumbItem>
    </PathNavbar>

    功能实验室
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'TestFunctions',

    components: {
      PathNavbar
    }
  }
</script>

<style lang="scss" scoped>

</style>