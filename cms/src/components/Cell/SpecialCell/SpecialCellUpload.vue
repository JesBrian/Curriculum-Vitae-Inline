<template>
  <div title="双击上传图片" class="base-cell special-cell-upload"
       :style="`width: ${data.format.size.size[0]}px; height: ${data.format.size.size[1]}px;
                border: ${data.style.border[1]}px ${data.style.border[2]} ${data.style.border[3]};
                box-shadow: 0 0 ${data.style.shadow[1]}px ${data.style.shadow[2]};
                background: ${data.style.bgColor}; opacity: ${data.style.opacity};
                display: flex; align-items: center; justify-content: center;
                border-radius: ${data.style.radius[1]}px;`">
    <input ref="inputFile" accept="image/*" name="img" id="upload_file" type="file" multiple style="width: 0; height: 0">
    <img v-if="this.imgUrl" :src="`http://localhost:3000/img/component/content/${this.imgUrl}`" @dblclick="$refs.inputFile.click()" style="width: 100%; height: 100%;">
    <div v-else @dblclick="$refs.inputFile.click()" style="width: 100%; height: 100%; border: 1px solid #000; display: flex; align-items: center; justify-content: center;">
      双击上传
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpecialCellUpload',

    props: {
      data: {
        type: Object,
        default: () => {
          return null
        }
      },
      graphics: {
        type: Boolean,
        default: false
      }
    },

    mounted () {
      this.$refs.inputFile.addEventListener('change', () => {
        let formData = new FormData();
        formData.append('type', 'ComponentContent');
        formData.append('file', this.$refs.inputFile.files[0]);

        this.$http.post('uploadImg', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(({data}) => {
          if (data.status === 200) {
            this.imgUrl = this.data.special.imgUrl = data.data;
          }
        }).catch(err => {
          console.log(err);
        })
      });
    },

    data () {
      return {
        imgUrl: this.data.special.imgUrl,
        upload: null,
        w: this.data.format.size.size[0],
        h: this.data.format.size.size[1]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>