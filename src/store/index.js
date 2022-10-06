import * as Vue from 'vue'
import * as Vuex from 'vuex'
import app from './modules/app'
import pRouters from './modules/p_routers'
import user from './modules/user'
import getters from './getters'

const store = Vuex.createStore({
  modules: {
    app,
    pRouters,
    user,
  },
  getters,
})

export default store
