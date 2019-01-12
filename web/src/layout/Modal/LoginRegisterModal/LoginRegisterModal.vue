<template>
  <Card shadow style="width: 468px; height: 368px;">
    <Tabs>
      <TabPane label="登录">
        <Form ref="Login" class="signin" style="margin:8px 18px 0;">
          <FormItem prop="mobile">
            <Input type="text" placeholder="输入手机号">
              <Icon type="ios-contact" slot="prepend" size="22" />
            </Input>
            <!--<p class="error-text" v-show="Login.error.mobile">{{Login.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="password">
            <Input type="password" placeholder="输入密码">
              <Icon type="ios-key" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text" v-show="Login.error.password">{{Login.error.password}}</p>-->
          </FormItem>
          <FormItem style="text-align:center">
            <!--<p class="error-text" v-show="Login.error.all">{{Login.error.all}}</p>-->
            <Button @click="userLogin" type="primary" style="width:60%; font-size:16px">登录</Button>
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
        <Form ref="Register" class="signup" style="margin:8px 18px 0;">
          <FormItem prop="mobile">
            <Input type="text" placeholder="输入手机号" style="text-align:center">
              <Icon type="ios-contact" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.mobile">{{Register.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="mail">
            <Input type="email" placeholder="输入邮箱" style="text-align:center">
              <Icon type="ios-mail-outline" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.mobile">{{Register.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="code">
            <Row>
              <Col span="16">
                <Input type="text" placeholder="输入获取的验证码" style="text-align:center;">
                  <Icon type="md-code-working" slot="prepend" size="22"/>
                </Input>
              </Col>
              <Col span="6" offset="1">
                <Button>获取邮箱验证码</Button>
              </Col>
            </Row>
            <!--<p class="error-text marb8" v-show="Register.error.code">{{Register.error.code}}</p>-->
          </FormItem>
          <FormItem prop="password">
            <Input type="password" placeholder="输入密码">
              <Icon type="ios-key" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.password">{{Register.error.password}}</p>-->
          </FormItem>
          <FormItem style="text-align:center">
            <!--<p class="error-text marb8" v-show="Register.error.error">{{Register.error.error}}</p>-->
            <Button @click="userRegister" type="primary" style="width:60%; font-size:16px">注册</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
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
      userLogin () {
      },

      userRegister () {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>