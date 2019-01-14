<template>
  <ModalFrame title="搜索网络模板" style="width: 628px; height: 468px; padding:0 28px;">
    <div style="width: 100%; height: 338px; background: lightblue;">This is Select Net Template Modal !</div>
    <div style="margin-top:18px; text-align:center">
      <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消</Button>
      <Button @click="" type="primary" style="width:38%; float:right; font-size:16px">确定</Button>
    </div>
  </ModalFrame>
</template>

<script>
  import ModalFrame from '../../ModalFrame/ModalFrame.vue'

  export default {
    name: 'NetTemplateModal',

    components: {
      ModalFrame
    },

    methods: {
      closeModal () {
        this.$parent.closeModal();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>