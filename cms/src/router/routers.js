import Main from '@/components/main'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: resolve => require(['@/view/login/login.vue'], resolve)
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: resolve => require(['@/view/single-page/home'], resolve)
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'md-contacts',
      title: '用户模块'
    },
    component: Main,
    children: [
      {
        path: 'userList',
        name: 'userList',
        meta: {
          // access: ['5c60106b856f42020c9373df', ],
          icon: 'md-contact',
          title: '用户列表'
        },
        component: resolve => require(['@/view/user/UserList.vue'], resolve)
      },
      {
        path: 'editUser',
        name: 'editUser',
        meta: {
          access: ['super_admin'],
          title: '用户管理',
          icon: 'md-construct',
        },
        component: resolve => require(['@/view/user/EditUser.vue'], resolve)
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      icon: 'ios-people',
      title: '管理员模块'
    },
    component: Main,
    children: [
      {
        path: 'adminList',
        name: 'adminList',
        meta: {
          icon: 'md-person',
          title: '管理员列表'
        },
        component: resolve => require(['@/view/admin/AdminList.vue'], resolve)
      },
      {
        path: 'editAdmin',
        name: 'editAdmin',
        meta: {
          access: ['super_admin'],
          icon: 'md-construct',
          title: '管理员管理'
        },
        component: resolve => require(['@/view/admin/EditAdmin.vue'], resolve)
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      access: ['super_admin'],
      icon: 'ios-ribbon',
      title: '权限模块'
    },
    component: Main,
    children: [
      {
        path: 'roleList',
        name: 'roleList',
        meta: {
          icon: 'md-school',
          title: '角色列表'
        },
        component: resolve => require(['@/view/auth/RoleList.vue'], resolve)
      },
      {
        path: 'editRole',
        name: 'editRole',
        meta: {
          icon: 'md-construct',
          title: '角色管理'
        },
        component: resolve => require(['@/view/auth/EditRole.vue'], resolve)
      }
    ]
  },
  {
    path: '/format',
    name: 'format',
    meta: {
      icon: 'ios-apps',
      title: '格式模块'
    },
    component: Main,
    children: [
      {
        path: 'formatList',
        name: 'formatList',
        meta: {
          icon: 'ios-browsers',
          title: '格式列表'
        },
        component: resolve => require(['@/view/format/FormatList.vue'], resolve)
      },
      {
        path: 'editFormat',
        name: 'editFormat',
        meta: {
          icon: 'md-construct',
          title: '格式管理'
        },
        component: resolve => require(['@/view/format/EditFormat.vue'], resolve)
      }
    ]
  },
  {
    path: '/template',
    name: 'template',
    meta: {
      icon: 'ios-clipboard',
      title: '模板模块'
    },
    component: Main,
    children: [
      {
        path: 'templateList',
        name: 'templateList',
        meta: {
          icon: 'md-code-working',
          title: '模板列表'
        },
        component: resolve => require(['@/view/template/TemplateList.vue'], resolve)
      },
      {
        path: 'editTemplate',
        name: 'editTemplate',
        meta: {
          icon: 'md-construct',
          title: '模板管理'
        },
        component: resolve => require(['@/view/template/EditTemplate.vue'], resolve)
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    meta: {
      icon: 'md-calendar',
      title: '组件模块'
    },
    component: Main,
    children: [
      {
        path: 'componentList',
        name: 'componentList',
        meta: {
          icon: 'logo-buffer',
          title: '组件列表'
        },
        component: resolve => require(['@/view/component/ComponentList.vue'], resolve)
      },
      {
        path: 'editComponent',
        name: 'editComponent',
        meta: {
          icon: 'md-construct',
          title: '组件管理'
        },
        component: resolve => require(['@/view/component/EditComponent.vue'], resolve)
      }
    ]
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      icon: 'md-calendar',
      title: '报表模块'
    },
    component: Main,
    children: [
      {
        path: 'formatReport',
        name: 'formatReport',
        meta: {
          icon: 'logo-buffer',
          title: '格式统计'
        },
        component: resolve => require(['@/view/report/formatReport.vue'], resolve)
      },
      {
        path: 'templateReport',
        name: 'templateReport',
        meta: {
          icon: 'logo-buffer',
          title: '模板统计'
        },
        component: resolve => require(['@/view/report/templateReport.vue'], resolve)
      },
      {
        path: 'componentReport',
        name: 'componentReport',
        meta: {
          icon: 'logo-buffer',
          title: '组件统计'
        },
        component: resolve => require(['@/view/report/componentReport.vue'], resolve)
      }
    ]
  },
  // {
  //   path: '/log',
  //   name: 'log',
  //   component: Main,
  //   children: [
  //     {
  //       path: 'operationLog',
  //       name: 'operationLog',
  //       meta: {
  //         icon: 'md-speedometer',
  //         title: '操作日志'
  //       },
  //       component: resolve => require(['@/view/log/OperationLog.vue'], resolve)
  //     }
  //   ]
  // },
  {
    path: '/componentConf',
    name: 'componentConf',
    meta: {
      icon: 'ios-cog-outline',
      title: '组件配置模块'
    },
    component: Main,
    children: [
      {
        path: 'componentConfView',
        name: 'componentConfView',
        meta: {
          icon: 'ios-cog-outline',
          title: '组件配置浏览'
        },
        component: resolve => require(['@/view/componentConf/ComponentConf.vue'], resolve)
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: resolve => require(['@/view/error-page/401.vue'], resolve)
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: resolve => require(['@/view/error-page/500.vue'], resolve)
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: resolve => require(['@/view/error-page/404.vue'], resolve)
  }
]
