<template>
  <Card>
    <PageTitle icon="md-backspace" title="FormatList" />

    <DragableTable
        v-model="tableData"
        :columns-list="columnsList"
        @on-start="handleOnstart1"
        @on-end="handleOnend1"
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
        columnsList: [],
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
      // 可在此从服务端获取表格数据
      this.getData();
    },

    methods: {
      handleOnstart1 (from) {
        this.table1.oldIndex = from;
        this.table1.hasDragged = true;
        this.table1.isDragging = true;
      },
      handleOnend1 (e) {
        this.table1.isDragging = false;
        this.table1.draggingRecord.unshift({
          from: e.from + 1,
          to: e.to + 1
        });
      },
      getData () {
        this.columnsList = [
          {
            title: '序号',
            type: 'index',
            width: 80,
            align: 'center'
          },
          {
            title: '待办事项',
            key: 'todoItem'
          },
          {
            title: '备注',
            key: 'remarks'
          },
          {
            title: '拖拽',
            key: 'drag',
            width: 90,
            align: 'center',
            render: (h) => {
              return h(
                'Icon',
                {
                  props: {
                    type: 'arrow-move',
                    size: 24
                  }
                }
              );
            }
          }
        ];
        this.tableData = [
          {
            todoItem: '明天去后海玩',
            remarks: '估计得加班'
          },
          {
            todoItem: '后天去和妹子看电影',
            remarks: '可能没妹子'
          },
          {
            todoItem: '大后天去吃海天盛筵',
            remarks: '没钱就不去了'
          },
          {
            todoItem: '周末去看电影',
            remarks: '估计得加班'
          },
          {
            todoItem: '下个月准备回家看父母',
            remarks: '估计得加班'
          },
          {
            todoItem: '该买回家的票了',
            remarks: '可能没票了'
          },
          {
            todoItem: '过年不回家和父母视频聊天',
            remarks: '一定要记得'
          },
          {
            todoItem: '去车站接父母一起在北京过年',
            remarks: 'love'
          }
        ];
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>