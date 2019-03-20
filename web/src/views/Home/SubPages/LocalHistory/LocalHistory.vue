<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 本地历史
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="emptyRecords" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">清空记录</Button>
        <Button @click="openLocalDesign" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">本地打开</Button>
      </div>
    </PathNavbar>

    <div style="padding:0 18px 0 38px;">
      <Collapse v-model="openCollapse">
        <Panel v-for="item in historyRecord" :name="item.label">
          {{item.label}}
          <div slot="content">
            <CellGroup>
              <template v-if="item.list.length === 0" >
                暂无历史纪录
              </template>
              <template v-else v-for="design in item.list">
                <Cell @dblclick.native="openDesign(design.id)" :title="design.name ? design.name : '未命名'" :label="design.time" >
                  <Icon @click="" type="md-trash" size="20" slot="extra" />
                </Cell>
                <Divider class="cell-divider" />
              </template>
            </CellGroup>
          </div>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'LocalHistory',

    components: {
      PathNavbar
    },

    data () {
      return {
        openCollapse: ['今天', '最近三天'],
        historyRecord: [
          {label: '今天', list: []},
          {label: '最近三天', list: []},
          {label: '最近一周', list: []},
          {label: '最近一月', list: []},
          {label: '更久以前', list: []}
        ]
      }
    },

    created () {
      this.$localForage.getItem('designHistory').then(res => {
        this.handleHistoryRecord(res);
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      openLocalDesign () {
      },

      openDesign (designId = '') {
        this.$router.push(`/EditResume?id=${designId}`);
      },

      /**
       * 处理历史纪录
       * @param records
       */
      handleHistoryRecord (records = []) {
        const toDayTimestamp = new Date().setHours(0, 0, 0, 0);
        const dateLine = [
          9999999999999,
          toDayTimestamp,
          toDayTimestamp - 86400000 * 3,
          toDayTimestamp - 86400000 * 7,
          toDayTimestamp - 86400000 * 30,
          0
        ];

        for (let record of records) {
          for (let i = dateLine.length - 2; i >= 0; i--) {
            if ((record.time > dateLine[i + 1]) && (record.time < dateLine[i])) {
              record.time = this.timestampToStr(record.time);
              this.historyRecord[i].list.push(record);
              break;
            }
          }
        }
      },

      /**
       * 时间戳转日期字符串
       * @param timestamp
       */
      timestampToStr(timestamp) {
        const date = new Date(timestamp);
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        const h = date.getHours();
        const minutes = date.getMinutes();
        return y + '-' + (m > 10 ? m : '0' + m) + '-' + (d > 10 ? d : '0' + d) + ' ' + (h > 10 ? h : '0' + h) + ':' + (minutes > 10 ? minutes : '0' + minutes);
      },

      /**
       * 清空记录
       */
      emptyRecords () {
        for (let category of this.historyRecord) {
          category.list = [];
        }
        this.$localForage.setItem('designHistory', []);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-divider {
    margin: 8px auto;
  }
</style>