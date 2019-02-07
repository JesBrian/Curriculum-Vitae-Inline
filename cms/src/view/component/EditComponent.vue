<template>
  <Card>
    <PageTitle icon="md-backspace" title="EditComponent" />

    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">组件名称：</Col>
      <Col span="16">
        <Input v-model="name" placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">组件Logo：</Col>
      <Col span="16">
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">组件标签：</Col>
      <Col span="16">
        <input-tag v-model="tags"></input-tag>
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">是否发布：</Col>
      <Col span="16" style="line-height:30px;">
        <RadioGroup v-model="status">
          <Radio label="发布" style="margin-right:20px;" />
          <Radio label="待发布" style="margin-right:20px;" />
        </RadioGroup>
      </Col>
    </Row>
    <Row style="margin-top:23px;">
      <Col span="12" style="text-align:center;">
        <Button type="primary">取消返回</Button>
      </Col>
      <Col span="12" style="text-align:center;">
        <Button @click="saveComponent" type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import InputTag from '_c/input-tag/input-tag.vue'
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'EditComponent',

    components: {
      InputTag, PageTitle
    },

    data () {
      return {
        componentConf: null,
        name: '',
        logo: '',
        tags: [],
        status: '待发布',
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
      },

      saveComponent () {
        if (this.checkComponentDataFill() !== '') {
          return false;
        }
        const componentData = {
        }
      },

      /**
       * 检查组件配置数据是否填写完整
       */
      checkComponentDataFill () {
      }
    }
  }
</script>

<style lang="less" scoped>

</style>