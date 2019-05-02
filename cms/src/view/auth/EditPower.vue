<template>
  <Card>
    <PageTitle icon="md-construct" title="权限管理" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">权限名称：</Col>
        <Col span="16">
          <Input v-model="name" placeholder="请输入权限名称..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">权限图标：</Col>
        <Col span="16">
          <Input v-model="icon" placeholder="请输入权限图标..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">权限路由：</Col>
        <Col span="16">
          <Input v-model="route" placeholder="请输入权限图标..." />
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
          <Button @click="savePower" type="primary">确定保存</Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditPower',

    components: {
      PageTitle
    },

    data () {
      return {
        id: '',
        name: '',
        icon: '',
        status: true
      }
    },

    created () {
      const id = this.$route.query.id;
      this.id = id ? id : '';
      if (id) {
        this.$http.get(`getPowerById?id=${id}`).then(({data}) => {
          if (data.status === 200) {
            this.name = data.data.name;
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },

    methods: {
      savePower () {
        if (this.name === '') {
          this.$Notice.error({
            title: '请输入权限名称'
          });
          return false;
        }

        let powerData = {
          name: this.name,
          powers: [],
          status: this.status
        };

        if (this.id) {
          powerData.id = this.id;
        }

        this.$http.put('savePower', powerData).then(res => {
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