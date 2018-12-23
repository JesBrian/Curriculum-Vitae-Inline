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
      component: (resolve) => require(['./views/Home.vue'], resolve)
    },
    {
      path: '/ChooseTemplate',
      name: 'ChooseTemplate',
      // component: () => import('./views/ChooseTemplate.vue')
      component: (resolve) => require(['./views/ChooseTemplate.vue'], resolve)
    },
  ]
})
