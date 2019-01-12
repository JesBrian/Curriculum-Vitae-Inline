<template>
  <Card shadow style="width: 428px; height: 238px;">
    <Form style="margin:28px 18px 0;">
      <FormItem prop="mobile">
        <Input type="number" placeholder="请输入宽度">
          <Icon type="ios-contact" slot="prepend" size="22" />
        </Input>
        <!--<p class="error-text" v-show="Login.error.mobile">{{Login.error.mobile}}</p>-->
      </FormItem>
      <FormItem prop="password">
        <Input type="number" placeholder="请输入高度">
          <Icon type="ios-key" slot="prepend" size="22"/>
        </Input>
        <!--<p class="error-text" v-show="Login.error.password">{{Login.error.password}}</p>-->
      </FormItem>
      <FormItem style="margin-top:30px; text-align:center">
        <Button type="primary" style="width:38%; float:left; font-size:16px">取消</Button>
        <Button type="primary" style="width:38%; float:right; font-size:16px">确定</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>
  export default {
    name: 'SelfDefineFormatModal',

    data () {
      return {
        width: 1,
        height: 1
      }
    },

    method: {
    }
  }
</script>

<style lang="scss" scoped>

</style>