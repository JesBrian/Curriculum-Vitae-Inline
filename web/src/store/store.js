import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    nowCell: null,
    showModal: '',
    showTips: false,

    designConf: []
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

    changedesignConf (state, config = []) {
      state.designConf = config;
    }
  },
  actions: {

  }
})
