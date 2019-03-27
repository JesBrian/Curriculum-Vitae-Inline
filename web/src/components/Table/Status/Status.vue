<template>
  <Icon :type="status ? 'md-eye' : 'md-eye-off'" class="status" size="23" />
</template>

<script>
  export default {
    name: 'Status',

    props: {
      status: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .status {
    color: #348EED;
    &:hover {
      color: #50BEFF;
    }
  }
</style>