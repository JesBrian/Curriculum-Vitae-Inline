<template>
  <Card>
    <PageTitle icon="md-construct" title="创建用户" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">用户昵称：</Col>
        <Col span="16">
          <Input v-model="name" placeholder="Enter something..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">用户密码：</Col>
        <Col span="16">
          <Input v-model="password" type="password" placeholder="Enter something..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">确认密码：</Col>
        <Col span="16">
          <Input v-model="rePassword" type="password" placeholder="Enter something..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">邮件地址：</Col>
        <Col span="16">
          <Input v-model="mail" placeholder="Enter something..." />
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
          <Button @click="saveUser" type="primary">确定保存</Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditUser',


    components: {
      PageTitle
    },

    data () {
      return {
        name: '',
        mail: '',
        password: '',
        rePassword: '',
        status: true
      }
    },

    methods: {
      saveUser () {
      }
    }
  }
</script>

<style scoped>

</style>