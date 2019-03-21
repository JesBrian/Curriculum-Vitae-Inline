<template>
  <ModalFrame title="基本配置" style="width: 500px; position: relative;">
    <Form style="margin:38px 18px 0;">
      <FormItem>
        <Input v-model="name" type="text" placeholder="请输入名称">
          <Icon type="ios-contact" slot="prepend" size="22" />
        </Input>
      </FormItem>
      <FormItem>
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
            multiple
            type="drag"
            action="//localhost:3000/uploadAvatar"
            style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </FormItem>
      <FormItem>
        <InputTag v-model="tags" />
      </FormItem>
      <FormItem>
        <Switch v-model="status" />
      </FormItem>
      <FormItem style="padding-top: 28px; text-align:center;">
        <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消关闭</Button>
        <Button @click="saveInfo" type="primary" style="width:38%; float:right; font-size:16px">确认修改</Button>
      </FormItem>
    </Form>
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
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
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
        this.closeModal();
      },

      closeModal () {
        this.$store.commit('changeShowModal');
      }
    }
  }
</script>

<style scoped>

</style>