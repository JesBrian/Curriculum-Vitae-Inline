<template>
  <RouterLink :to="url" class="links"><slot /></RouterLink>
</template>

<script>
  export default {
    name: 'Links',

    props: {
      url: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="less" scoped>
  .links {
    color: #348EED;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      color: #50BEFF;
    }
  }
</style>