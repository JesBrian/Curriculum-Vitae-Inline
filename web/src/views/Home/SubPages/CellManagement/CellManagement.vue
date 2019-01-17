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

    <div style="padding:8px 18px 0 38px; position:relative;">
      <Tabs type="card">
        <TabPane label="个人组件">标签一的内容</TabPane>
        <TabPane label="收藏组件">标签二的内容</TabPane>
        <TabPane label="网络组件">标签三的内容</TabPane>
      </Tabs>

      <Input search placeholder="请输入关键字..." style="width:238px; top:0; right:18px; position:absolute;" />
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