import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    nowCell: null,
    showModal: '',
  
    dragComponent: null, // 拖拽创建
    nowComponentIndex: -1, // 当前选中
    designConf: {
      name: '未命名',
      logo: '',
      bg: '#FFF',
      status: true,
      size: [], // [长,宽]
      cell: [],
      tags: []
    }
  },
  mutations: {
    changeUserInfo (state, userInfo = null) {
      state.userInfo = userInfo;
    },
    
    changeNowCell (state, cell) {
      state.nowCell = cell;
    },

    changeShowModal (state, modalType = '') {
      state.showModal = modalType;
    },
  
    changeDragComponent (state, component = null) {
      state.dragComponent = component;
    },

    changeNowComponentIndex (state, index = -1) {
      state.nowComponentIndex = index;
    },

    changeDesignConf (state, conf = {
      name: '未命名',
      logo: '',
      bg: '#FFF',
      size: [], // [长,宽]
      tags: [],
      cell: [],
      status: true
    }) {
      Object.assign(state.designConf, conf)
    },

    changeDesignConfBg (state, bg = '#FFF') {
      state.designConf.bg = bg;
    },

    changeDesignConfCell (state, data = {
      op: '',
      index: -1,
      cell: {}
    }) {
      if (data.op === 'del') {
        state.designConf.cell.splice(data.index, 1);
      } else if (data.op === 'add') {
        state.designConf.cell.push(data.cell);
      } else if (data.op === 'rev') {
        state.designConf.cell[data.index] = Object(state.designConf.cell[data.index], data.cell);
      }
    },
    
    changeDesignConfCellResize (state, data = {
      index: 0,
      size: [0, 0],
      position: [0, 0]
    }) {
      state.designConf.cell[data.index].conf.format.size.size = data.size;
      state.designConf.cell[data.index].conf.format.position.axis = data.position;
    }
  },
  actions: {

  }
})
