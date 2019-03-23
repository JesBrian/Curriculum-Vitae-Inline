<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <!--<Row :gutter="20" style="margin-top: 10px;">-->
      <!--<i-col :md="24" :lg="8" style="margin-bottom: 20px;">-->
        <!--<Card shadow>-->
          <!--<chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>-->
        <!--</Card>-->
      <!--</i-col>-->
    <!--</Row>-->
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 0, color: '#2d8cf0' },
        { title: '新增组件', icon: 'md-person-add', count: 0, color: '#9A66E4' },
        { title: '新增设计', icon: 'md-person-add', count: 2, color: '#E46CBB' },
        { title: '累计点击', icon: 'md-locate', count: 10, color: '#19be6b' },
        { title: '分享统计', icon: 'md-share', count: 0, color: '#ed3f14' },
      ],
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
