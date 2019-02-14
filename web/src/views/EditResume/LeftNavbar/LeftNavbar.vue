<template>
  <Menu ref="cellComponentBox" theme="dark" width="auto" :class="menuitemClasses">
    <Submenu v-for="(categoryItem, categoryIndex) in componentCell" :key="categoryIndex + '12'" :name="categoryItem.ch">
      <template slot="title">
        <Icon :type="categoryItem.icon" />{{categoryItem.ch}}
      </template>
      <div :name="`${categoryItem}${categoryIndex}`">
        <div v-if="categoryItem.cell.length" style="padding:13px 10px 5px;">
          <Tooltip v-for="(cellItem, cellIndex) in categoryItem.cell" :key="cellIndex + categoryIndex + '05'" :content="cellItem.name" theme="light" placement="right-start">
            <div class="cell-item" draggable="true">{{cellItem.id}}</div>
          </Tooltip>
        </div>
        <div v-else style="text-align: center; color: #CCC; line-height: 43px; letter-spacing: 1px;">
          请登录账号同步组件信息
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
        tempCellBoxDom: null,
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
      this.tempCellBoxDom = document.querySelector('#tempDragBox');

      this.nowDragCellDom.addEventListener('dragstart', (event) => {
        let cellDom = event.target.cloneNode(true);
        cellDom.style.background = 'red';
        cellDom.id = 'tempCellComponent';
        this.tempCellBoxDom.appendChild(cellDom);
        event.dataTransfer.setDragImage(cellDom, 16, 16);
      }, false);
      this.nowDragCellDom.addEventListener('dragend', () => {
        this.tempCellBoxDom.removeChild(this.tempCellBoxDom.childNodes[0]);
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
          console.log(data);
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