import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    nowCell: null,
    showModal: '',
    showTips: false,

    designConf: {
      size: [], // [长,宽]
      bg: '#FFF',
      cell: []
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

    changeShowTips (state, status = false) {
      state.showTips = status;
    },

    changeDesignConf (state, conf = {
      size: [],
      bg: '#FFF',
      cell: []
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
