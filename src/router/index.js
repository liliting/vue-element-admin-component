import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/Index'
import Layout from '@/views/layout/Index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    component: Layout
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
    icon: 'user',
    meta: { role: ['admin'] },
    children: [
      // {
      //   path: 'index',
      //   component: login,
      //   name: '会员信息列表',
      // }
    ]
  },
  {
    path: '/integral',
    component: Layout,
    name: '积分规则管理',
    icon: 'fenshu',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: Login,
        name: '积分增长规则',
        meta: { role: ['admin'] }
      },
      {
        path: 'duihuan',
        component: Login,
        name: '积分兑换规则',
        meta: { role: ['admin'] }
      }
    ]
  },
  {
    path: '/integralGift',
    component: Layout,
    name: '积分赠送管理',
    icon: 'fenshu',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: Login,
        name: '积分赠送申请',
        meta: { role: ['admin'] }
      },
      {
        path: 'duihuan',
        component: Login,
        name: '积分赠送审核',
        meta: { role: ['admin'] }
      }
    ]
  }
]
