<template>
  <Card>
    <PageTitle icon="md-code-working" title="格式列表" />

    <Tabs @on-click="changeTemplateType" type="card">
      <TabPane v-for="formatItem in formatData" :name="formatItem._id" :label="formatItem.name">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  import PageTitle from '_c/page-title/page-title.vue'

  export default {
    name: 'TemplateList',

    components: {
      PageTitle
    },

    data () {
      return {
        formatData: []
      }
    },

    created () {
      this.$http.get('formatList').then(({data}) => {
        if (data.status === 200) {
          this.formatData = data.data;
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      changeTemplateType (formatId) {
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>