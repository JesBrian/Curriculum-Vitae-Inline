<template>
  <Menu ref="cellComponentBox" theme="dark" width="auto" :class="menuitemClasses">
    <Submenu v-for="(categoryItem, categoryIndex) in componentCell" :key="categoryIndex + '12'" :name="categoryItem.ch">
      <template slot="title">
        <Icon :type="categoryItem.icon" />{{categoryItem.ch}}
      </template>
      <div :name="`${categoryItem}${categoryIndex}`">
        <div @click="showModal('LoginRegisterModal')" v-if="$store.state.userInfo" style="text-align: center; color: #CCC; line-height: 43px; letter-spacing: 1px; cursor: pointer;">
          请登录账号同步组件信息
        </div>
        <div v-else-if="categoryItem.cell.length" style="padding:15px 10px 3px;">
          <Tooltip v-for="(cellItem, cellIndex) in categoryItem.cell" :key="cellIndex + categoryIndex + '05'" :content="cellItem.name" theme="light" placement="right-start">
            <div class="cell-item" draggable="true">{{cellItem.id}}</div>
          </Tooltip>
        </div>
        <div v-else style="text-align: center; color: #CCC; line-height: 43px; letter-spacing: 1px;">
          该分类暂无组件
        </div>
      </div>
    </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: 'LeftNavbar',

    props: {
      isCollapsed: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        nowDragCellDom: null,
        hiddenComponentContainer: null,
        componentCell: {
          PreventCell: {
            ch: '预设组件',
            icon: 'md-list',
            cell: []
          },
          BaseCell:{
            ch: '基本组件',
            icon: 'ios-browsers',
            cell: []
          },
          AdvanceCell:{
            ch: '高级组件',
            icon: 'logo-dropbox',
            cell: []
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
          'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },

    created () {
      this.initComponent();
    },

    mounted () {
      this.nowDragCellDom = this.$refs.cellComponentBox.$el;
      this.hiddenComponentContainer = document.querySelector('#hiddenComponentContainer');

      this.nowDragCellDom.addEventListener('dragstart', (event) => {
        let cellDom = event.target.cloneNode(true);
        cellDom.style.background = 'lightblue';
        cellDom.id = 'tempCellComponent';
        this.hiddenComponentContainer.appendChild(cellDom);
        event.dataTransfer.setDragImage(cellDom, 16, 16);
      }, false);
      this.nowDragCellDom.addEventListener('dragend', () => {
        this.hiddenComponentContainer.removeChild(this.hiddenComponentContainer.childNodes[0]);
      }, false);
    },

    beforeDestroy() {
      this.nowDragCellDom.removeEventListener('dragstart', null);
      this.nowDragCellDom.removeEventListener('dragend', null);
    },

    methods: {
      initComponent () {
        this.initSystemComponent();
        this.initSelfComponent();
        this.initCollectionComponent();
      },

      initSystemComponent () {
        this.$http.get('systemComponentList').then(({data}) => {
          if (data.status === 200) {
            const systemComponent = data.data;
            this.componentCell.PreventCell.cell = systemComponent.prevent;
            this.componentCell.BaseCell.cell = systemComponent.base;
            this.componentCell.AdvanceCell.cell = systemComponent.advance;
          }
        }).catch(err => {
          console.log(err);
        })
      },

      initSelfComponent () {
        this.$http.get('selfComponentList').then(({data}) => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      },

      initCollectionComponent () {
        this.$http.get('collectionComponentList').then(({data}) => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      },

      showModal (modalType = '') {
        this.$store.commit('changeShowModal', modalType);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cell-item {
    width:32px; height:32px; margin:0 6px 8px; display:inline-block; box-sizing:border-box; border:1px solid #282828; border-radius:4px; box-shadow:0 0 12px #282828;
    &:hover {
      box-shadow:1px 1px 10px #000; cursor:pointer;
    }
    &:active {
      cursor:move;
    }
  }
</style>