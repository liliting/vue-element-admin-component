import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import pRouters from './modules/p_routers'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    pRouters,
    user,
  },
  getters,
})

export default store
