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
      name: '',
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
      name: '',
      logo: '',
      bg: '#FFF',
      status: true,
      size: [], // [长,宽]
      cell: [],
      tags: []
    }) {
      state.designConf = conf;
    },

    changeDesignConfSize (state, size = [0, 0]) {
      state.designConf.size = size;
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
      }
    }
  },
  actions: {

  }
})
