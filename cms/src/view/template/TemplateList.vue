<template>
  <Card>
    <Tabs type="card">
      <TabPane label="标签一">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="标签二">
        标签二的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="标签三">
        标签三的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  export default {
    name: 'TemplateList'
  }
</script>

<style lang="scss" scoped>

</style>