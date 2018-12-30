<template>
  <div class="modal-frame">
    <Component :is="$store.state.showModal" class="modal-frame-container" />
    <BlackCover @click.native="closeModal" />
  </div>
</template>

<script>
  import BlackCover from '../../components/BlackCover.vue'

  export default {
    name: 'ModalFrame',

    components: {
      BlackCover,
      TempShowModal: resolve => require(['./TempShowModal/TempShowModal.vue'], resolve),
      RegisterModal: resolve => require(['./RegisterModal/RegisterModal.vue'], resolve),
      LoginModal: resolve => require(['./LoginModal/LoginModal.vue'], resolve),
      NetTemplateModal: resolve => require(['./NetTemplateModal/NetTemplateModal.vue'], resolve)
    },

    methods: {
      closeModal () {
        this.$store.commit('changeShowModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-frame {
    width:100%; height:100%; top:0; left:0; position:fixed; z-index:999;
    &-container {
      top: 50%; left: 50%; transform: translate(-50%, -50%); position:absolute; z-index:5;
    }
  }
</style>