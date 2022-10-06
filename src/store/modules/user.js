import Cookies from 'js-cookie'

const userKey = 'username'
const user = {
  state: {
    username: Cookies.get(userKey),
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username
    },
    REMOVE_USERNAME(state) {
      state.username = undefined
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        commit('SET_USERNAME', userInfo.user)
        Cookies.set(userKey, userInfo.user)
        resolve()
      })
    },
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('REMOVE_USERNAME')
        Cookies.remove(userKey)
        resolve()
      })
    },
  },
}
export default user
