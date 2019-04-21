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
        {title: '用户总数', icon: 'md-person-add', count: 0, color: '#2d8cf0'},
        {title: '格式总数', icon: 'md-share', count: 0, color: '#ed3f14'},
        {title: '模板总数', icon: 'md-locate', count: 0, color: '#19be6b'},
        {title: '组件总数', icon: 'md-person-add', count: 0, color: '#9A66E4'},
        {title: '简历总数', icon: 'md-person-add', count: 0, color: '#E46CBB'},
      ]
    }
  },

  created () {
    this.$http.get('totalStatistical').then(({data}) => {
      if (data.status === 200) {
        const reportData = data.data;
        for (let i = 0, len = reportData.length; i < len; i++) {
          this.inforCardData[i].count = reportData[i];
        }
      }
    }).catch(err => {
      console.log(err);
    })
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
