<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 账号存储
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="createDesign" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">创建简历</Button>
      </div>
    </PathNavbar>

    <div style="padding:8px 18px 0 38px; position:relative;">
      <Input search placeholder="请输入关键字..." style="width:238px; top:16px; right:26px; position:absolute; z-index: 9;" />
      <Card>
        <Tabs @on-click="switchTabs" type="card">
          <TabPane name="true" label="个人简历">
            <template v-if="nowTab === 'true'">
              <Table border ref="selection" :columns="columns" :data="designList" stripe />
              <Page @on-change="changeNowPage" :total="designTotal" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>
          <TabPane name="false" label="回收站">
            <template v-if="nowTab === 'false'">
              <Table border ref="selection" :columns="columns" :data="designList" stripe />
              <Page @on-change="changeNowPage" :total="designTotal" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'
  import Links from '../../../../components/Table/Links/Links.vue'
  import Logos from '../../../../components/Table/Logos/Logos.vue'
  import Status from '../../../../components/Table/Status/Status.vue'

  import { formatDateTime } from '../../../../util/time.js'

  export default {
    name: 'SelfWeb',

    components: {
      PathNavbar, Links, Logos, Status
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
            title: '缩略图',
            key: 'logo',
            render: (h, params) => {
              return h(Logos, {
                props: {
                  src: params.row.logo ? `http://localhost:3000/img/design/logo/${params.row.logo}` : ''
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
                  url: `/EditResume?id=${params.row._id}`
                }
              }, params.row.name);
            }
          },
          {
            title: '格式大小',
            key: 'size',
            render: (h, params) => {
              return h('span', {
              }, `${params.row.size[0]} x ${params.row.size[1]}`);
            }
          },
          {
            title: '标签',
            key: 'tags',
            render: (h, params) => {
              const tagsLen = params.row.tags.length - 1;
              return h('div', params.row.tags.map((tag, index) => {
                let renderArr = [
                  h('span', {
                  }, tag)
                ];
                if (tagsLen !== index) {
                  renderArr.push(
                    h('span', {
                    }, ',')
                  );
                }
                return renderArr;
              }));
            }
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
            title: '最后修改时间',
            key: 'mTime',
            sortable: true,
            render: (h, params) => {
              return h('span', {
              }, formatDateTime(params.row.mTime));
            }
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
        nowTab: 'true',
        designList: [],
        designTotal: 0
      }
    },

    computed: {
      userInfo () {
        return this.$store.state.userInfo;
      }
    },

    watch: {
      userInfo (nVal) {
        if (nVal) {
          this.getPersonalDesign();
        }
      }
    },

    created () {
      if (this.$store.state.userInfo) {
        this.getPersonalDesign();
      }
    },

    methods: {
      createDesign () {
        this.$router.push('/Home/CreateResume')
      },

      switchTabs (status = 'true') {
        if (this.nowTab === status) return;
        this.nowTab = status;
        this.getPersonalDesign(status);
      },

      changeNowPage (page = 1) {
        this.getPersonalDesign(page);
      },

      /**
       * 获取个人简历
       * @param page
       * @param limit
       */
      getPersonalDesign (page = 1, limit = 10) {
        const status = (this.nowTab === 'true');
        this.$http.get(`getDesignListByUser?userId=${this.$store.state.userInfo.id}&status=${status}&page=${page}`).then(({data}) => {
          this.designList = data.data.designList;
          this.designTotal = data.data.total;
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>