<template>
  <div :id="data._id" :class="['base-cell', position ? 'hide' : '']" style="width: 88px; height: 18px; top: 50px; left: 100px; background: lightcoral">
    {{data.name}}
  </div>
</template>

<script>
  export default {
    name: 'NormalCell',

    props: {
      data: {
        type: Object,
        default: () => {
          return {}
        }
      },
      position: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>