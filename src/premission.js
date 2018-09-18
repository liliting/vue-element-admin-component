import router from './router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  if (store.getters.username) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
