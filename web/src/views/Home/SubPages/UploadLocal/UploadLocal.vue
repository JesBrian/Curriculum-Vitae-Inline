<template>
  <div>
    <PathNavbar>
      <BreadcrumbItem>
        <Icon type="ios-clipboard" /> 本地存储
      </BreadcrumbItem>

      <div slot="right">
        <Button @click="uploadLocal" type="info" icon="md-list" size="small" ghost style="margin:0 3px;">本地打开</Button>
      </div>
    </PathNavbar>

    <div style="padding:0 18px 0 38px;">
      <Collapse v-model="openCollapse">
        <Panel name="0">
          今天
          <div slot="content">
            <CellGroup>
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
            </CellGroup>
          </div>
        </Panel>
        <Panel name="1">
          最近三天
          <div slot="content">
            <CellGroup>
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
            </CellGroup>
          </div>
        </Panel>
        <Panel name="2">
          最近一周
          <div slot="content">
            <CellGroup>
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
            </CellGroup>
          </div>
        </Panel>
        <Panel name="3">
          最近一月
          <div slot="content">
            <CellGroup>
              <Cell title="Display label content" label="label content" extra="details" />
              <Divider class="cell-divider" />
              <Cell title="Display label content" label="label content" extra="details" />
            </CellGroup>
          </div>
        </Panel>
        <Panel name="4">
          更久以前
          <div slot="content">
            <CellGroup>
              <Cell title="Display label content" label="label content" extra="details" />
            </CellGroup>
          </div>
        </Panel>
      </Collapse>
    </div>
  </div>
</template>

<script>
  import PathNavbar from '../../PathNavbar.vue'

  export default {
    name: 'UploadLocal',

    components: {
      PathNavbar
    },

    data () {
      return {
        openCollapse: ['0', '1']
      }
    },

    methods: {
      uploadLocal () {
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-divider {
    margin: 8px auto;
  }
</style>