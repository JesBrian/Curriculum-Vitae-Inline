<template>
  <Card>
    <PageTitle icon="md-speedometer" title="操作日志" />

    <Table border :columns="columns6" :data="data5"></Table>
    <Page :total="totalCount" show-elevator style="margin:23px auto 8px; text-align:center;" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'OperationLog',

    components: {
      PageTitle
    },

    data () {
      return {
        totalCount: 33,
        columns6: [
          {
            title: 'Date',
            key: 'date'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: '类型',
            key: 'category',
            filters: [
              {
                label: '用户相关',
                value: 'London'
              },
              {
                label: '管理员相关',
                value: 'Sydney'
              },
              {
                label: '权限相关',
                value: 'New York'
              },
              {
                label: '格式相关',
                value: 'London'
              },
              {
                label: '模板相关',
                value: 'Sydney'
              },
              {
                label: '组件相关',
                value: 'New York'
              }
            ],
            filterMethod (value, row) {
              return row.category.indexOf(value) > -1;
            }
          }
        ],
        data5: [
          {
            name: 'John Brown',
            category: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            category: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            category: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            category: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
      }
    }
  }
</script>

<style lang="ss" scoped>

</style>