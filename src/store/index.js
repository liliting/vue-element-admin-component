import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  module: {
    app
  },
  getters
})
export default store
