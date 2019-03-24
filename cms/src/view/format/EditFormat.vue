<template>
  <Card>
    <PageTitle icon="md-construct" title="EditFormat" />

    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式名称：</Col>
      <Col span="16">
        <Input v-model="name" placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式图标：</Col>
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
            :data="{type: 'FormatLogo'}"
            type="drag"
            action="//localhost:3000/uploadImg"
            style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式宽高：</Col>
      <Col span="16">
        <InputNumber v-model="size[0]" :min="1"></InputNumber>
        <span style="margin:0 12px;">X</span>
        <InputNumber v-model="size[1]" :min="1"></InputNumber>
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">是否启用：</Col>
      <Col span="16" style="line-height:30px;">
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
        <Button @click="saveFormat" type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'EditFormat',

    components: {
      PageTitle
    },

    data () {
      return {
        name: '',
        size: [1, 1],
        logo: '',
        status: false,

        imgName: '',
        visible: false,
        defaultList: [],
        uploadList: []
      }
    },

    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },

    methods: {
      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        if (res.status === 200) {
          console.log(res);
          file.name = res.data;
          file.url = `http://localhost:3000/img/format/${file.name}`;
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


      saveFormat () {
        let errTips = '';
        if (this.name === '') {
          this.$Notice.error({
            title: '请输入格式名称',
            desc: ''
          });
          return false;
        }

        const formatData = {
          name: this.name,
          size: this.size,
          logo: this.logo,
          status: this.status
        };
        this.$http.put('saveFormat', formatData).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
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