<template>
  <div style="width:100%; height:100%; top:0; left:0; position:fixed; z-index:999;">
    <Component :is="$store.state.showModal" style="top: 50%; left: 50%; transform: translate(-50%, -50%); position:absolute; z-index:5;" />

    <BlackCover @click.native="closeModal" />
  </div>
</template>

<script>
  import BlackCover from '../../components/BlackCover.vue'
  import LoginModal from './LoginModal/LoginModal.vue'
  import RegisterModal from './RegisterModal/RegisterModal.vue'
  import NetTemplateModal from './NetTemplateModal/NetTemplateModal.vue'
  import TempShowModal from './TempShowModal/TempShowModal.vue'

  export default {
    name: 'ModalFrame',

    components: {
      BlackCover, TempShowModal, RegisterModal, LoginModal, NetTemplateModal
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