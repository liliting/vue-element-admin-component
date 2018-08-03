const getters = {
  sidebar: state => state.app.sidebar,
  routers: state => state.pRouters.routers,
  asyncRouter: state => state.pRouters.asyncRouter
}

export default getters
