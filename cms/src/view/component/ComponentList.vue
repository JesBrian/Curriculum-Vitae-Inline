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
  import Links from '_c/tables/links/links.vue';
  import Status from '_c/tables/status/status.vue';
  import Logos from '_c/tables/logos/logos.vue';

  export default {
    name: 'ComponentList',

    components: {
      PageTitle, Links, Logos, Status
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
            title: '组件名',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/component/editComponent?id=${params.row._id}`
                }
              }, params.row.name);
            }
          },
          {
            title: '缩略图',
            key: 'logo',
            render: (h, params) => {
              return h(Logos, {
                props: {
                  src: params.row.logo ? `http://localhost:3000/img/component/logo/${params.row.logo}` : ''
                }
              });
            }
          },
          {
            title: '状态',
            key: 'status',
            sortable: true,
            render: (h, params) => {
              return h(Status, {
                props: {
                  status: params.row.status
                }
              });
            }
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