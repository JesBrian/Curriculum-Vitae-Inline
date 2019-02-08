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
          <RadioGroup v-model="hasRegisterUser">
            <Radio label="是" style="margin-right:20px;" />
            <Radio label="否" style="margin-right:20px;" />
          </RadioGroup>
        </Col>
      </Row>

      <Row v-show="hasRegisterUser === '是'" style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">对应用户：</Col>
        <Col span="16">
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">是否启用：</Col>
        <Col span="16" style="line-height:33px;">
          <RadioGroup v-model="status">
            <Radio label="启用" style="margin-right:20px;" />
            <Radio label="禁用" style="margin-right:20px;" />
          </RadioGroup>
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
        trueName: '',
        hasRegisterUser: '否',
        status: '启用'
      }
    },

    methods: {
      saveAdmin () {
      },

      createAdmin () {
      },

      updateAdmin () {
      }
    }
  }
</script>

<style scoped>

</style>