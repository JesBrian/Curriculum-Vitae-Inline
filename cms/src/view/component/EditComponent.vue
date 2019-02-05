<template>
  <Card>
    <PageTitle icon="md-backspace" title="EditComponent" />

    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">组件名称：</Col>
      <Col span="16">
        <Input placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">是否启用：</Col>
      <Col span="16" style="line-height:30px;">
        <RadioGroup>
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
        <Button type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'EditComponent',

    components: {
      PageTitle
    },

    data () {
      return {
        componentConf: null
      }
    },

    created () {
      this.$localForage.getItem('componentConf').then(val => {
        if (val) {
          this.componentConf = val;
        } else {
          this.getComponentListConfData();
        }
      }).catch(err => {
        console.log(err);
      })
    },

    methods: {
      getComponentListConfData () {
        this.$http.get('componentConf').then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.$localForage.setItem('componentConf', result.data);
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>