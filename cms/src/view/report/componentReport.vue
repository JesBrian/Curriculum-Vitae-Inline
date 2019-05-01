<template>
  <Card>
    <PageTitle icon="ios-browsers" title="组件报表" />
    <div style="padding-bottom: 15px;">
      <Row style="margin-bottom: 15px;">
        <Col span="4">
          开始时间
        </Col>
        <Col span="10">
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="10">
          <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
      </Row>
      <Row style="margin-bottom: 15px;">
        <Col span="4">
          截至时间
        </Col>
        <Col span="10">
          <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="10">
          <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
      </Row>
      <Row style="margin-bottom: 15px;">
        <Col span="12" style="text-align:center;">
          <Button type="primary">重置条件</Button>
        </Col>
        <Col span="12" style="text-align:center;">
          <Button type="primary">确定查询</Button>
        </Col>
      </Row>
      <Divider class="page-title-divider" />
    </div>

    <ChartPie v-if="pieData.length" style="height: 300px;" :value="pieData" text="用户访问来源"/>
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
        pieData: [
        ]
      }
    },

    created () {
      setTimeout(() => {
        this.pieData = [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      }, 2200)
    }
  }
</script>

<style scoped>

</style>