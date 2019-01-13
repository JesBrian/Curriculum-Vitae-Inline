<template>
  <Card shadow style="position:relative;">
    <Icon @click="closeModal" type="md-close" size="25" class="close-btn" />
    <div style="margin-bottom:8px; text-align:center; font-size:18px; font-weight:700; letter-spacing:2px;">{{ title }}</div>
    <slot />
  </Card>
</template>

<script>
  export default {
    name: 'ModalFrame',

    props: {
      title: {
        type: String,
        default: ''
      }
    },

    methods: {
      closeModal () {
        this.$store.commit('changeShowModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close-btn {
    top:3px; right:3px; position:absolute; cursor:pointer;
    &:hover {
      color: #348EED;
      text-shadow: 1px 1px 1px #AAA;
    }
  }
</style>