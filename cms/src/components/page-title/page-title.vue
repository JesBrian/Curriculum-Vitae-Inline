<template>
  <div class="page-title">
    <Icon v-if="icon" :type="icon" size="21" class="page-title-icon" />
    {{ title }}<Divider class="page-title-divider" />
  </div>
</template>

<script>
  export default {
    name: 'PageTitle',

    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-title {
    line-height: 2em;
    &-icon {
      margin: -4px 5px 0 0
    }
    &-divider {
      margin-top: 15px;
    }
  }
</style>