<template>
  <Card>
    <PageTitle icon="ios-grid-outline" title="EditFormat" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">真实姓名：</Col>
        <Col span="16">
          <Input v-model="trueName" placeholder="Enter something..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">已注册用户：</Col>
        <Col span="16">
          <Switch v-model="hasRegisterUser">
            <span slot="open">是</span>
            <span slot="close">否</span>
          </Switch>
        </Col>
      </Row>

      <Row v-show="hasRegisterUser" style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">对应用户：</Col>
        <Col span="16">
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">所属角色：</Col>
        <Col span="16">
          <Select v-model="roleId" style="width:200px">
            <Option v-for="item in roleList" :value="item._id" :key="item._id">{{ item.name }}</Option>
          </Select>
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">是否启用：</Col>
        <Col span="16" style="line-height:33px;">
          <Switch v-model="status" size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
          </Switch>
        </Col>
      </Row>

      <Row style="margin-top:23px;">
        <Col span="12" style="text-align:center;">
          <Button type="primary">取消返回</Button>
        </Col>
        <Col span="12" style="text-align:center;">
          <Button @click="saveAdmin" type="primary">确定保存</Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditAdmin',

    components: {
      PageTitle
    },

    data () {
      return {
        roleList: [],
        trueName: '',
        hasRegisterUser: false,
        userId: '',
        roleId: '',
        status: true
      }
    },

    created () {
      this.$http.get('getRoleList?status=true').then(res => {
        const result = res.data;
        if (result.status === 200) {
          this.roleList = result.data;
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      saveAdmin () {
        if (this.trueName === '') {
          this.$Notice.error({
            title: '请输入真实姓名',
            desc: ''
          });
          return false;
        }
        if (this.roleId === '') {
          this.$Notice.error({
            title: '请选择账户所属角色',
            desc: ''
          });
          return false;
        }

        let adminData = {
          trueName: this.trueName,
          userId: this.userId,
          roleId: this.roleId,
          status: this.status
        };

        const id = this.$route.query.id;
        if (id) {
          adminData.id = id;
        }

        this.$http.put('saveAdmin', adminData).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }
</script>

<style lang="less" scoped>

</style>