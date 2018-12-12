import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowCell: null
  },
  mutations: {
    changeNowCell (state, cell) {
      state.nowCell = cell;
    }
  },
  actions: {

  }
})
