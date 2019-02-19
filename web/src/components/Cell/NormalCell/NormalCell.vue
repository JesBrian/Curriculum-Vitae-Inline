<template>
  <div :id="data._id" style="width: 88px; height: 18px; background: lightcoral">
    {{data.name}}
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