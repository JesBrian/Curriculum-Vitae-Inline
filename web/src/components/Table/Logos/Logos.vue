<template>
  <img v-if="src" :src="src" class="logo">
</template>

<script>
  export default {
    name: 'Logos',

    props: {
      src: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    width: 28px; height: 28px;
    &:hover {
      cursor: pointer;
    }
  }
</style>