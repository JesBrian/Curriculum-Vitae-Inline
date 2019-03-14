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
              <Table border ref="selection" :columns="columns" :data="designListTrash" stripe />
              <Page @on-change="changeNowPage" :total="designTrashTotal" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'SelfWeb',

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
            sortable: true
          },
          {
            title: '名称',
            key: 'name',
            sortable: true
          },
          {
            title: '格式大小',
            key: 'size',
            sortable: true
          },
          {
            title: '标签',
            key: 'tags',
            sortable: true
          },
          {
            title: '创建时间',
            key: 'cTime',
            sortable: true
          },
          {
            title: '最后修改时间',
            key: 'mTime',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          }
        ],
        nowTab: 'true',
        designList: [],
        designTotal: 0,
        designListTrash: [],
        designTrashTotal: 0
      }
    },

    created () {
      this.getPersonalDesign();
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
        this.getUserListData(page);
      },

      /**
       * 获取个人简历
       * @param page
       * @param limit
       */
      getPersonalDesign (page = 1, limit = 10) {
        const status = (this.nowTab === 'true');
        this.$http.get(`getDesignListByUser?userId=${this.$store.state.userInfo.id}&status=${status}`).then(({data}) => {
          console.log(data);
          if (status) {
            this.designList = data.data.designList;
            this.designTotal = data.data.total;
          } else {
            this.designListTrash = data.data.designList;
            this.designTrashTotal = data.data.total;
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