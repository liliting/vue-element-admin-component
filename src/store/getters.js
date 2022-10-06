const getters = {
  sidebar: (state) => state.app.sidebar,
  routers: (state) => state.pRouters.routers,
  asyncRouter: (state) => state.pRouters.asyncRouter,
  username: (state) => state.user.username,
}

export default getters
