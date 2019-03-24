<template>
  <ModalFrame title="用户登录 / 注册" style="width: 468px; height: 398px;">
    <Tabs @on-click="resetInput" >
      <TabPane label="登录">
        <Form ref="Login" class="signin" style="margin:8px 18px 0;">
          <FormItem prop="mobile">
            <Input v-model="name" type="text" placeholder="请输入用户名">
              <Icon type="ios-contact" slot="prepend" size="22" />
            </Input>
            <!--<p class="error-text" v-show="Login.error.mobile">{{Login.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="password">
            <Input v-model="password" type="password" placeholder="请输入密码">
              <Icon type="ios-key" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text" v-show="Login.error.password">{{Login.error.password}}</p>-->
          </FormItem>
          <FormItem style="text-align:center">
            <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消返回</Button>
            <Button @click="userLogin" type="primary" style="width:38%; float:right; font-size:16px">用户登录</Button>
          </FormItem>
        </Form>

        <!--<ul class="form other-form flexa">-->
          <!--<li>-->
            <!--<h5>使用第三方帐号登录</h5>-->
          <!--</li>-->
          <!--<li class="other-login">-->
            <!--<a class="qq" href="http://shop.1234.com:8001/login/qq/"><img src="./img/qq.png" alt="" class="qqwximg"></a>-->
            <!--<a class="sina" href="http://shop.1234.com:8001/login/weibo/"><img src="./img/zfb.png" alt="" class="qqwximg"></a>-->
            <!--<a class="weixin" href="http://shop.1234.com:8001/login/weixin/"><img src="./img/wx.png" alt="" class="qqwximg"></a>-->
          <!--</li>-->
        <!--</ul>-->
      </TabPane>
      <TabPane label="注册">
        <Form ref="Register" class="signup" style="margin:8px 18px 0;">
          <FormItem prop="mobile">
            <Input v-model="name" type="text" placeholder="请输入用户名" style="text-align:center">
              <Icon type="ios-contact" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.mobile">{{Register.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="mail">
            <Input v-model="mail" type="email" placeholder="请输入邮箱地址" style="text-align:center">
              <Icon type="ios-mail-outline" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.mobile">{{Register.error.mobile}}</p>-->
          </FormItem>
          <FormItem prop="code">
            <Row>
              <Col span="16">
                <Input v-model="code" type="text" placeholder="请输入获取的验证码" style="text-align:center;">
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
            <Input v-model="password" type="password" placeholder="请输入密码">
              <Icon type="ios-key" slot="prepend" size="22"/>
            </Input>
            <!--<p class="error-text marb8" v-show="Register.error.password">{{Register.error.password}}</p>-->
          </FormItem>
          <FormItem style="text-align:center">
            <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消返回</Button>
            <Button @click="userRegister" type="primary" style="width:38%; float:right; font-size:16px">用户注册</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </ModalFrame>
</template>

<script>
  import ModalFrame from '../../ModalFrame/ModalFrame.vue'

  export default {
    name: 'LoginRegisterModal',

    components: {
      ModalFrame
    },

    data () {
      return {
        name: '',
        mail: '',
        code: '',
        password: ''
      }
    },

    methods: {
      resetInput () {
        this.name = '';
        this.mail = '';
        this.code = '';
        this.password = '';
      },

      userLogin () {
        const errTips = this.checkInputComplete();
        if (errTips) {
          return this.$Notice.error({
            title: errTips
          });
        }
        this.$http.post('userLogin', {
          'name': this.name,
          'password': this.password
        }).then(({data}) => {
          if (data.status === 200) {
            this.saveUserInfo(data.data, '用户登录成功');
          } else {
            this.$Message.success(data.data.msg);
          }
        }).catch(err => {
          console.log(err);
        })
      },

      userRegister () {
        const errTips = this.checkInputComplete('register');
        if (errTips) {
          return this.$Notice.error({
            title: errTips
          });
        }
        this.$http.put('userRegister', {
          name: this.name,
          mail: this.mail,
          password: this.password
        }).then(({data}) => {
          if (data.status === 200) {
            let userInfo = {
              id: data.data,
              name: this.name,
              avatar: ''
            };
            this.saveUserInfo(userInfo, '用户注册成功');
          }
        }).catch(err => {
          console.log(err);
        });
      },

      checkInputComplete (category = 'login') {
        if (this.name === '') {
          return '请输入用户名'
        }
        if (category === 'register') {
          if (this.mail === '') {
            return '请输入邮箱地址'
          }
          if (this.code === '') {
            return '请输入验证码'
          }
        }
        if (this.password === '') {
          return '请输入密码'
        }
        return '';
      },

      saveUserInfo (userInfo, tips = '') {
        this.$store.commit('changeUserInfo', userInfo);
        this.$localForage.setItem('userInfo', userInfo);
        this.closeModal();
        this.$Message.success(tips);
      },

      closeModal () {
        this.$parent.closeModal();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>