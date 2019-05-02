<template>
  <Card>
    <PageTitle icon="md-person" title="管理员列表" />
    <Table border ref="selection" :columns="columns" :data="adminList" stripe />
    <Page @on-change="changeNowPage" :total="total" show-elevator style="margin:23px auto 8px; text-align:center;" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import Links from '_c/tables/links/links.vue';
  import Status from '_c/tables/status/status.vue';
  import { formatDateTime } from '_u/time.js';

  export default {
    name: 'AdminList',

    components: {
      PageTitle, Links, Status
    },

    data () {
      return {
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '真实名称',
            key: 'trueName',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/admin/editAdmin?id=${params.row._id}`
                }
              }, params.row.trueName);
            }
          },
          {
            title: '创建时间',
            key: 'cTime',
            sortable: true,
            render: (h, params) => {
              return h('span', {
              }, formatDateTime(params.row.cTime));
            }
          },
          {
            title: '最后登录时间',
            key: 'lTime',
            sortable: true,
            render: (h, params) => {
              return h('span', {
              }, formatDateTime(params.row.lTime));
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
        adminList: [],
        total: 0
      }
    },

    created () {
      this.getAdminListData();
    },

    methods: {
      getAdminListData (page = 1, limit = 10) {
        this.$http.get(`adminList?page=${page}&limit=${limit}`).then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.adminList = result.data.adminList;
            this.total = result.data.total;
          }
        }).catch(err => {
          console.log(err);
        });
      },

      changeNowPage (page = 1) {
        this.getAdminListData(page);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>