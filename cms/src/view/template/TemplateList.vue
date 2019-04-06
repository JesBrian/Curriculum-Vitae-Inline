<template>
  <Card>
    <PageTitle icon="md-code-working" title="模板列表" />

    <Tabs @on-click="changeTemplateType" type="card">
      <TabPane v-for="(formatItem, categoryIndex) in formatCategory" :name="formatItem._id" :label="formatItem.name">
        <template v-if="nowTabIndex === categoryIndex">
          <Table border ref="selection" :columns="columns" :data="formatData[nowTabIndex]" stripe />
          <Page :total="100" show-elevator style="margin:23px auto 8px; text-align:center;" />
        </template>
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  import { formatDateTime } from '_u/time.js'

  export default {
    name: 'TemplateList',

    components: {
      PageTitle
    },

    data () {
      return {
        nowTabIndex: 0,
        formatCategory: [],
        formatData: [],
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '缩略图',
            key: 'logo'
          },
          {
            title: '名称',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h('span', {
                on: {
                  click: () => {
                    this.$router.push(`/EditResume?id=${params.row._id}`);
                  }
                }
              }, params.row.name);
            }
          },
          {
            title: '作者',
            key: 'author',
            sortable: true
          },
          {
            title: '系统预设',
            key: 'system',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          }
        ],
      }
    },

    created () {
      this.$http.get('formatList').then(({data}) => {
        if (data.status === 200) {
          this.formatCategory = data.data;
          this.getTemplateData();
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      changeTemplateType (formatCategoryId) {
        for (let i = this.formatCategory.length - 1; i >= 0; i--) {
          if (this.formatCategory[i]._id === formatCategoryId) {
            this.nowTabIndex = i;
            break;
          }
        }
        this.getTemplateData();
      },

      getTemplateData (page = 1, limit = 10) {
        this.$http.get(`getTemplateByFormat?formatId=${this.formatCategory[this.nowTabIndex]._id}&page=${page}&limit=${limit}`).then(({data}) => {
          if (data.status === 200) {
            console.log(data);
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>