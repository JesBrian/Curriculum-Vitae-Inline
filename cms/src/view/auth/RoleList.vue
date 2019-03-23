<template>
  <Card>
    <PageTitle icon="md-school" title="管理员角色列表" />
    <Table border ref="selection" :columns="columns" :data="roleList" stripe />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import { formatDateTime } from '_u/time.js';

  export default {
    name: 'RoleList',

    components: {
      PageTitle
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
            title: 'Name',
            key: 'name',
            sortable: true
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
            sortable: true
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
          console.log(res);
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