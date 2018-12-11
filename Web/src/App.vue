<template>
  <div id="app">

    <PageFrame>
      <RouterView />
    </PageFrame>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PageFrame from './layout/PageFrame.vue';


  @Component({
    components: {
      PageFrame,
    },
  })
  export default class App extends Vue {}
</script>

<style lang="scss">

</style>
