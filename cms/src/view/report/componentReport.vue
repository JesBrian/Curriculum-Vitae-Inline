<template>
  <Card>
    <PageTitle icon="ios-browsers" title="组件报表" />
    <div style="padding-bottom: 15px;">
      <Row style="margin-bottom: 15px;">
        <Col span="4">
          开始时间
        </Col>
        <Col span="8">
          <DatePicker v-model="start" type="datetime" placeholder="Select date" placement="bottom" style="width: 200px"></DatePicker>
        </Col>
        <Col span="4">
          截至时间
        </Col>
        <Col span="8">
          <DatePicker v-model="end" type="datetime" placeholder="Select date" placement="bottom" style="width: 200px"></DatePicker>
        </Col>
      </Row>
      <Row style="margin-bottom: 15px;">
        <Col span="4">
          组件类型
        </Col>
        <Col span="8">
          <Select v-model="category" style="width: 200px">
            <Option value="system">系统预设</Option>
            <Option value="extend">用户上传</Option>
          </Select>
        </Col>
      </Row>
      <Row style="margin-bottom: 15px;">
        <Col span="12" style="text-align:center;">
          <Button @click="reset" type="primary">重置条件</Button>
        </Col>
        <Col span="12" style="text-align:center;">
          <Button @click="submitSearch" type="primary">确定查询</Button>
        </Col>
      </Row>
      <Divider class="page-title-divider" />
    </div>

    <ChartPie v-if="reportData.length" style="height: 300px;" :value="reportData" text="组件使用情况"/>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import { ChartPie } from '_c/charts'

  export default {
    name: 'componentReport',

    components: {
      PageTitle,
      ChartPie
    },

    data () {
      return {
        start: '',
        end: '',
        category: '',

        reportData: []
      }
    },

    methods: {
      reset () {
        this.start = this.end = '';
      },

      submitSearch () {
        this.reportData = [];
        this.$http.get(`getComponentReport?start=${this.start}&end=${this.end}&category=${this.category}`).then(({data}) => {
          if (data.status === 200) {
            this.reportData = data.data;
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>