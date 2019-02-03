<template>
  <Card>
    <Tabs v-model="tabsValue" type="card">
      <TabPane name="all" label="所有用户">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane name="back" label="用户黑名单">
        标签二的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  export default {
    name: 'UserList',

    data () {
      return {
        tabsValue: 'all',
        userList: []
      }
    },

    watch: {
      tabsValue: {
        handler: function(nVal) {
          this.getUserListData()
        },
        immediate: true
      }
    },

    methods: {
      getUserListData () {
        this.$http.get('allUserList').then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>