<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 设置配置
      </BreadcrumbItem>
    </PathNavbar>

    <div style="padding:8px 18px 0 38px; position:relative;">
      <Button v-if="$store.state.userInfo" @click="userLogout" type="primary" style="top:16px; right:26px; position:absolute; z-index: 9;" >退出登录</Button>
      <Card>
        <Tabs type="card">
          <TabPane label="账户设置" style="padding:0 38px; position: relative;">
            <div v-if="!$store.state.userInfo" style="width: 100%; height: 100%; position: absolute; background: rgba(255, 255, 255, 0.5); z-index: 9;">
            </div>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">用户名：</Col>
                <Col span="16">
                  <Input v-model="name" placeholder="Enter something..." />
                </Col>
              </Row>

              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">用户头像：</Col>
                <Col span="16">

                  <div class="demo-upload-list" v-for="item in uploadList">
                    <template v-if="item.status === 'finished'">
                      <img :src="item.url">
                      <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                      </div>
                    </template>
                    <template v-else>
                      <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                  </div>
                  <Upload
                      ref="upload"
                      :show-upload-list="false"
                      :default-file-list="defaultList"
                      :on-success="handleSuccess"
                      :format="['jpg','jpeg','png']"
                      :max-size="2048"
                      :on-format-error="handleFormatError"
                      :on-exceeded-size="handleMaxSize"
                      :before-upload="handleBeforeUpload"
                      :data="{type: 'Avatar'}"
                      type="drag"
                      action="//localhost:3000/uploadImg"
                      style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                      <Icon type="ios-camera" size="20"></Icon>
                    </div>
                  </Upload>
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
        rePassword: '',

        imgName: '',
        visible: false,
        defaultList: [],
        uploadList: []
      }
    },

    created () {
      if (this.$store.state.userInfo) {
        this.$http.get(`getUserById?id=${this.$store.state.userInfo.id}`).then(({data}) => {
          if (data.status === 200) {
            const userInfo = data.data;
            this.name = userInfo.name;
            this.avatar = userInfo.avatar;
            this.uploadList.push({
              name: userInfo.avatar,
              url: `http://localhost:3000/img/avatar/${userInfo.avatar}`,
              status: 'finished'
            });
            this.mail = userInfo.mail;
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },

    mounted () {
      if (this.$store.state.userInfo) {
        this.uploadList = this.$refs.upload.fileList;
      }
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
        if (this.password !== '') saveData.userInfo.password = this.password;
        if (this.avatar !== '') saveData.userInfo.avatar = this.avatar;
        this.$http.put('updateUser', saveData).then(({data}) => {
          if (data === 200) {
            // 修改 vuex && localForage
          }
        }).catch(err => {
          console.log(err);
        })
      },


      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        console.log(res);
        if (res.status === 200) {
          this.avatar = res.data;
          file.name = res.data;
          file.url = `http://localhost:3000/img/avatar/${file.name}`;
        }
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 1;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to one pictures can be uploaded.'
          });
        }
        return check;
      },

      userLogout () {
        this.$localForage.setItem('userInfo', null);
        this.$store.commit('changeUserInfo');
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>