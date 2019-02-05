<template>
  <Card>
    <PageTitle icon="md-backspace" title="组件列表" />

    <Tabs type="card">
      <TabPane label="系统配置">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="用户上传">
        标签二的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'ComponentList',

    components: {
      PageTitle
    }
  }
</script>

<style lang="less" scoped>

</style>