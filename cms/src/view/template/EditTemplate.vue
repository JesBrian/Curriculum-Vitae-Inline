<template>
  <Card>
    <PageTitle icon="md-construct" title="模板管理" />

    <div style="margin: 0 18px 8px 28px;">
      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">模板名称：</Col>
        <Col span="16">
          <Input v-model="name" placeholder="请填写模板名称..." />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">所属格式：</Col>
        <Col span="16">
          <Select v-model="formatId" style="width:200px">
            <Option v-for="item in formatCategory" :value="item._id" :key="item._id">{{ item.name }}</Option>
          </Select>
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">模板背景色：</Col>
        <Col span="16">
          <ColorPicker v-model="bg" alpha size="small" />
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">模板缩略图：</Col>
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
              :data="{type: 'TemplateLogo'}"
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
        <Col span="8" style="text-align:left;">模板内容：</Col>
        <Col span="16">
          <a href="http://localhost:9090/#/editTemplate" target="_blank">
            <Button @click="editTemplate" type="info" ghost style="margin-right: 18px;" >编辑模板</Button>
          </a>
          <Button type="primary" ghost >保存预览</Button>
        </Col>
      </Row>

      <Row style="margin-bottom:23px; line-height:33px;">
        <Col span="8" style="text-align:left;">搜索标签：</Col>
        <Col span="16">
          <InputTag v-model="tags" />
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
          <Button @click="saveTemplate" type="primary">确定保存</Button>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';
  import InputTag from "../../../../web/src/components/InputTag/InputTag";
  import EditResume from '../EditResume/EditResume.vue'

  export default {
    name: 'EditTemplate',

    components: {
      PageTitle, InputTag, EditResume
    },

    data () {
      return {
        name: '',
        logo: '',
        formatId: '',
        tags: [],
        bg: '#FFF',
        cell: [],
        status: true,

        formatCategory: [],
        defaultList: [],
        uploadList: []
      }
    },

    created () {
      const id = this.$route.query.id;
      this.id = id ? id : '';
      if (id) {
        this.$http.get(`getTemplateById?id=${id}`).then(({data}) => {
          if (data.status === 200) {
            const templateData = data.data;
            this.name = templateData.name;
            this.formatId = templateData.formatId;
            this.tags = templateData.tags;
            this.bg = templateData.bg;
            this.cell = templateData.cell;
            this.status = templateData.status;
            this.uploadList.push({
              name: templateData.logo,
              url: `http://localhost:3000/img/template/logo/${templateData.logo}`,
              status: 'finished'
            });
          }
        }).catch(err => {
          console.log(err);
        })
      }
      this.$http.get('formatList').then(({data}) => {
        if (data.status === 200) {
          this.formatCategory = data.data;
        }
      }).catch(err => {
        console.log(err);
      });
    },

    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    },

    methods: {
      saveTemplate () {
        const templateData = {
          data: {
            name: this.name,
            logo: this.logo,
            formatId: this.formatId,
            author: '',
            tags: this.tags,
            bg: this.bg,
            cell: this.cell,
            system: true,
            status: this.status,
          }
        };

        if (this.id) {
          templateData.id = this.id;
        }

        this.$http.put('saveTemplate', templateData).then(({data}) => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      },

      editTemplate () {
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
        if (res.status === 200) {
          const fileName = res.data;
          file.name = fileName;
          this.logo = fileName;
          file.url = `http://localhost:3000/img/template/logo/${fileName}`;
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