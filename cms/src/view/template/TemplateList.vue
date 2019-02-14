<template>
  <Card>
    <Tabs @on-click="changeTemplateType" type="card">
      <TabPane v-for="formatItem in formatData" :name="formatItem._id" :label="formatItem.name">
        标签一的内容
        <Page :total="100" show-elevator style="margin:8px auto; text-align:center;" />
      </TabPane>
    </Tabs>
  </Card>
</template>

<script>
  export default {
    name: 'TemplateList',

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