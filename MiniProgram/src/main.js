import Vue from 'vue'
import App from './App'

import httpRequest from './utils/request.js'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = httpRequest
Vue.prototype.globalData = App.globalData
const app = new Vue(App)
app.$mount()
