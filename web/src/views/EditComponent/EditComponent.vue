<template>
  <Layout style="width: 100%; height: 100%; padding: 20px; position: relative; box-sizing: border-box;">
    <Split v-model="splitArea" mode="vertical" style="width: 100%; height: 100%; box-shadow: 0 0 5px -1px #333; border-radius: 8px; background: #FFF; overflow: auto;" >
      <div slot="top" class="demo-split-pane" style="width: 100%; height: 100%; padding-top: 30px; position: relative; overflow: auto;">
        <DraggableResizableCell v-for="(cellItem, index) in $store.state.designConf.cell"
                                :cellIndex="index" :cell-data="cellItem" style="top: 50%; left: 50%; transform: translate(-50%, -50%);" />
      </div>

      <div slot="bottom" class="demo-split-pane" style="padding-top: 20px;">
        <Tabs v-if="componentConf !== null" v-model="nowMainTab" type="card" class="edit-config">
          <TabPane name="base" label="基本配置">
            <div v-if="nowMainTab === 'base'" style="margin: 0 18px 28px 28px;">
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件名称：</Col>
                <Col span="16">
                  <Input v-model="name" placeholder="Enter something..." />
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件缩略图：</Col>
                <Col span="16">
                  <div class="demo-upload-list" v-for="item in uploadList">
                    <template v-if="item.status === 'finished'">
                      <img :src="item.url">
                      <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                      </div>
                    </template>
                    <template v-else>
                      <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                  </div>
                  <Upload
                      ref="upload"
                      :show-upload-list="false"
                      :default-file-list="defaultList"
                      :on-success="handleSuccess"
                      :format="['jpg','jpeg','png']"
                      :max-size="1024"
                      :on-format-error="handleFormatError"
                      :on-exceeded-size="handleMaxSize"
                      :before-upload="handleBeforeUpload"
                      :data="{type: 'ComponentLogo'}"
                      type="drag"
                      action="//localhost:3000/uploadImg"
                      style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                      <Icon type="ios-camera" size="20"></Icon>
                    </div>
                  </Upload>
                </Col>
              </Row>
              <Row style="margin-bottom:23px; line-height:33px;">
                <Col span="8" style="text-align:left;">组件标签：</Col>
                <Col span="16">
                  <InputTag v-model="tags"></InputTag>
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
            <Tabs v-if="nowMainTab === 'detail'" v-model="nowSecondTab">
              <TabPane name="format" label="规格">
                <div v-show="nowSecondTab === 'format'" style="margin: 0 18px 28px 28px;">
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
                <div v-show="nowSecondTab === 'input'" style="margin: 0 18px 28px 28px;">
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
                <div v-show="nowSecondTab === 'style'" style="margin: 0 18px 28px 28px;">
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
      </div>
    </Split>
  </Layout>
</template>

<script>
  import DraggableResizableCell from '../../components/Cell/DraggableResizableCell/DraggableResizableCell.vue';
  import InputTag from '../../components/InputTag/InputTag.vue';

  export default {
    name: 'EditComponent',

    components: {
      DraggableResizableCell,
      InputTag
    },

    data () {
      return {
        splitArea: 0.3,
        timer: null,

        nowMainTab: 'base',
        nowSecondTab: 'format',
        componentId: '',
        componentConf: null,
        id: '',
        name: '',
        logo: '',
        graphics: true,
        tags: [],
        specialStatus: false,
        special: '',
        status: false,

        imgName: '',
        visible: false,
        defaultList: [],
        uploadList: []
      }
    },

    watch: {
      componentConf: {
        handler (nVal, oVal) {
          // console.log(nVal, oVal);
          if (oVal === null) {
            this.$store.commit('changeDesignConfCell', {
              op: 'add',
              cell: {
                conf: nVal
              }
            });
          } else {
            if (this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              this.$store.commit('changeDesignConfCell', {
                op: 'rev',
                index: 0,
                cell: {
                  conf: nVal
                }
              });
            }, 500);
          }
        },
        deep: true
      }
    },

    created () {
      const id = this.$route.query.id;
      if (id) {
        return this.$http.get(`getComponentById?id=${id}`).then(({data}) => {
          if (data.status === 200) {
            const componentData = data.data;
            this.id = componentData._id;
            this.name = componentData.name;
            this.tags = componentData.tags;
            this.status = componentData.status;
            this.componentConf = componentData.conf;
            if (componentData.logo) {
              this.logo = componentData.logo;
              this.uploadList.push({
                name: componentData.logo,
                url: `http://localhost:3000/img/component/logo/${componentData.logo}`,
                status: 'finished'
              });
            }
          }
        }).catch(err => {
          console.log(err);
        });
      }
      this.$localForage.getItem('componentConf').then(val => {
        if (val) {
          this.componentConf = val;
          this.$nextTick().then(() => {
            if (this.uploadList.length === 0) {
              this.uploadList = this.$refs.upload.fileList;
            }
          });
        } else {
          this.getComponentListConfData();
        }
      }).catch(err => {
        console.log(err);
      });
    },

    methods: {
      getComponentListConfData () {
        this.$http.get('componentConf').then(res => {
          const result = res.data;
          if (result.status === 200) {
            this.$localForage.setItem('componentConf', result.data);
            this.componentConf = result.data;
            this.$nextTick().then(() => {
              if (this.uploadList.length === 0) {
                this.uploadList = this.$refs.upload.fileList;
              }
            });
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
          category: 'extend',
          graphics: false,
          tags: this.tags,
          status: this.status,
          conf: this.componentConf
        };
        if (this.id !== '') {
          componentData.id = this.id;
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
      },


      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        console.log(res);
        if (res.status === 200) {
          this.logo = res.data;
          file.name = res.data;
          file.url = `http://localhost:3000/img/component/logo/${file.name}`;
        }
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 1M.'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 1;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to one pictures can be uploaded.'
          });
        }
        return check;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-config {
    .ivu-tabs {
      overflow: visible;
    }
  }

  .demo-split-pane{
    padding: 10px;
    box-sizing: border-box;
  }


  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>