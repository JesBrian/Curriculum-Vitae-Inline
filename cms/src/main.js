// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from './locale'
import config from './config'
import importDirective from './directive'
import installPlugin from './plugin'
import 'iview/dist/styles/iview.css'
import '@/assets/icons/iconfont.css'
// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)


// 引入 axios
import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = false;
axios.defaults.headers['Accept'] = '*/*';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:3000/'; // 配置 API 路径
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.data = qs.stringify(config.data);
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
Vue.prototype.$http = axios;

// 引入 localForage
import localForage from 'localforage'
localForage.config({
  driver: localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name: 'Inline Curriculum Vitae',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'cv-localforage', // Should be alphanumeric, with underscores.
  description: 'Inline Curriculum Vitae'
});
Vue.prototype.$localForage = localForage;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
