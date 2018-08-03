import { constantRouterMap, asyncRouter } from '@/router'

const pRouters = {
  state: {
    routers: constantRouterMap,
    asyncRouter: asyncRouter
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      console.log(state)
      console.log(routers)
    }
  }
}

export default pRouters
