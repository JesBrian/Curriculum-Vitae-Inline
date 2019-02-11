<template>
  <Card>
    <PageTitle icon="ios-people" title="管理员列表" />
    <Table border ref="selection" :columns="columns" :data="adminList" stripe />
    <Page :total="100" show-elevator style="margin:23px auto 8px; text-align:center;" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'AdminList',

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
            title: '创建时间',
            key: 'cTime',
            sortable: true
          },
          {
            title: '最后登录时间',
            key: 'lTime',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          }
        ],
        adminList: []
      }
    },

    created () {
      this.getAdminListData();
    },

    methods: {
      getAdminListData () {
        this.$http.get('adminList').then(res => {
          console.log(res);
          const result = res.data;
          if (result.status === 200) {
            this.adminList = result.data;
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>