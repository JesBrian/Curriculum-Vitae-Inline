<template>
  <div :id="data._id" >
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