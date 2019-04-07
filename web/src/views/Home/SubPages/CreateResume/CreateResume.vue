<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem to="/">
        <Icon type="ios-clipboard" /> 选择格式
      </BreadcrumbItem>
      <BreadcrumbItem v-if="step === 1">
        <Icon type="logo-buffer" /> 选择模板
      </BreadcrumbItem>
    </PathNavbar>

    <div v-if="step === 0">
      <div @click="changeTempIndex('formatIndex', -1)" @dblclick="showModal('SelfDefineFormatModal')" class="resume-cell" :class="{active: formatIndex === -1}">
        <div class="cell-logo">
          <img src="http://localhost:3000/img/format/default.png" style="width: 100%; height: 100%;">
        </div>
        <span class="name-label">自定义格式</span>
      </div>
      <div v-for="(formatItem, index) in formatList" @click="changeTempIndex('formatIndex', index)" @dblclick="nextStep" :key="formatItem.id" class="resume-cell" :class="{active: formatIndex === index}">
        <div class="cell-logo">
          <img :src="`http://localhost:3000/img/format/${formatItem.logo}`" style="width: 100%; height: 100%;">
        </div>
        <span class="name-label">{{ formatItem.name }}</span>
      </div>
    </div>
    <div v-else>
      <div @click="changeTempIndex('templateIndex', -2)" @dblclick="nextStep" class="resume-cell" :class="{active: templateIndex === -2}">
        <div class="cell-logo">
          <img src="http://localhost:3000/img/template/empty.png" style="width: 100%; height: 100%;">
        </div>
        <span class="name-label">空白</span>
      </div>
      <div @click="changeTempIndex('templateIndex', -1)" @dblclick="showModal('NetTemplateModal')" class="resume-cell" :class="{active: templateIndex === -1}">
        <Card shadow class="cell-logo">
          <img src="http://localhost:3000/img/template/net.png" style="width: 100%; height: 100%;">
        </Card>
        <span class="name-label">网络模板</span>
      </div>
      <div v-for="(templateItem, index) in templateList" @click="changeTempIndex('templateIndex', index)" @dblclick="nextStep" :key="templateItem._id" class="resume-cell" :class="{active: templateIndex === index}">
        <div class="cell-logo">
          <img :src="`http://localhost:3000/img/template/logo/${templateItem.logo}`" style="width: 100%; height: 100%;">
        </div>
        <span class="name-label">{{templateItem.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'CreateResume',

    components: {
      PathNavbar
    },

    data () {
      return {
        step: 0,
        formatIndex: -100,
        templateIndex: -100,

        formatList: [],
        templateList: []
      }
    },

    created () {
      this.initFormatList();
    },

    methods: {
      showModal (modalType = '') {
        this.$store.commit('changeShowModal', modalType);
      },

      changeTempIndex (tempCategory = '', index = 0) {
        this[tempCategory] = index;
      },

      nextStep () {
        if (this.step) {
          if (this.templateIndex >= 0) {
            return this.$http.get(`getTemplateById?id=${this.templateList[this.templateIndex]._id}`).then(({data}) => {
              if (data.status === 200) {
                const templateData = data.data;
                this.$store.commit('changeDesignConf', {
                  size: this.formatList[this.formatIndex].size,
                  bg: templateData.bg,
                  cell: templateData.cell
                });
                this.$router.push('/EditResume');
              }
            }).catch(err => {
              console.log(err);
            })
          }
          this.$store.commit('changeDesignConf', {
            size: this.formatList[this.formatIndex].size
          });
          this.$router.push('/EditResume');
        } else {
          this.$http.get(`getSystemTemplateByFormat?formatId=${this.formatList[this.formatIndex]._id}`).then(({data}) => {
            if (data.status === 200) {
              this.templateList = data.data;
            }
          }).catch(err => {
            console.log(err);
          });
          this.step++;
        }
      },

      initFormatList () {
        this.$localForage.getItem('formatList').then(val => {
          if (val) {
            this.formatList = val;
          } else {
            this.$http.get('formatList').then(({data}) => {
              if (data.status === 200) {
                this.formatList = data.data;
                this.$localForage.setItem('formatList', data.data);
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resume-cell {
    width: 180px; height: 200px; margin: 0 0 26px 38px; padding: 6px 6px; display: inline-block;
    text-align: center; line-height: 2em; font-size: 17px; border-radius: 6px; cursor: pointer; user-select: none;
    transition: all 600ms;

    .cell-logo {
      height:155px; margin-bottom: 3px; padding: 13px;
      display: flex; align-items: center; justify-content: center;
      box-shadow:0 0 6px -1px #282828; transition: all 250ms; border-radius: 5px;
    }
    &:hover {
      box-shadow: 0 0 8px #888;
    }
    &.active {
      box-shadow: 0 0 8px #348EF3;
      .cell-logo {
        box-shadow:0 0 6px #32BBE6;
      }
      .name-label {
        color: #348EF3;
      }
    }
  }
</style>