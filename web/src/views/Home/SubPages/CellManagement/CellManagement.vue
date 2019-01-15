<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 组件管理
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="createComponent" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">创建组件</Button>
      </div>
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
    },

    methods: {
      createComponent () {
        this.$router.push('/EditComponent');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>