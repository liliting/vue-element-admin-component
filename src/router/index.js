import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Index'
import Layout from '@/views/layout/Index'

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', name: 'login', component: Login, hidden: true},
  {path: '/', name: 'layout', component: Layout, hidden: true, redirect: '/dashboard'},
  {
    path: '/dashboard',
    component: Layout,
    name: '首页',
    hidden: false,
    redirect: '/dashboard/index',
    meta: {
      title: 'Dashboard',
      icon: ['fas', 'home']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/dashboard/Index'),
        name: 'Dashboard',
        meta: {
          title: '首頁',
          role: [ 'admin' ]
        }
      }
    ]
  },
  {
    path: '/info',
    component: Layout,
    name: '信息列表',
    hidden: false,
    redirect: '/info/index',
    meta: {
      title: '信息列表',
      icon: ['fas', 'users-cog']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/example/Example'),
        name: '信息列表',
        meta: {
          title: '信息列表',
          role: [ 'admin' ]
        }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    name: '积分规则管理',
    hidden: false,
    meta: {
      title: 'Table列表',
      icon: 'bullhorn',
      role: ['admin']
    },
    children: [
      {
        path: 'index',
        component: Login,
        name: 'list',
        meta: {
          title: '列表',
          role: ['admin']
        }
      },
      {
        path: 'inlineEdit',
        component: Login,
        name: 'inlineEdit',
        meta: {
          title: '行内编辑表格',
          role: ['admin']
        }
      },
      {
        path: 'filter',
        component: Login,
        name: 'filter',
        meta: {
          title: '筛选表格列',
          role: ['admin']
        }
      }
    ]
  },
  {
    path: '/tree',
    component: Layout,
    name: 'Tree',
    hidden: false,
    meta: {
      title: 'Tree',
      icon: ['fas', 'gift'],
      role: ['admin']
    },
    children: [
      {
        path: 'index',
        component: Login,
        name: 'tree',
        meta: {
          title: '简单的树',
          role: ['admin']
        }
      },
      {
        path: 'edit',
        component: Login,
        name: 'editTree',
        meta: {
          title: '编辑',
          role: ['admin']
        }
      }
    ]
  }
]

export default new Router({
  // mode: 'history'//隱藏#号，后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouter = [
  {
    path: '/member',
    component: Layout,
    name: '会员信息',
    hidden: false,
    meta: {
      title: '会员信息',
      icon: ['fas', 'users-cog']
    },
    redirect: '/member/index',
    children: [
      {
        path: 'index',
        component: Login,
        meta: {
          title: '会员信息列表',
          role: [ 'admin' ]
        }
      }
    ]
  },
  {
    path: '/integral',
    component: Layout,
    name: '积分规则管理',
    // icon: 'bullhorn',
    meta: {
      title: '积分规则管理',
      icon: 'bullhorn',
      role: ['admin']
    },
    children: [
      {
        path: 'index',
        component: Login,
        name: '积分增长规则',
        meta: {
          title: '积分增长规则',
          role: ['admin']
        }
      },
      {
        path: 'exchange',
        component: Login,
        name: '积分兑换规则',
        meta: {
          title: '积分兑换规则',
          role: ['admin']
        }
      }
    ]
  },
  {
    path: '/integralGift',
    component: Layout,
    name: '积分赠送管理',
    // icon: 'gift',
    meta: {
      title: '积分赠送管理',
      icon: ['fas', 'gift'],
      role: ['admin']
    },
    children: [
      {
        path: 'index',
        component: Login,
        name: '积分赠送申请',
        meta: {
          title: '积分赠送申请',
          role: ['admin']
        }
      },
      {
        path: 'auditing',
        component: Login,
        name: '积分赠送审核',
        meta: {
          title: '积分赠送审核',
          role: ['admin']
        }
      }
    ]
  }
]
