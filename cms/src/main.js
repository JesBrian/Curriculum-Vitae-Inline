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
axios.defaults.withCredentials = false;
axios.defaults.headers['Accept'] = '*/*';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:3000/'; // 配置 API 路径
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

// 垃圾组件只能这样子使用 - 等待以后改造
import TreeView from 'vue-json-tree-view'
Vue.use(TreeView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
