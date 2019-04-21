<template>
  <div>
    <Breadcrumb class="path-navbar">
      <BreadcrumbItem to="/">
        <Icon type="ios-home" /> 首页
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon type="ios-create" /> 编辑
      </BreadcrumbItem>
    </Breadcrumb>

    <div style="margin-top:-36px; float:right">
      <Button type="primary" icon="md-settings" size="small" ghost style="margin:0 0 0 6px;" >面板设置</Button>
      <Button @click="showModal('DesignBaseConfModal')" type="info" icon="md-bookmarks" size="small" ghost style="margin:0 0 0 6px;" >设计配置</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PathNavbar',

    methods: {
      showModal (modalType = '') {
        this.$store.commit('changeShowModal', modalType)
      }
    }
  }
</script>

<style lang="less" scoped>
  .path-navbar {
    top:15px;
    margin: 0;
    position:absolute;
  }
</style>