import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowCell: null,
    showModal: '',
    showTips: false,

    resumeConfig: []
  },
  mutations: {
    changeNowCell (state, cell) {
      state.nowCell = cell;
    },

    changeShowModal (state, modalType = '') {
      state.showModal = modalType;
    },

    changeShowTips (state, status = false) {
      state.showTips = status;
    },

    changeResumeConfig (state, config = []) {
      state.resumeConfig = config;
    }
  },
  actions: {

  }
})
