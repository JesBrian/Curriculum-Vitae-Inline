<template>
  <div :id="data._id" >
    123
  </div>
</template>

<script>
  export default {
    name: 'NormalCell',

    props: {
      data: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>