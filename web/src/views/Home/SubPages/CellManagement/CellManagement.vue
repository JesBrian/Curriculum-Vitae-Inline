<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 组件管理
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="createComponent" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">创建组件</Button>
      </div>
    </PathNavbar>

    <div style="padding:8px 18px 0 38px; position:relative;">
      <Input search placeholder="请输入关键字..." style="width:238px; top:16px; right:26px; position:absolute; z-index: 9;" />
      <Card>
        <Tabs @on-click="switchTabs" type="card">
          <TabPane name="self" label="个人组件">
            <template v-if="nowTab === 'self'">
              <Table border ref="selection" :columns="columns" :data="componentList" stripe />
              <Page @on-change="changeNowPage" :total="totalNum" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>

          <TabPane name="collection" label="收藏组件">
            <template v-if="nowTab === 'collection'">
              <Table border ref="selection" :columns="columns" :data="componentList" stripe />
              <Page @on-change="changeNowPage" :total="totalNum" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>

          <TabPane name="extend" label="网络组件">
            <template v-if="nowTab === 'extend'">
              <Scroll id="componentScrollContainer" :height="scrollContainerH - 240" :distance-to-edge="[0, -20]" :on-reach-bottom="handleReachBottom">
                <Card v-for="(item, index) in componentList" :key="index" style="width: 158px; height: 188px; margin:8px; display: inline-block;">
                  <p slot="title">{{item.name}}</p>
                  <a href="javascript:void(0)" slot="extra" @click.prevent="collectionComponent(index)">
                    <Icon :type="item.cId ? 'md-heart' : 'md-heart-outline'" />
                  </a>
                  <img :src="`http://localhost:3000/img/component/logo/${item.logo}`" style="width: 105px; height: 105px; margin: 0 10px; border-radius: 5px; box-shadow: 0 0 3px -2px #383838;" />
                </Card>
              </Scroll>
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
    name: 'CellManagement',

    components: {
      PathNavbar
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
                  src: params.row.logo ? `http://localhost:3000/img/component/logo/${params.row.logo}` : ''
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
                  url: `/home/EditComponent?id=${params.row._id}`
                }
              }, params.row.name);
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
            title: '发布时间',
            key: 'pTime',
            sortable: true,
            render: (h, params) => {
              return h('span', {
              }, formatDateTime(params.row.pTime));
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

        page: 1,
        nowTab: 'self',
        totalNum: 0,
        componentList: [],
      }
    },

    watch: {
      nowTab (nVal) {
        this.getComponentListData();
      }
    },

    created () {
      this.getComponentListData();
      this.scrollContainerH = document.querySelector('#homeContainer').offsetHeight;
    },


    methods: {
      createComponent () {
        this.$router.push('/home/EditComponent');
      },

      switchTabs (nowTab = 'self') {
        this.componentList = [];
        this.page = 1;
        this.nowTab = nowTab;
      },

      changeNowPage (page = 1) {
        this.getComponentListData(page);
      },

      getComponentListData (page = 1, limit = 10) {
        this.$http.get(`${this.nowTab}ComponentList?page=${page}&limit=${this.nowTab === 'extend' ? 20 : limit}&userId=${this.$store.state.userInfo.id}`).then(({data}) => {
          if (data.status === 200) {
            this.componentList = data.data.componentList;
            this.totalNum = data.data.total;
          }
        }).catch(err => {
          console.log(err);
        });
      },

      handleReachBottom () {
        return new Promise(resolve => {
          setTimeout(() => {
            this.page++;
            this.$http.get(`${this.nowTab}ComponentList?page=${this.page}&limit=20&userId=${this.$store.state.userInfo.id}`).then(({data}) => {
              if (data.status === 200) {
                const result = data.data.componentList;
                for (let i = 0, len = result.length; i < len; i++) {
                  this.componentList.push(result[i]);
                }
              }
            }).catch(err => {
              console.log(err);
            });
            resolve();
          }, 2000);
        });
      },

      collectionComponent (index = -1) {
        const item = this.componentList[index];
        let data = {};
        if (item.cId) {
          data.cId = item.cId;
        } else {
          data = {
            userId: this.$store.state.userInfo.id,
            componentId: item._id
          };
        }
        this.$http.put('collectionComponentOpt', data).then(({data}) => {
          if (data.status === 200) {
            if (item.cId) item.cId = '';
            else this.$set(item, 'cId', data.data);
            this.$Message.success(data.msg);
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