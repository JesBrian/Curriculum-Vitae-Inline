<template>
  <Card>
    <PageTitle icon="ios-people" title="用户列表" />
    <Table border ref="selection" :columns="columns" :data="userList" stripe />
    <Page @on-change="changeNowPage" :total="total" show-elevator style="margin:23px auto 8px; text-align:center;" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'UserList',

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
            title: 'Avatar',
            key: 'avatar'
          },
          {
            title: 'Mail',
            key: 'mail',
            sortable: true
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
          console.log(res);
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

<style lang="scss" scoped>

</style>