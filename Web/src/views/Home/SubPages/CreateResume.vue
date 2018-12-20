<template>
  <div style="padding-top: 28px;">
    <div v-if="step === 0">
      选择格式
      <div>
        <div class="resume-cell">
          <Card @dblclick.native="selfEdit" shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span @dblclick="selfEdit">自定义格式</span>
        </div>
        <div v-for="n in 10" class="resume-cell">
          <Card @dblclick.native="nextStep" shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span @dblclick="nextStep">选择模板</span>
        </div>
      </div>
    </div>
    <div v-else>
      选择模板
      <div>
        <div class="resume-cell">
          <Card @dblclick.native="selfEdit" shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span @dblclick="selfEdit">自定义模板</span>
        </div>
        <div v-for="n in 10" class="resume-cell">
          <Card @dblclick.native="nextStep" shadow style="height: 158px; box-shadow: 0 0 3px #282828; ">
            <p>Content of card</p>
            <p>Content of card</p>
            <p>Content of card</p>
          </Card>
          <span @dblclick="nextStep">编辑</span>
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
        step: 0
      }
    },

    methods: {
      selfEdit () {
        alert('打钱或许就会开通这功能了');
      },
      nextStep () {
        this.step ? this.$router.push('/EditResume') : this.step++;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .resume-cell {
    width: 180px; height: 188px; margin: 0 0 28px 38px; display: inline-block;
    text-align: center; line-height: 2.1em; font-size: 18px;
    &:hover {
      text-decoration: underline;
    }
  }
</style>