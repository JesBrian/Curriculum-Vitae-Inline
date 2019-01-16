<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 本地存储
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="uploadLocal" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">本地打开</Button>
      </div>
    </PathNavbar>

    <div style="padding:0 18px 0 38px;">
      <Collapse v-model="openCollapse">
        <Panel name="1">
          最近三天
          <div slot="content">123</div>
        </Panel>
        <Panel name="2">
          最近一周
          <div slot="content">456</div>
        </Panel>
        <Panel name="3">
          最近一月
          <div slot="content">789</div>
        </Panel>
        <Panel name="3">
          更久以前
          <div slot="content">101112</div>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'UploadLocal',

    components: {
      PathNavbar
    },

    data () {
      return {
        openCollapse: '1'
      }
    },

    methods: {
      uploadLocal () {
      }
    }
  }
</script>

<style scoped>

</style>