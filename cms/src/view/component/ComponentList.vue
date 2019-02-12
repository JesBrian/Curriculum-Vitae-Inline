<template>
  <Card>
    <PageTitle icon="md-backspace" title="组件列表" />

    <Tabs type="card">
      <TabPane label="系统配置">
        <Table border ref="selection" :columns="columns" :data="componentList" stripe />
        <Page @on-change="changeNowPage" :total="totalNum" show-elevator style="margin:23px auto 8px; text-align:center;" />
      </TabPane>
      <TabPane label="用户上传">
        <Table border ref="selection" :columns="columns" :data="componentList" stripe />
        <Page @on-change="changeNowPage" :total="totalNum" show-elevator style="margin:23px auto 8px; text-align:center;" />
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
        ],

        page: 1,
        totalNum: 0
      }
    },

    created () {
      this.getComponentListData(this.page);
    },

    methods: {
      getComponentListData (page = 1, limit = 10) {
        this.$http.get(`allComponentList?page=${page}&limit=${limit}`).then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.componentList = result.data.componentList;
            this.totalNum = result.data.totalNum;
          }
        }).catch(err => {
          console.log(err);
        });
      },

      changeNowPage (page = 1) {
        this.getComponentListData(page);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>