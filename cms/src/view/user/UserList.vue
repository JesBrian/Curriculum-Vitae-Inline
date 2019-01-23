<template>
  <Card>
    <Tabs type="card">
      <TabPane label="所有用户">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="异常用户">
        标签二的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="用户黑名单">
        标签三的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  export default {
    name: 'UserList'
  }
</script>

<style scoped>

</style>