<template>
  <Card>
    <PageTitle icon="md-backspace" title="组件列表" />

    <Tabs type="card">
      <TabPane label="系统配置">
        <Table border ref="selection" :columns="columns" :data="componentList" stripe />
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
      <TabPane label="用户上传">
        <Table border ref="selection" :columns="columns" :data="componentList" stripe />
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
    },

    data () {
      return {
        componentList: [],
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          }
        ]
      }
    },

    created () {
      this.getComponentListData();
    },

    methods: {
      getComponentListData () {
        this.$http.get('allComponentList').then(res => {
          console.log(res);
          const result = res.data;
          if (result.status === 200) {
            this.componentList = result.data;
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>