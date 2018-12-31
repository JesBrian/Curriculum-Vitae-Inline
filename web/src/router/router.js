import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'hash', // history

  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../views/Home/Home.vue'], resolve),
      children: [
        {
          path: '/Home/CreateResume',
          name: 'CreateResume',
          component: resolve => require(['../views/Home/SubPages/CreateResume/CreateResume.vue'], resolve)
        },
        {
          path: '/Home/SelfWeb',
          name: 'SelfWeb',
          component: resolve => require(['../views/Home/SubPages/SelfWeb/SelfWeb.vue'], resolve)
        },
        {
          path: '/Home/UploadLocal',
          name: 'UploadLocal',
          component: resolve => require(['../views/Home/SubPages/UploadLocal/UploadLocal.vue'], resolve)
        },
        {
          path: '/Home/CellManagement',
          name: 'UploadLocal',
          component: resolve => require(['../views/Home/SubPages/CellManagement/CellManagement.vue'], resolve)
        },
        {
          path: '/Home/UserSetting',
          name: 'UserSetting',
          component: resolve => require(['../views/Home/SubPages/UserSetting/UserSetting.vue'], resolve)
        },
        {
          path: '/Home/SystemConfig',
          name: 'SystemConfig',
          component: resolve => require(['../views/Home/SubPages/SystemConfig/SystemConfig.vue'], resolve)
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
      component: resolve => require(['../views/EditResume/EditResume.vue'], resolve)
    },
  ]
})