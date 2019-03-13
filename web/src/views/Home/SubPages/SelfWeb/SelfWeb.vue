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
        <Tabs type="card">
          <TabPane label="个人简历">
            <template>vavdaas</template>
          </TabPane>
          <TabPane label="回收站">
            <template>标签二的内容</template>
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
        designList: [],
        designListTrash: []
      }
    },

    created () {
      this.getPersonalDesign();
    },

    methods: {
      createDesign () {
        this.$router.push('/Home/CreateResume')
      },

      /**
       * 获取个人简历
       * @param status
       */
      getPersonalDesign (status = true) {
        this.$http.get(`getDesignListByUser?userId=${this.$store.state.userInfo.id}&status=${status}`).then(({data}) => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>