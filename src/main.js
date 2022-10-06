import * as Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './icon'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import './premission'

window.$vueApp.use(ElementUI)

/* eslint-disable no-new */
window.$vueApp = Vue.createApp(App)
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(store)
window.$vueApp.use(router)
window.$vueApp.mount('#app')
