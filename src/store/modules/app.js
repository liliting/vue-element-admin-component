import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarState')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarState', 1)
      } else {
        Cookies.set('sidebarState', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
  actions: {
    toggleSidebar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
export default app
