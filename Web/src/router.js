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
      component: () => import('./views/Home/Home.vue'),
      children: [
        {
          path: '/Home/CreateResume',
          name: 'CreateResume',
          component: () => import('./views/Home/SubPages/CreateResume.vue')
        },
        {
          path: '/Home/SelfWeb',
          name: 'SelfWeb',
          component: () => import('./views/Home/SubPages/SelfWeb.vue')
        },
        {
          path: '/Home/UploadLocal',
          name: 'UploadLocal',
          component: () => import('./views/Home/SubPages/UploadLocal.vue')
        },
      ]
    },
    {
      path: '/Home',
      redirect: '/'
    },
    {
      path: '/EditResume',
      name: 'EditResume',
      component: () => import('./views/EditResume/EditResume.vue')
    },
  ]
})
