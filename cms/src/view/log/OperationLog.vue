<template>
  <Card>
    <Tabs type="card">
      <TabPane label="所有日志">
        所有日志
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="用户相关">
        用户相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="管理员相关">
        管理员相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="权限相关">
        权限相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="格式相关">
        格式相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="模板相关">
        模板相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="组件相关">
        组件相关
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  export default {
    name: 'OperationLog'
  }
</script>

<style lang="scss" scoped>

</style>