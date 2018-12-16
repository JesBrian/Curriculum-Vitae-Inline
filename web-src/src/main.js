import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false


// 引入 axios
import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true
axios.defaults.headers['Accept'] = '*/*'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:7000/' // 配置 API 路径
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.data = qs.stringify(config.data)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
Vue.prototype.$http = axios


// 引入 iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)


// import COMPONENT_CELL from './conf/COMPONENT_CELL_CONF.js';
// Vue.prototype.$COMPONENT_CELL = COMPONENT_CELL;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
