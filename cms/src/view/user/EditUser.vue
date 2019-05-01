<template>
  <Card>
    <PageTitle icon="md-construct" title="创建用户" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">用户昵称：</Col>
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
              :max-size="1024"
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

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">是否启用：</Col>
        <Col span="16" style="line-height:33px;">
          <Switch v-model="status" size="large">
            <span slot="open">ON</span>
            <span slot="close">OFF</span>
          </Switch>
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
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditUser',


    components: {
      PageTitle
    },

    data () {
      return {
        id: '',
        name: '',
        avatar: '',
        mail: '',
        password: '',
        rePassword: '',
        status: true,

        imgName: '',
        visible: false,
        defaultList: [],
        uploadList: [],
      }
    },


    created () {
      const id = this.$route.query.id;
      if (id) {
        this.id = id;
        this.$http.get(`getUserById?id=${id}`).then(({data}) => {
          if (data.status === 200) {
            const userInfo = data.data;
            this.name = userInfo.name;
            this.avatar = userInfo.avatar;
            this.status = userInfo.status;
            if (userInfo.avatar) {
              this.uploadList.push({
                name: userInfo.avatar,
                url: `http://localhost:3000/img/avatar/${userInfo.avatar}`,
                status: 'finished'
              });
            }
            this.mail = userInfo.mail;
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },

    methods: {
      saveUserInfo () {
        let saveData = null;
        let ajaxPath = '';
        let userInfo = {
          name: this.name,
          mail: this.mail,
          status: this.status,
        };

        if (this.id) {
          saveData = {
            id: this.id,
            userInfo
          };
          ajaxPath = 'updateUser';
        } else {
          saveData = userInfo;
          ajaxPath = 'userRegister';
        }

        if (this.password !== '') userInfo.password = this.password;
        if (this.avatar !== '') userInfo.avatar = this.avatar;
        this.$http.put(ajaxPath, saveData).then(({data}) => {
          if (data.status === 200) {
            this.id = data.data;
            this.$Message.success(data.msg);
          }
        }).catch(err => {
          console.log(err);
        });
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
          desc: 'File  ' + file.name + ' is too large, no more than 1M.'
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
      }
    }
  }
</script>

<style lang="less" scoped>
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