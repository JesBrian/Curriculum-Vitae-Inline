<template>
  <div>
    <Row>
      <Col span="14">
        <Input v-model="tag" @keyup.native.enter="createTag" placeholder="Enter tag ..." />
      </Col>
      <Col span="10" style="text-align:center">
        <Button @click="clearTagInput" type="warning" ghost>清除</Button>
        <Button @click="createTag" type="info" ghost>保存</Button>
      </Col>
    </Row>
    <div v-if="value.length !== 0" style="margin-top: 8px;">
      <Tag v-for="(tagItem, index) in value" @on-close="tagClose(index)" color="primary" type="dot" closable>{{tagItem}}</Tag>
      <Button @click="clearTags" type="error" ghost size="small" style="margin-top:2px;">清除已有标签</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputTag',

    props: {
      value: {
        type: Array,
        default: () => {
          return [];
        }
      },
      max: {
        type: Number,
        default: 3
      }
    },

    data () {
      return {
        tag: '',
        tags: this.value
      }
    },

    watch: {
      'value.length': {
        handler (nVal) {
          if (nVal > this.max) {
            this.tags.splice(this.max, nVal);
          }
        },
        immediate: true
      },
      tags (nVal) {
        this.$emit('input', nVal);
      }
    },

    methods: {
      clearTagInput () {
        this.tag = ''
      },

      createTag () {
        if (this.tag === '') return;
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