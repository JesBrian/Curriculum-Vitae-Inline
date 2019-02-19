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
      <InputNumber v-model="$store.state.designConf.size[0]" :min="1" size="small" style="width:68px;" />
      <span style="margin:2px 5px;">x</span>
      <InputNumber v-model="$store.state.designConf.size[1]" :min="1" size="small" style="width:68px; margin-right:28px;" />

      <Button @click="showTempResume" type="success" icon="logo-buffer" size="small" ghost style="margin:0 3px;">预览</Button>
      <Button @click="exportResume" type="primary" icon="md-code-download" size="small" ghost style="margin:0 3px;">导出</Button>
      <Button @click="saveResume" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">保存</Button>
      <Button @click="delNowCurriculumVitae" type="error" icon="md-trash" size="small" ghost style="margin:0 3px;">删除</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PathNavbar',

    methods: {
      showTempResume () {
        this.$store.commit('changeShowModal', 'TempShowModal');
      },

      exportResume () {
        alert('给钱也不会给你开通这功能！');
      },

      saveResume () {
        alert('往我账号里打钱立马给你开通该功能！');
      },

      delNowCurriculumVitae () {
        confirm('确认要删除该编辑中的简历/名片');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .path-navbar {
    top:15px;
    margin: 0 0 20px;
    position:absolute;
  }
</style>