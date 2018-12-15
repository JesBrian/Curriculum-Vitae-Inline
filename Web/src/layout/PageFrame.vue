<template>
  <Layout class="layout">
    <TopNavbar @changeRightNavbar="changeRightNavbar" />
    <Layout>

      <!-- 左侧菜单 -->
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu theme="dark" width="auto" :class="menuitemClasses">
          <Submenu v-for="(categoryItem, index) in componentCell" :name="categoryItem.ch">
            <template slot="title">
              <Icon :type="categoryItem.icon" />{{categoryItem.ch}}
            </template>
            <div :name="`${categoryItem}${index}`">
              <div v-if="categoryItem.cell.length" style="padding:12px 4px 4px;">
                <div v-for="cellItem in categoryItem.cell" class="cell-item" draggable="true">{{cellItem.id}}</div>
              </div>
              <div v-else>
                请登录账号同步组件信息
              </div>
            </div>
          </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>

      <Content class="page-layout" style="padding:50px 20px 20px;">
        <PathNavbar />

        <Layout style="background:#fff; min-height:260px">
          <slot />
        </Layout>
      </Content>
    </Layout>

    <Drawer title="Basic Drawer" :closable="false" v-model="showRightNavbar">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </Layout>
</template>

<script>
  import TopNavbar from './TopNavbar/TopNavbar.vue'
  import PathNavbar from './PathNavbar/PathNavbar.vue'

  export default {
    name: 'PageFrame',

    components: {
      TopNavbar, PathNavbar
    },

    data () {
      return {
        isCollapsed: false,
        showRightNavbar: false,

        componentCell: {
          PreventCell: {
            ch: '预设组件',
            icon: 'md-list',
            cell: [
              {id: 1, name: '姓名'},
              {id: 2, name: '头像'},
              {id: 3, name: '手机'},
              {id: 4, name: '邮箱'},
              {id: 5, name: '地址'},
              {id: 6, name: '职位'},
              {id: 7, name: '薪酬'}
            ]
          },
          BaseCell:{
            ch: '基本组件',
            icon: 'ios-browsers',
            cell: [
              {id: 8, name: '文本'},
              {id: 9, name: '线条'},
              {id: 10, name: '图片'},
              {id: 11, name: '三角形'},
              {id: 12, name: '矩形'},
              {id: 13, name: '圆形'}
            ]
          },
          AdvanceCell:{
            ch: '高级组件',
            icon: 'logo-dropbox',
            cell: [
              {id: 14, name: '星星'},
              {id: 15, name: '心形'}
            ]
          },
          SelfCell: {
            ch: '个人组件',
            icon: 'ios-briefcase',
            cell: []
          },
          NetCell: {
            ch: '网络组件库',
            icon: 'md-code-download',
            cell: []
          }
        }
      }
    },

    computed: {
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },

    methods: {
      changeRightNavbar () {
        this.showRightNavbar = !this.showRightNavbar;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .page-layout {
    padding-top:30px;
    position:relative;
  }


  .cell-item {
    width:33px; height:33px; margin:0 7px 8px; display:inline-block; border-radius:4px; background:#AAA; box-shadow:0 0 12px #282828;
    &:hover {
      box-shadow:1px 1px 10px #000; cursor:pointer;
    }
    &:active {
      cursor:crosshair;
    }
  }
</style>