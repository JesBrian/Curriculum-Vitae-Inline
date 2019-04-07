<template>
  <ModalFrame title="自定义格式" style="width: 428px; height: 248px;">
    <Form style="margin:28px 18px 0;">
      <FormItem prop="mobile">
        <Input v-model="width" type="number" placeholder="请输入宽度">
          <Icon type="ios-contact" slot="prepend" size="22" />
        </Input>
        <!--<p class="error-text" v-show="Login.error.mobile">{{Login.error.mobile}}</p>-->
      </FormItem>
      <FormItem prop="password">
        <Input v-model="height" type="number" placeholder="请输入高度">
          <Icon type="ios-key" slot="prepend" size="22" />
        </Input>
        <!--<p class="error-text" v-show="Login.error.password">{{Login.error.password}}</p>-->
      </FormItem>
      <FormItem style="text-align:center">
        <Button @click="closeModal" type="primary" style="width:38%; float:left; font-size:16px">取消</Button>
        <Button @click="goEditResume" type="primary" style="width:38%; float:right; font-size:16px">确定</Button>
      </FormItem>
    </Form>
  </ModalFrame>
</template>

<script>
  import ModalFrame from '../../ModalFrame/ModalFrame.vue'

  export default {
    name: 'SelfDefineFormatModal',

    components: {
      ModalFrame
    },

    data () {
      return {
        width: 1,
        height: 1
      }
    },

    methods: {
      goEditResume () {
        this.$store.commit('changeDesignConf', {
          size: [this.width, this.height]
        });
        this.closeModal();
        this.$nextTick(() => {
          this.$router.push('/EditResume');
        });
      },

      closeModal () {
        this.$parent.closeModal();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>