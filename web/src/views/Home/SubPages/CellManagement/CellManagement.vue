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

    <div style="padding:0 18px 0 38px;">
      <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
      </Tabs>
    </div>
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