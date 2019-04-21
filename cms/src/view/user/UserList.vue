<template>
  <Card>
    <PageTitle icon="md-contact" title="用户列表" />
    <Table border ref="selection" :columns="columns" :data="userList" stripe />
    <Page @on-change="changeNowPage" :total="total" show-elevator style="margin:23px auto 8px; text-align:center;" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import Links from '_c/tables/links/links.vue';
  import Logos from '_c/tables/logos/logos.vue';
  import Status from '_c/tables/status/status.vue';

  import { formatDateTime } from '_u/time.js';

  export default {
    name: 'UserList',

    components: {
      PageTitle, Links, Logos, Status
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
            title: 'Avatar',
            key: 'avatar',
            render: (h, params) => {
              return h(Logos, {
                props: {
                  src: params.row.avatar ? `http://localhost:3000/img/avatar/${params.row.avatar}` : ''
                }
              });
            }
          },
          {
            title: '昵称',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/user/editUser?id=${params.row._id}`
                }
              }, params.row.name);
            }
          },
          {
            title: '邮箱',
            key: 'mail'
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
        userList: [],
        total: 0
      }
    },

    created () {
      this.getUserListData();
    },

    methods: {
      getUserListData (page = 1, limit = 10) {
        this.$http.get(`allUserList?page=${page}&limit=${limit}`).then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.userList = result.data.userList;
            this.total = result.data.total;
          }
        }).catch(err => {
          console.log(err);
        });
      },

      changeNowPage (page = 1) {
        this.getUserListData(page);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>