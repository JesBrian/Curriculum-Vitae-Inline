<template>
  <ModalFrame title="基本配置" style="width: 500px; padding-right: 28px; position: relative;">
    <Row style="margin:28px 0 23px;">
      <Col span="7" style="line-height:30px; text-align:center;">名称：</Col>
      <Col span="17" >
        <Input v-model="name" placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="7" style="line-height:30px; text-align:center;">缩略图：</Col>
      <Col span="17" >
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
            :data="{type: 'DesignLogo'}"
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
      <Col span="7" style="line-height:30px; text-align:center;">标签：</Col>
      <Col span="17" >
        <InputTag v-model="tags" />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="7" style="line-height:30px; text-align:center;">状态：</Col>
      <Col span="17" >
        <Switch v-model="status" size="large">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </Switch>
      </Col>
    </Row>
    <Row style="margin:18px 0 8px;">
      <Col span="24" style="padding:0 0 0 28px; text-align:center;">
        <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消关闭</Button>
        <Button @click="saveInfo" type="primary" style="width:38%; float:right; font-size:16px">确认修改</Button>
      </Col>
    </Row>
  </ModalFrame>
</template>

<script>
  import ModalFrame from '../../ModalFrame/ModalFrame.vue'
  import InputTag from '../../../../components/InputTag/InputTag.vue'

  export default {
    name: 'DesignBaseConfModal',

    components: {
      ModalFrame, InputTag
    },

    data () {
      return {
        name: this.$store.state.designConf.name,
        logo: this.$store.state.designConf.logo,
        defaultList: this.$store.state.designConf.logo ? [{
          name: this.$store.state.designConf.logo,
          url: `http://localhost:3000/img/design/logo/${this.$store.state.designConf.logo}`,
        }] : [],
        uploadList: [],
        tags: this.$store.state.designConf.tags,
        status: this.$store.state.designConf.status
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
        file.url = `http://localhost:3000/img/design/logo/${res.data}`;
        file.name = this.logo = res.data;
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
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      },

      saveInfo () {
        this.$store.commit('changeDesignConf', {
          name: this.name,
          logo: this.logo,
          tags: this.tags,
          status: this.status
        });
        this.closeModal();
      },

      closeModal () {
        this.$store.commit('changeShowModal');
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