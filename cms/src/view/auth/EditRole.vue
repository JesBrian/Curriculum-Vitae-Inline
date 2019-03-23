<template>
  <Card>
    <PageTitle icon="md-construct" title="EditFormat" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">角色昵称：</Col>
        <Col span="16">
          <Input v-model="name" placeholder="Enter something..." />
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
          <Button @click="saveRole" type="primary">确定保存</Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditRole',

    components: {
      PageTitle
    },

    data () {
      return {
        name: '',
        status: true
      }
    },

    methods: {
      saveRole () {
        if (this.name === '') {
          this.$Notice.error({
            title: '请输入角色昵称',
            desc: ''
          });
          return false;
        }

        let roleData = {
          name: this.name,
          powers: [],
          status: this.status
        };

        const id = this.$route.query.id;
        if (id) {
          roleData.id = id;
        }

        this.$http.put('saveRole', roleData).then(res => {
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