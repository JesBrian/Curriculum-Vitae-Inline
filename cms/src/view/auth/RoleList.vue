<template>
  <Card>
    <PageTitle icon="md-school" title="管理员角色列表" />
    <Table border ref="selection" :columns="columns" :data="roleList" stripe />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import Links from '_c/tables/links/links.vue';
  import Status from '_c/tables/status/status.vue';
  import { formatDateTime } from '_u/time.js';

  export default {
    name: 'RoleList',

    components: {
      PageTitle, Links
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
            title: '角色名',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/auth/editRole?id=${params.row._id}`
                }
              }, params.row.name);
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
        roleList: []
      }
    },

    created () {
      this.getRoleListData();
    },

    methods: {
      getRoleListData () {
        this.$http.get('getRoleList').then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.roleList = result.data;
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