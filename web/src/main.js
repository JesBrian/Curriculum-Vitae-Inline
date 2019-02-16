import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

import './assets/styles/common.scss';

Vue.config.productionTip = false;

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

// 引入 iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);


// import COMPONENT_CELL from './conf/COMPONENT_CELL_CONF.js';
// Vue.prototype.$COMPONENT_CELL = COMPONENT_CELL;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
