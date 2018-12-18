<template>
  <div style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:999;">
    <Component :is="$store.state.showModal" />

    <BlackCover @click.native="closeModal" />
  </div>
</template>

<script>
  import BlackCover from '../../components/BlackCover.vue'
  import LoginModal from './LoginModal/LoginModal.vue'
  import RegisterModal from './RegisterModal/RegisterModal.vue'
  import TempShowModal from './TempShowModal/TempShowModal.vue'

  export default {
    name: 'ModalFrame',

    components: {
      BlackCover, TempShowModal, RegisterModal, LoginModal
    },

    methods: {
      closeModal () {
        this.$store.commit('changeShowModal');
      }
    }
  }
</script>

<style scoped>

</style>