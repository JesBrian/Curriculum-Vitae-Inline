<template>
  <Card shadow style="width: 628px; height: 408px;">
    <Row :gutter="32">
      <Col span="24" class="demo-tabs-style1">
        <Tabs>
          <TabPane label="登录">
            <Form ref="Login" class="signin" style="margin-top:30px">
              <FormItem prop="mobile">
                <Input type="text" placeholder="输入手机号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
                <!--<p class="error-text" v-show="Login.error.mobile">{{Login.error.mobile}}</p>-->
              </FormItem>
              <FormItem prop="password">
                <Input type="password" placeholder="输入密码">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
                <!--<p class="error-text" v-show="Login.error.password">{{Login.error.password}}</p>-->
              </FormItem>
              <FormItem style="text-align:center">
                <!--<p class="error-text" v-show="Login.error.all">{{Login.error.all}}</p>-->
                <Button type="primary" @click="loginSubmit('Login')" style="width:60%;font-size:16px">登录</Button>
              </FormItem>
            </Form>

            <ul class="form other-form flexa">
              <li>
                <h5>使用第三方帐号登录</h5>
              </li>
              <li class="other-login">
                <!--<a class="qq" href="http://shop.1234.com:8001/login/qq/"><img src="./img/qq.png" alt="" class="qqwximg"></a>-->
                <!--<a class="sina" href="http://shop.1234.com:8001/login/weibo/"><img src="./img/zfb.png" alt="" class="qqwximg"></a>-->
                <!--<a class="weixin" href="http://shop.1234.com:8001/login/weixin/"><img src="./img/wx.png" alt="" class="qqwximg"></a>-->
              </li>
            </ul>
          </TabPane>
          <TabPane label="注册">
            <Form ref="Register" class="signup" style="margin-top:30px">
              <FormItem prop="mobile">
                <Input type="text" placeholder="输入手机号" style="text-align:center">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
                <!--<p class="error-text marb8" v-show="Register.error.mobile">{{Register.error.mobile}}</p>-->
              </FormItem>
              <FormItem prop="code">
                <div class="flex">
                  <Input type="text" placeholder="输入获取的验证码" style="text-align:center"></Input>
                  <Button type="ghost" @click="seedMessage" style="background:#ff6060;color:#fff">验证码提示</Button>
                </div>
                <!--<p class="error-text marb8" v-show="Register.error.code">{{Register.error.code}}</p>-->
              </FormItem>
              <FormItem prop="password">
                <Input type="password" placeholder="输入密码">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
                <!--<p class="error-text marb8" v-show="Register.error.password">{{Register.error.password}}</p>-->
              </FormItem>
              <FormItem style="text-align:center">
                <!--<p class="error-text marb8" v-show="Register.error.error">{{Register.error.error}}</p>-->
                <Button type="primary" @click="registerSubmit('Register')" style="width:60%;font-size:16px">注册</Button>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
    <div slot="footer" style="text-align:center">
      <p></p>
    </div>

  </Card>
</template>

<script>
  export default {
    name: 'LoginRegisterModal',

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>