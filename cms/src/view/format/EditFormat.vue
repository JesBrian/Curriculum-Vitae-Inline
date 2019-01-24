<template>
  <Card>
    EditFormat
    <Divider />

    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式名称：</Col>
      <Col span="16">
        <Input placeholder="Enter something..." />
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">格式宽高：</Col>
      <Col span="16">
        <InputNumber :min="1"></InputNumber>
        <span style="margin:0 12px;">X</span>
        <InputNumber :min="1"></InputNumber>
      </Col>
    </Row>
    <Row style="margin-bottom:23px;">
      <Col span="8" style="line-height:30px; text-align:center;">是否启用：</Col>
      <Col span="16" style="line-height:30px;">
        <RadioGroup>
          <Radio label="启用" style="margin-right:20px;" />
          <Radio label="禁用" style="margin-right:20px;" />
        </RadioGroup>
      </Col>
    </Row>
    <Row style="margin-top:23px;">
      <Col span="12" style="text-align:center;">
        <Button type="primary">取消返回</Button>
      </Col>
      <Col span="12" style="text-align:center;">
        <Button type="primary">确定保存</Button>
      </Col>
    </Row>
  </Card>
</template>

<script>
  export default {
    name: 'EditFormat'
  }
</script>

<style lang="scss" scoped>

</style>