import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Index'
import Layout from '@/views/layout/Index'

Vue.use(Router)

export const constantRouterMap = [
  {path: '/login', name: 'login', component: Login, hidden: true},
  {path: '/', name: 'layout', component: Layout, hidden: true, redirect: '/member'},
  {
    path: '/member',
    component: Layout,
    name: '会员信息',
    hidden: false,
    redirect: '/member/index',
    meta: {
      title: '会员信息',
      icon: ['fas', 'users-cog']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/example/Example'),
        name: '会员信息列表',
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
    hidden: false,
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
    hidden: false,
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
