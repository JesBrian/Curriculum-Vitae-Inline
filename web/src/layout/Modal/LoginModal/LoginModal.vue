<template>
  <Card shadow style="width: 628px; height: 408px;">
    <div style="width: 100%; height: 100%; background: lightblue;">This is Login Modal !</div>
    <div @click="registerModal">Go To Register</div>
  </Card>
</template>

<script>
  export default {
    name: 'LoginModal',

    methods: {
      registerModal () {
        this.$store.commit('changeShowModal', 'RegisterModal');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>