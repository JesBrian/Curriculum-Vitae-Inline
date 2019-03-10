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
          component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/CreateResume/CreateResume.vue'], resolve)
        },
        {
          path: '/Home/SelfWeb',
          name: 'SelfWeb',
          component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/SelfWeb/SelfWeb.vue'], resolve)
        },
        {
          path: '/Home/LocalHistory',
          name: 'LocalHistory',
          component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/LocalHistory/LocalHistory.vue'], resolve)
        },
        {
          path: '/Home/CellManagement',
          name: 'CellManagement',
          component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/CellManagement/CellManagement.vue'], resolve)
        },
        // {
        //   path: '/Home/TestFunctions',
        //   name: 'UserSetting',
        //   component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/TestFunctions/TestFunctions.vue'], resolve)
        // },
        {
          path: '/Home/SettingConfig',
          name: 'SettingConfig',
          component: resolve => require(/* webpackChunkName: "home-sub" */ ['../views/Home/SubPages/SettingConfig/SettingConfig.vue'], resolve)
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
    {
      path: '/EditComponent',
      name: 'EditResume',
      component: resolve => require(['../views/EditComponent/EditComponent.vue'], resolve)
    },
  ]
})