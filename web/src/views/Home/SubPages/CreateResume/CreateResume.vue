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
      <div @click="chooseTempFormat(-1)" @dblclick="selfEdit" class="resume-cell" :class="{active: formatIndex === -1}">
        <Card shadow class="cell-logo">
          <p>Content of card</p>
        </Card>
        <span class="name-label">自定义格式</span>
      </div>
      <div v-for="(formatItem, index) in formatList" @click="chooseTempFormat(index)" @dblclick="nextStep" :key="formatItem.id" class="resume-cell" :class="{active: formatIndex === index}">
        <Card shadow class="cell-logo">
          <p>Content of card</p>
        </Card>
        <span class="name-label">{{ formatItem.name }}</span>
      </div>
    </div>
    <div v-else>
      <div @click="chooseTempTemplate(-2)" @dblclick="nextStep" class="resume-cell" :class="{active: templateIndex === -2}">
        <Card shadow class="cell-logo">
          <p>Content of card</p>
        </Card>
        <span class="name-label">空白</span>
      </div>
      <div @click="chooseTempTemplate(-1)" @dblclick="selectNetTemplate" class="resume-cell" :class="{active: templateIndex === -1}">
        <Card shadow class="cell-logo">
          <p>Content of card</p>
        </Card>
        <span class="name-label">网络模板</span>
      </div>
      <div v-for="n in 10" @click="chooseTempTemplate(n + 1)" @dblclick="nextStep" :key="n + '15'" class="resume-cell" :class="{active: templateIndex === n+1}">
        <Card shadow class="cell-logo">
          <p>Content of card</p>
        </Card>
        <span class="name-label">编辑</span>
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

        formatList: [
          {id: 111, name: '名片卡片', size: [600, 380]},
          {id: 112, name: '个人简历', size: [600, 850]},
          {id: 113, name: '宣传海报', size: [600, 850]}
        ]
      }
    },

    methods: {
      selfEdit () {
        this.$store.commit('changeShowModal', 'SelfDefineFormatModal');
      },

      selectNetTemplate () {
        this.$store.commit('changeShowModal', 'NetTemplateModal');
      },

      chooseTempFormat (n) {
        this.formatIndex = n;
      },

      chooseTempTemplate (n) {
        this.templateIndex = n;
      },

      nextStep () {
        if (this.step) {
          this.$store.commit('changeResumeConfig', this.formatList[this.formatIndex].size);
          this.$nextTick(() => {
            this.$router.push('/EditResume');
          });
        } else {
          this.step++;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resume-cell {
    width: 180px; height: 198px; margin: 0 0 26px 38px; padding: 6px 6px; display: inline-block;
    text-align: center; line-height: 2em; font-size: 17px; border-radius: 6px; cursor: pointer; user-select: none;
    .cell-logo {
      height:158px; box-shadow:0 0 3px #282828;
    }
    &:hover {
      box-shadow: 0 0 8px #888;
    }
    &.active {
      box-shadow: 0 0 8px #32BBE6;
      .cell-logo {
        box-shadow:0 0 3px #BBB, 0 0 6px #57a3f3;
      }
      .name-label {
        color: #57a3f3;
      }
    }
  }
</style>