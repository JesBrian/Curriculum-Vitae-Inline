<template>
  <Card>
    <PageTitle icon="logo-buffer" title="组件列表" />

    <Tabs @on-click="changeComponentCategory" type="card">
      <TabPane name="System" label="系统配置">
        <Table border ref="selection" :columns="columns" :data="componentList" stripe />
        <Page @on-change="changeNowPage" :total="totalNum" show-elevator style="margin:23px auto 8px; text-align:center;" />
      </TabPane>
      <TabPane name="Extend" label="用户上传">
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

        category: 'System',
        totalNum: 0
      }
    },

    watch: {
      category (nVal) {
        this.getComponentListData();
      }
    },

    created () {
      this.getComponentListData();
    },

    methods: {
      getComponentListData (page = 1, limit = 10) {
        this.$http.get(`all${this.category}ComponentList?page=${page}&limit=${limit}`).then(({data}) => {
          console.log(data)
          if (data.status === 200) {
            this.componentList = data.data.componentList;
            this.totalNum = data.data.total;
          }
        }).catch(err => {
          console.log(err);
        });
      },

      changeNowPage (page = 1) {
        this.getComponentListData(page);
      },

      changeComponentCategory (category = 'System') {
        this.category = category;
      }
    }
  }
</script>

<style lang="less" scoped>

</style>