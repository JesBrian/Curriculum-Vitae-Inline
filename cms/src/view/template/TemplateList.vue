<template>
  <Card>
    <PageTitle icon="md-code-working" title="模板列表" />

    <Tabs @on-click="changeTemplateType" type="card">
      <TabPane v-for="(formatItem, categoryIndex) in formatCategory" :name="formatItem._id" :label="formatItem.name">
        <template v-if="nowTabIndex === categoryIndex">
          <Table v-if="isShow" border ref="selection" :columns="columns" :data="formatItem.templateList" stripe />
          <Page :total="formatItem.total" show-elevator style="margin:23px auto 8px; text-align:center;" />
        </template>
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'
  import Logos from '_c/tables/logos/logos.vue';
  import Links from '_c/tables/links/links.vue';
  import Status from '_c/tables/status/status.vue';

  import { formatDateTime } from '_u/time.js'

  export default {
    name: 'TemplateList',

    components: {
      Links, Status, PageTitle
    },

    data () {
      return {
        isShow: false,
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
            key: 'logo',
            render: (h, params) => {
              return h(Logos, {
                props: {
                  src: params.row.logo ? `http://localhost:3000/img/template/logo/${params.row.logo}` : ''
                }
              });
            }
          },
          {
            title: '名称',
            key: 'name',
            sortable: true,
            render: (h, params) => {
              return h(Links, {
                props: {
                  url: `/template/editTemplate?id=${params.row._id}`
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
      }
    },

    created () {
      this.$http.get('formatList').then(({data}) => {
        if (data.status === 200) {
          this.formatCategory = data.data;
          this.formatCategory.forEach(item => {
            item.templateList = [];
            item.total = 0;
          });
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
        this.isShow = false;
        const nowFotmat = this.formatCategory[this.nowTabIndex];
        this.$http.get(`getTemplateByFormat?formatId=${nowFotmat._id}&page=${page}&limit=${limit}`).then(({data}) => {
          if (data.status === 200) {
            const result = data.data;
            nowFotmat.templateList = [];
            nowFotmat.templateList.push(...result.templateList);
            nowFotmat.total = result.total;
            this.isShow = true;
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