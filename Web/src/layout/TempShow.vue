<template>
  <div style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:999;">
    <Card shadow style="width: 600px; height: 800px; top: 50%; left: 50%; transform: translate(-50%, -50%); position:absolute; z-index:5;">
      <div style="width: 100%; height: 100%; background: lightblue;">1223</div>
    </Card>
    <BlackCover @click.native="closeTempShow" />
  </div>
</template>

<script>
  import BlackCover from '../components/BlackCover.vue'

  export default {
    name: 'TempShow',

    components: {
      BlackCover
    },

    methods: {
      closeTempShow () {
        this.$store.commit('changeShowTemp');
      }
    }
  }
</script>

<style scoped>

</style>