<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 设置配置
      </BreadcrumbItem>
    </PathNavbar>

    <div style="padding:8px 18px 0 38px; position:relative;">
      <Card>
        <Tabs type="card">
          <TabPane label="账户设置" style="padding:0 38px;">
            <Row style="margin-bottom:23px; line-height:33px;">
              <Col span="8" style="text-align:left;">用户名：</Col>
              <Col span="16">
                <Input v-model="name" placeholder="Enter something..." />
              </Col>
            </Row>

            <Row style="margin-bottom:23px; line-height:33px;">
              <Col span="8" style="text-align:left;">用户密码：</Col>
              <Col span="16">
                <Input v-model="password" type="password" placeholder="Enter something..." />
              </Col>
            </Row>

            <Row style="margin-bottom:23px; line-height:33px;">
              <Col span="8" style="text-align:left;">确认密码：</Col>
              <Col span="16">
                <Input v-model="rePassword" type="password" placeholder="Enter something..." />
              </Col>
            </Row>

            <Row style="margin-bottom:23px; line-height:33px;">
              <Col span="8" style="text-align:left;">邮件地址：</Col>
              <Col span="16">
                <Input v-model="mail" placeholder="Enter something..." />
              </Col>
            </Row>

            <Row style="margin:23px 0 8px;">
              <Col span="12" style="text-align:center;">
                <Button type="primary">取消返回</Button>
              </Col>
              <Col span="12" style="text-align:center;">
                <Button @click="saveUserInfo" type="primary">确定保存</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane label="系统配置">
          </TabPane>
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'SystemConfig',

    components: {
      PathNavbar
    },

    data () {
      return {
        name: '',
        avatar: '',
        mail: '',
        password: '',
        rePassword: ''
      }
    },

    created () {
      this.$http.get(`getUserById?id=${this.$store.state.userInfo.id}`).then(({data}) => {
        if (data.status === 200) {
          const userInfo = data.data;
          this.name = userInfo.name;
          this.avatar = userInfo.avatar;
          this.mail = userInfo.mail;
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      saveUserInfo () {
        let saveData = {
          id: this.$store.state.userInfo.id,
          userInfo: {
            name: this.name,
            mail: this.mail
          }
        };
        if (this.password === '') saveData.password = this.password;
        if (this.avatar === '') saveData.avatar = this.avatar;
        this.$http.put('updateUser', saveData).then(({data}) => {
          if (data === 200) {
            // 修改 vuex && localForage
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>