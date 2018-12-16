import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/ChooseTemplate',
      name: 'ChooseTemplate',
      component: () => import(/* webpackChunkName: "about" */ './views/ChooseTemplate.vue')
    },
    {
      path: '/ChooseFormat',
      name: 'ChooseFormat',
      component: () => import(/* webpackChunkName: "about" */ './views/ChooseFormat.vue')
    },
  ]
})
