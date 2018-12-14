<template>
  <Drawer title="Basic Drawer" :closable="false" :value="show">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Drawer>
</template>

<script>
  export default {
    name: 'RightNavbar',

    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>