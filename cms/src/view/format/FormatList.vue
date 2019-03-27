<template>
  <Card>
    <PageTitle icon="ios-browsers" title="格式列表" />

    <DragableTable
        v-model="formatData"
        :columns-list="columnsList"
        @on-start="handleOnstart"
        @on-end="handleOnend"
    ></DragableTable>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import DragableTable from '_c/dragable-table/DragableTable.vue';
  import Links from '_c/tables/links/links.vue';
  import Logos from '_c/tables/logos/logos.vue';
  import Status from '_c/tables/status/status.vue';

  export default {
    name: 'FormatList',

    components: {
      PageTitle, DragableTable, Links, Logos
    },

    data () {
      return {
        columnsList: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '格式名',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/format/editFormat?id=${params.row._id}`
                }
              }, params.row.name);
            }
          },
          {
            title: '格式图标',
            key: 'logo',
            render: (h, params) => {
              return h(Logos, {
                props: {
                  src: params.row.logo ? `http://localhost:3000/img/format/${params.row.logo}` : ''
                }
              });
            }
          },
          {
            title: '格式规格',
            key: 'size'
          },
          {
            title: '状态',
            sortable: true,
            key: 'status',
            render: (h, params) => {
              return h(Status, {
                props: {
                  status: params.row.status
                }
              });
            }
          }
        ],
        formatData: [],
        table1: {
          hasDragged: false,
          isDragging: false,
          oldIndex: 0,
          newIndex: 0,
          draggingRecord: []
        }
      };
    },

    created () {
      this.$http.get('allFormatList').then(({data}) => {
        if (data.status === 200) {
          this.formatData = data.data;
          this.$localForage.setItem('formatList', data.data)
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      handleOnstart (from) {
        this.table1.oldIndex = from;
        this.table1.hasDragged = true;
        this.table1.isDragging = true;
      },
      handleOnend (e) {
        this.table1.isDragging = false;
        this.table1.draggingRecord.unshift({
          from: e.from + 1,
          to: e.to + 1
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>