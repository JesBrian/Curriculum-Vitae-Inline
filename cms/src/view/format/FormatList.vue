<template>
  <Card>
    <PageTitle icon="ios-grid" title="格式列表" />

    <DragableTable
        v-model="tableData"
        :columns-list="columnsList"
        @on-start="handleOnstart"
        @on-end="handleOnend"
    ></DragableTable>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import DragableTable from '_c/dragable-table/DragableTable.vue';

  export default {
    name: 'FormatList',

    components: {
      PageTitle, DragableTable
    },

    data () {
      return {
        columnsList: [
          {
            title: '序号',
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '格式简称',
            key: 'name'
          },
          {
            title: '格式图标',
            key: 'logo'
          },
          {
            title: '格式规格',
            key: 'size'
          },
          {
            title: '是否实验性功能',
            key: 'try'
          },
          {
            title: '状态',
            key: 'status'
          }
        ],
        tableData: [],
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
      this.$http.get('').then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
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