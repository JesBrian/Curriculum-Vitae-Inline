<template>
  <div>
    <Row>
      <Col span="15">
        <Input v-model="tag" placeholder="Enter some tags ..." />
      </Col>
      <Col span="9" style="text-align:center">
        <Button @click="clearTagInput" type="warning" ghost>清除</Button>
        <Button @click="createTag" type="info" ghost>保存</Button>
      </Col>
    </Row>
    <div v-if="tags.length !== 0" style="margin-top: 8px;">
      <Tag v-for="(tagItem, index) in tags" @on-close="tagClose(index)" color="primary" type="dot" closable>{{tagItem}}</Tag>
      <Button @click="clearTags" type="error" ghost size="small">清除已有标签</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputTag',

    data () {
      return {
        tag: '',
        tags: [
          '标签1', '标签2', '标签3'
        ]
      }
    },

    methods: {
      clearTagInput () {
        this.tag = ''
      },

      createTag () {
        this.tags.push(this.tag);
        this.tag = '';
      },

      tagClose (tagIndex) {
        this.tags.splice(tagIndex, 1);
      },

      clearTags () {
        this.tags = [];
      }
    }
  }
</script>

<style scoped>

</style>