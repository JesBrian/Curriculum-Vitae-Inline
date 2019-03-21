<template>
  <div class="modal-total">
    <Component :is="$store.state.showModal" class="modal-total-container" />
    <BlackCover @click.native="closeModal" />
  </div>
</template>

<script>
  import BlackCover from '../../components/BlackCover.vue'

  export default {
    name: 'ModalTotal',

    components: {
      BlackCover,
      LoginRegisterModal: resolve => require(['./ModalContent/LoginRegisterModal/LoginRegisterModal.vue'], resolve),
      TempShowModal: resolve => require(['./ModalContent/TempShowModal/TempShowModal.vue'], resolve),
      SelfDefineFormatModal: resolve => require(['./ModalContent/SelfDefineFormatModal/SelfDefineFormatModal.vue'], resolve),
      NetTemplateModal: resolve => require(['./ModalContent/NetTemplateModal/NetTemplateModal.vue'], resolve),
      DesignBaseConfModal: resolve => require(['./ModalContent/DesignBaseConfModal/DesignBaseConfModal.vue'], resolve)
    },

    methods: {
      closeModal () {
        this.$store.commit('changeShowModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-total {
    width:100%; height:100%; top:0; left:0; position:fixed; z-index:100;
    &-container {
      top: 50%; left: 50%; transform: translate(-50%, -50%); position:absolute; z-index:5;
    }
  }
</style>