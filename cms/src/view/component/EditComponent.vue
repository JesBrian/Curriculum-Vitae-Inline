<template>
  <Card>
    <PageTitle icon="md-backspace" title="EditComponent" />

    <Button type="info" ghost style="top:71px; right:18px; position:absolute; z-index:9;">预览组件</Button>

    <Tabs v-if="componentConf !== null" v-model="nowMainTab" type="card" class="edit-config">
      <TabPane name="base" label="基本配置">
        <div v-show="nowMainTab === 'base'" style="margin: 0 18px 28px 28px;">
          <Row style="margin-bottom:23px; line-height:33px;">
            <Col span="8" style="text-align:left;">组件名称：</Col>
            <Col span="16">
              <Input v-model="name" placeholder="Enter something..." />
            </Col>
          </Row>
          <Row style="margin-bottom:23px; line-height:33px;">
            <Col span="8" style="text-align:left;">组件Logo：</Col>
            <Col span="16">
              <!--<div class="demo-upload-list" v-for="item in uploadList">-->
                <!--<template v-if="item.status === 'finished'">-->
                  <!--<img :src="item.url">-->
                  <!--<div class="demo-upload-list-cover">-->
                    <!--<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>-->
                  <!--</div>-->
                <!--</template>-->
                <!--<template v-else>-->
                  <!--<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>-->
                <!--</template>-->
              <!--</div>-->
              <!--<Upload-->
                  <!--ref="upload"-->
                  <!--:show-upload-list="false"-->
                  <!--:default-file-list="defaultList"-->
                  <!--:on-success="handleSuccess"-->
                  <!--:format="['jpg','jpeg','png']"-->
                  <!--:max-size="1024"-->
                  <!--:on-format-error="handleFormatError"-->
                  <!--:on-exceeded-size="handleMaxSize"-->
                  <!--:before-upload="handleBeforeUpload"-->
                  <!--multiple-->
                  <!--type="drag"-->
                  <!--action="//jsonplaceholder.typicode.com/posts/"-->
                  <!--style="display: inline-block;width:58px;">-->
                <!--<div style="width: 58px;height:58px;line-height: 58px;">-->
                  <!--<Icon type="ios-camera" size="20"></Icon>-->
                <!--</div>-->
              <!--</Upload>-->
            </Col>
          </Row>
          <Row style="margin-bottom:23px; line-height:33px;">
            <Col span="8" style="text-align:left;">组件标签：</Col>
            <Col span="16">
              <input-tag v-model="tags"></input-tag>
            </Col>
          </Row>
          <Row style="margin-bottom:23px; line-height:33px;">
            <Col span="8" style="text-align:left;">是否发布：</Col>
            <Col span="16" style="line-height:33px;">
              <Switch v-model="status" size="large">
                <span slot="open">ON</span>
                <span slot="close">OFF</span>
              </Switch>
            </Col>
          </Row>
        </div>
      </TabPane>
      <TabPane name="detail" label="详细配置" class="edit-config-detail">
        <Tabs v-model="nowSecondTab">
          <TabPane name="special" label="特殊">
            <div v-show="(nowMainTab === 'detail') && (nowSecondTab === 'special')" style="margin: 0 18px 28px 28px;">
            </div>
          </TabPane>
          <TabPane name="format" label="规格">
            <div v-show="(nowMainTab === 'detail') && (nowSecondTab === 'format')" style="margin: 0 18px 28px 28px;">
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件定位拖拽：</Col>
                <Col span="16">
                  <Switch v-model="componentConf.format.position.drag">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </Switch>
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件定位：</Col>
                <Col span="16">
                  <Row :gutter="16">
                    <Col span="12">
                      <label>
                        <div>组件X轴定位</div>
                        <InputNumber v-model="componentConf.format.position.axis[0]" :min="0" />
                      </label>
                    </Col>
                    <Col span="12">
                      <label>
                        <div>组件Y轴定位</div>
                        <InputNumber v-model="componentConf.format.position.axis[1]" :min="0" />
                      </label>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件缩放：</Col>
                <Col span="16">
                  <Switch v-model="componentConf.format.size.drag">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </Switch>
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件初始大小：</Col>
                <Col span="16">
                  <Row :gutter="16">
                    <Col span="12">
                      <label>
                        <div>组件长度</div>
                        <InputNumber v-model="componentConf.format.size.size[0]" :min="0" />
                      </label>
                    </Col>
                    <Col span="12">
                      <label>
                        <div>组件宽度</div>
                        <InputNumber v-model="componentConf.format.size.size[1]" :min="0" />
                      </label>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane name="input" label="输入">
            <div v-show="(nowMainTab === 'detail') && (nowSecondTab === 'input')" style="margin: 0 18px 28px 28px;">
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件是否有输入：</Col>
                <Col span="16">
                  <Switch v-model="componentConf.input.use">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </Switch>
                </Col>
              </Row>
              <div v-show="componentConf.input.use">
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">输入类型：</Col>
                  <Col span="16">
                    <RadioGroup v-model="componentConf.input.type">
                      <Radio label="text" style="margin-right:20px;" >
                        <span>文本</span>
                      </Radio>
                      <Radio label="number" style="margin-right:20px;" >
                        <span>数值</span>
                      </Radio>
                    </RadioGroup>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">标题：</Col>
                  <Col span="16">
                    <Input v-model="componentConf.input.title" />
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">默认值：</Col>
                  <Col span="16">
                    <Input v-if="componentConf.input.type === 'text'" v-model="componentConf.input[componentConf.input.type].val" />
                    <InputNumber v-if="componentConf.input.type === 'number'" v-model="componentConf.input[componentConf.input.type].val" />
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">字体颜色：</Col>
                  <Col span="16">
                    <ColorPicker v-model="componentConf.input.color" alpha size="small" />
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">文本对齐：</Col>
                  <Col span="16">
                    <Row :gutter="16">
                      <Col span="12">
                        <label>
                          水平方向
                          <Select v-model="componentConf.input.align[0]" size="small" style="width:100px">
                            <Option value="left">靠左</Option>
                            <Option value="center">居中</Option>
                            <Option value="bottom">靠右</Option>
                          </Select>
                        </label>
                      </Col>
                      <Col span="12">
                        <label>
                          垂直方向
                          <Select v-model="componentConf.input.align[1]" size="small" style="width:100px">
                            <Option value="top">顶部</Option>
                            <Option value="center">中间</Option>
                            <Option value="bottom">底部</Option>
                          </Select>
                        </label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">下划线：</Col>
                  <Col span="16">
                    <Switch v-model="componentConf.input.underline">
                      <Icon type="md-checkmark" slot="open"></Icon>
                      <Icon type="md-close" slot="close"></Icon>
                    </Switch>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">字体大小：</Col>
                  <Col span="16">
                    <InputNumber v-model="componentConf.input.size" :min="12"></InputNumber>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">内容可编辑：</Col>
                  <Col span="16">
                    <Switch v-model="componentConf.input.edit">
                      <Icon type="md-checkmark" slot="open"></Icon>
                      <Icon type="md-close" slot="close"></Icon>
                    </Switch>
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane name="style" label="样式">
            <div v-show="(nowMainTab === 'detail') && (nowSecondTab === 'style')" style="margin: 0 18px 28px 28px;">
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件背景色：</Col>
                <Col span="16">
                  <ColorPicker v-model="componentConf.style.bgColor" alpha size="small" />
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件透明度：</Col>
                <Col span="16">
                  <InputNumber v-model="componentConf.style.opacity" :min="0" :max="1" :step="0.1"></InputNumber>
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">开启边界线：</Col>
                <Col span="16">
                  <Switch v-model="componentConf.style.border[0]">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </Switch>
                </Col>
              </Row>
              <div v-if="componentConf.style.border[0]">
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">边界线宽度：</Col>
                  <Col span="16">
                    <InputNumber v-model="componentConf.style.border[1]" :min="0"></InputNumber>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">边界线形式：</Col>
                  <Col span="16">
                    <Select v-model="componentConf.style.border[2]" size="small" style="width:100px">
                      <Option value="solid">实线</Option>
                      <Option value="double">双实线</Option>
                      <Option value="dotted">点状</Option>
                      <Option value="dashed">虚线</Option>
                    </Select>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">边界线颜色：</Col>
                  <Col span="16">
                    <ColorPicker v-model="componentConf.style.border[3]" alpha size="small" />
                  </Col>
                </Row>
              </div>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">开启阴影：</Col>
                <Col span="16">
                  <Switch v-model="componentConf.style.shadow[0]">
                    <Icon type="md-checkmark" slot="open"></Icon>
                    <Icon type="md-close" slot="close"></Icon>
                  </Switch>
                </Col>
              </Row>
              <div v-if="componentConf.style.shadow[0]">
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">阴影宽度：</Col>
                  <Col span="16">
                    <InputNumber v-model="componentConf.style.shadow[1]" :min="0"></InputNumber>
                  </Col>
                </Row>
                <Row style="margin-bottom:23px; line-height:33px;">
                  <Col span="8" style="text-align:left;">阴影颜色：</Col>
                  <Col span="16">
                    <ColorPicker v-model="componentConf.style.shadow[2]" alpha size="small" />
                  </Col>
                </Row>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </TabPane>
    </Tabs>

    <Row style="margin:23px auto 18px;">
      <Col span="12" style="text-align:center;">
        <Button type="primary">取消返回</Button>
      </Col>
      <Col span="12" style="text-align:center;">
        <Button @click="saveComponent" type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  import InputTag from '_c/input-tag/input-tag.vue'
  import PageTitle from '_c/page-title/page-title.vue';

  export default {
    name: 'EditComponent',

    components: {
      InputTag, PageTitle
    },

    data () {
      return {
        nowMainTab: 'base',
        nowSecondTab: 'special',
        componentId: '',
        componentConf: null,
        name: '',
        logo: '',
        tags: [],
        status: false,
      }
    },

    created () {
      this.$localForage.getItem('componentConf').then(val => {
        if (val) {
          this.componentConf = val;
        } else {
          this.getComponentListConfData();
        }
      }).catch(err => {
        console.log(err);
      });
      const id = this.$route.query.id;
      if (id) {
        this.componentId = id;
      }
    },

    methods: {
      getComponentListConfData () {
        this.$http.get('componentConf').then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.$localForage.setItem('componentConf', result.data);
          }
        }).catch(err => {
          console.log(err);
        })
      },

      saveComponent () {
        const errTip = this.checkComponentDataFill();
        if (errTip !== '') {
          this.$Notice.error({
            title: errTip,
            desc: ''
          });
          return false;
        }
        let componentData = {
          name: this.name,
          logo: this.logo,
          tags: this.tags,
          status: this.status,
          conf: this.componentConf
        };
        if (this.componentId !== '') {
          componentData.id = this.componentId;
        }
        this.$http.put('saveComponent', componentData).then(res => {
          const result = res.data;
          if (result.status === 200) {
          }
        }).catch(err => {
          console.log(err);
        })
      },

      /**
       * 检查组件配置数据是否填写完整
       */
      checkComponentDataFill () {
        let errTips = '';
        if (this.name === '') errTips = '请填写组件名称';
        return errTips
      }
    }
  }
</script>

<style lang="less" scoped>
  .edit-config {
    .ivu-tabs {
      overflow: visible;
    }
  }
</style>