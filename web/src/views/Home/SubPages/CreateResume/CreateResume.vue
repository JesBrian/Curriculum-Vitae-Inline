<template>
  <div ref="createResume" style="padding-top: 28px;">
    <div v-if="step === 0">
      选择格式
      <div>
        <div @click="chooseTempFormat(0)" @dblclick="selfEdit" class="resume-cell" :class="{active: tempFormat === 0}">
          <Card shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span>自定义格式</span>
        </div>
        <div v-for="n in 10" @click="chooseTempFormat(n + 1)" @dblclick="nextStep" :key="n + '12'" class="resume-cell" :class="{active: tempFormat === n+1}">
          <Card shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span>选择模板</span>
        </div>
      </div>
    </div>
    <div v-else>
      选择模板
      <div>
        <div @click="chooseTempTemplate(-1)" @dblclick="selfEdit" class="resume-cell" :class="{active: tempTemplate === -1}">
          <Card shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span>自定义模板</span>
        </div>
        <div @click="chooseTempTemplate(0)" @dblclick="selectNetTemplate" class="resume-cell" :class="{active: tempTemplate === 0}">
          <Card shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span>网络模板</span>
        </div>
        <div v-for="n in 10" @click="chooseTempTemplate(n + 1)" @dblclick="nextStep" :key="n + '15'" class="resume-cell" :class="{active: tempTemplate === n+1}">
          <Card shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span>编辑</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateResume',

    data () {
      return {
        step: 0,
        tempFormat: -1,
        tempTemplate: -1
      }
    },

    methods: {
      selfEdit () {
        alert('打钱或许就会开通这功能了');
      },

      selectNetTemplate () {
        this.$store.commit('changeShowModal', 'NetTemplateModal');
      },

      chooseTempFormat (n) {
        this.tempFormat = n;
      },

      chooseTempTemplate (n) {
        this.tempTemplate = n;
      },

      nextStep () {
        this.step ? this.$router.push('/EditResume') : this.step++;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resume-cell {
    width: 180px; height: 195px; margin: 0 0 28px 38px; padding: 5px; display: inline-block;
    text-align: center; line-height: 2em; font-size: 17px; border-radius: 6px; cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      box-shadow: 0 0 8px #32BBE6;
    }
  }
</style>