<template>
  <Card>
    <PageTitle icon="md-backspace" title="组件配置列表" />
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'ComponentListConf',

    components: {
      PageTitle
    },

    data () {
      return {
        confList: []
      }
    },

    created () {
      this.getComponentListConfData(1);
    },

    methods: {
      getComponentListConfData (page = 1) {
        this.$http.get('').then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>