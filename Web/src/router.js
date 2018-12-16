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
      component: () => import('./views/Home.vue')
    },
    {
      path: '/ChooseTemplate',
      name: 'ChooseTemplate',
      component: () => import('./views/ChooseTemplate.vue')
    },
    {
      path: '/ChooseFormat',
      name: 'ChooseFormat',
      component: () => import('./views/ChooseFormat.vue')
    },
    {
      path: '/EditResume',
      name: 'EditResume',
      component: () => import('./views/EditResume.vue')
    },
  ]
})
