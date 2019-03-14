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
          <TabPane name="personal" label="个人组件">
            <template v-if="nowTab === 'personal'">
              <Table border ref="selection" :columns="columns" :data="componentList" stripe />
              <Page @on-change="changeNowPage" :total="componentTotal" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>
          <TabPane name="collection" label="收藏组件">
            <template v-if="nowTab === 'collection'">
              <Table border ref="selection" :columns="columns" :data="componentList" stripe />
              <Page @on-change="changeNowPage" :total="componentTotal" show-elevator style="margin:23px auto 8px; text-align:center;" />
            </template>
          </TabPane>
          <TabPane name="net" label="网络组件">
            <template v-if="nowTab === 'net'">
              这里可能会使用瀑布流 [ 错了，是一定会，也是必须使用 ]
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
    name: 'CellManagement',

    components: {
      PathNavbar
    },

    data () {
      return {
        nowTab: 'personal',
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
            title: '发布时间',
            key: 'mTime',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          }
        ],
        componentList: [],
        componentTotal: 0
      }
    },

    methods: {
      createComponent () {
        this.$router.push('/EditComponent');
      },

      switchTabs (nowTab = 'personal') {
        this.nowTab = nowTab;
      },

      changeNowPage (page = 1) {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>