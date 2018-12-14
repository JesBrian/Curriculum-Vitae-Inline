import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowCell: null,
    showTemp: false,
    showModal: false,
    showTips: false,
  },
  mutations: {
    changeNowCell (state, cell) {
      state.nowCell = cell;
    },

    changeShowTemp (state, status = 'false') {
      state.showTemp = status;
    },
    changeShowModal (state, status = 'false') {
      state.showModal = status;
    },
    changeShowTips (state, status = 'false') {
      state.showTips = status;
    }
  },
  actions: {

  }
})
