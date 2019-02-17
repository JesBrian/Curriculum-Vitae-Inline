<template>
  <Card>
    <PageTitle icon="md-backspace" title="组件配置列表" />

    <tree-view :data="conf" />
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
        conf: null
      }
    },

    created () {
      this.$localForage.getItem('componentConf').then(val => {
        if (val) {
          this.conf = val;
        } else {
          this.getComponentListConfData();
        }
      }).catch(err => {
        console.log(err);
      })
    },

    methods: {
      getComponentListConfData () {
        this.$http.get('componentConf').then(({data}) => {
          if (data.status === 200) {
            this.conf = data.data;
            this.$localForage.setItem('componentConf', data.data);
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>