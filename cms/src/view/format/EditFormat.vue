<template>
  <Card>
    <PageTitle icon="ios-grid-outline" title="EditFormat" />

    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式名称：</Col>
      <Col span="16">
        <Input v-model="name" placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式宽高：</Col>
      <Col span="16">
        <InputNumber v-model="size[0]" :min="1"></InputNumber>
        <span style="margin:0 12px;">X</span>
        <InputNumber v-model="size[1]" :min="1"></InputNumber>
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">是否启用：</Col>
      <Col span="16" style="line-height:30px;">
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
        <Button @click="saveFormat" type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditFormat',

    components: {
      PageTitle
    },

    data () {
      return {
        name: '',
        size: [1, 1],
        logo: '',
        status: '禁用'
      }
    },

    methods: {
      saveFormat () {
        let errTips = '';
        if (this.name === '') {
          this.$Notice.error({
            title: '请输入格式名称',
            desc: ''
          });
          return false;
        }

        const formatData = {
          name: this.name,
          size: this.size,
          log: this.logo,
          status: this.status
        };
        this.$http.put('saveFormat', formatData).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>