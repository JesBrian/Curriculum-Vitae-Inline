<template>
  <Menu ref="cellComponentBox" theme="dark" width="auto" :class="menuitemClasses">
    <Submenu v-for="(categoryItem, categoryIndex) in componentCell" :key="categoryIndex + '12'" :name="categoryItem.ch">
      <template slot="title">
        <Icon :type="categoryItem.icon" />{{categoryItem.ch}}
      </template>
      <div :name="`${categoryItem}${categoryIndex}`">
        <div v-if="categoryItem.cell.length" style="padding:15px 10px 3px;">
          <Tooltip v-for="(cellItem, cellIndex) in categoryItem.cell" :key="cellIndex + categoryIndex + '05'" :content="cellItem.name" theme="light" placement="right-start">
            <MenuCell @dblclick.native="createCell(cellItem._id)" :data-id="cellItem._id" :cell-data="cellItem" />
          </Tooltip>
        </div>
        <div v-else-if="$store.state.userInfo" style="text-align: center; color: #CCC; line-height: 43px; letter-spacing: 1px;">
          该分类暂无组件
        </div>
        <div @click="showModal('LoginRegisterModal')" v-else style="text-align: center; color: #CCC; line-height: 43px; letter-spacing: 1px; cursor: pointer;">
          请登录账号同步组件信息
        </div>
      </div>
    </Submenu>

    <HiddenComponentContainer :cell-list="componentCell" />
  </Menu>
</template>

<script>
  import HiddenComponentContainer from '../../../components/HiddenComponentContainer/HiddenComponentContainer.vue'
  import MenuCell from './MenuCell/MenuCell.vue'

  export default {
    name: 'LeftNavbar',

    components: {
      HiddenComponentContainer, MenuCell
    },

    props: {
      isCollapsed: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        nowDragCellDom: null,
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
          CollectionCell: {
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
      let hiddenComponentContainer = document.querySelector('#hiddenComponentContainer');

      let cellDom = null;
      this.nowDragCellDom.addEventListener('dragstart', (event) => {
        const cellId = event.target.dataset.id;
        const component = this.getComponentDataById(cellId);
        this.$store.commit('changeDragComponent', component);
        cellDom = hiddenComponentContainer.querySelector(`#cell${cellId}`).cloneNode(true);
        cellDom.id = 'nowNewDrag';
        hiddenComponentContainer.appendChild(cellDom);
        event.dataTransfer.setDragImage(cellDom, component.conf.format.size.size[0] / 2, component.conf.format.size.size[0] / 2);
      }, false);
      this.nowDragCellDom.addEventListener('dragend', () => {
        if (cellDom) {
          hiddenComponentContainer.removeChild(cellDom);
          this.$store.commit('changeDragComponent');
        }
      }, false);
    },

    beforeDestroy() {
      this.nowDragCellDom.removeEventListener('dragstart', null);
      this.nowDragCellDom.removeEventListener('dragend', null);
    },

    methods: {
      initComponent () {
        // this.$localForage.getItem('componentList').then(val => {
        //   if (val) {
        //     this.componentCell.PreventCell.cell = val.prevent;
        //     this.componentCell.BaseCell.cell = val.base;
        //     this.componentCell.AdvanceCell.cell = val.advance;
        //     this.componentCell.SelfCell.cell = val.self;
        //     this.componentCell.CollectionCell.cell = val.collection;
        //     return true;
        //   }
          Promise.all([
            this.initSystemComponent(),
            this.initSelfComponent(),
            this.initCollectionComponent()
          ]).then(res => {
            this.saveComponentDataForLocal();
          });
        // });
      },

      initSystemComponent () {
        return new Promise((resolve, reject) => {
          this.$http.get('systemComponentList').then(({data}) => {
            if (data.status === 200) {
              const systemComponent = data.data;
              this.componentCell.PreventCell.cell = systemComponent.prevent;
              this.componentCell.BaseCell.cell = systemComponent.base;
              this.componentCell.AdvanceCell.cell = systemComponent.advance;
              resolve();
            }
          }).catch(err => {
            console.log(err);
          })
        })
      },

      initSelfComponent () {
        return new Promise((resolve, reject) => {
          if (!this.$store.state.userInfo) {
            return resolve();
          }
          this.$http.get(`selfComponentList?userId=${this.$store.state.userInfo.id}&all=true`).then(({data}) => {
            if (data.status === 200) {
              this.componentCell.SelfCell.cell = data.data;
              resolve();
            }
          }).catch(err => {
            console.log(err);
          })
        })
      },

      initCollectionComponent () {
        return new Promise((resolve, reject) => {
          if (!this.$store.state.userInfo) {
            return resolve();
          }
          this.$http.get(`collectionComponentList?userId=${this.$store.state.userInfo.id}&all=true`).then(({data}) => {
            this.componentCell.CollectionCell.cell = data.data;
            resolve();
          }).catch(err => {
            console.log(err);
          })
        })
      },

      saveComponentDataForLocal () {
        const data = {
          prevent: this.componentCell.PreventCell.cell,
          base: this.componentCell.BaseCell.cell,
          advance: this.componentCell.AdvanceCell.cell,
          self: this.componentCell.SelfCell.cell,
          collection: this.componentCell.CollectionCell.cell
        };
        this.$localForage.setItem('componentList', data);
      },

      createCell (cellId = '') {
        this.$store.commit('changeDesignConfCell', {
          op: 'add',
          cell: this.getComponentDataById(cellId)
        });

        this.$http.put('chooseComponentLog', {
          userId: this.$store.state.userInfo ? this.$store.state.userInfo.id : '',
          componentId: cellId
        });
      },

      getComponentDataById (id = '') {
        for (const key in this.componentCell) {
          for (let i = 0, len = this.componentCell[key].cell.length; i < len; i++) {
            if (this.componentCell[key].cell[i]._id === id) {
              return this.componentCell[key].cell[i];
            }
          }
        }
      },

      showModal (modalType = '') {
        this.$store.commit('changeShowModal', modalType);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>