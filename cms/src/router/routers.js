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
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      href: 'https://lison16.github.io/iview-admin-doc/#/',
      icon: 'ios-book'
    }
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'ios-book',
      title: '用户模块'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: resolve => require(['@/view/multilevel/level-1.vue'], resolve)
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      icon: 'ios-book',
      title: '管理员模块'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: resolve => require(['@/view/multilevel/level-1.vue'], resolve)
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      icon: 'ios-book',
      title: '权限模块'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: resolve => require(['@/view/multilevel/level-1.vue'], resolve)
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
      }
    ]
  },
  {
    path: '/format',
    name: 'format',
    meta: {
      icon: 'ios-book',
      title: '格式模块'
    },
    component: Main,
    children: [
      {
        path: 'formatList',
        name: 'formatList',
        meta: {
          icon: 'md-funnel',
          title: '格式列表'
        },
        component: resolve => require(['@/view/format/FormatList.vue'], resolve)
      },
      {
        path: 'addFormat',
        name: 'addFormat',
        meta: {
          icon: 'md-funnel',
          title: '添加格式'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
      }
    ]
  },
  {
    path: '/template',
    name: 'template',
    meta: {
      icon: 'ios-book',
      title: '模板模块'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: resolve => require(['@/view/multilevel/level-1.vue'], resolve)
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    meta: {
      icon: 'ios-book',
      title: '组件模块'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'md-funnel',
          title: '二级-1'
        },
        component: resolve => require(['@/view/multilevel/level-1.vue'], resolve)
      },
      {
        path: 'level_2_2',
        name: 'level_2_2',
        meta: {
          icon: 'md-funnel',
          title: '二级-2'
        },
        component: resolve => require(['@/view/multilevel/level-2-1.vue'], resolve)
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
