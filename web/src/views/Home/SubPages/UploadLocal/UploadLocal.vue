<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 本地存储
      </BreadcrumbItem>
    </PathNavbar>

    本地存储
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'UploadLocal',

    components: {
      PathNavbar
    }
  }
</script>

<style scoped>

</style>