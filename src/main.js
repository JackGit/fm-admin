import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

// axios config
Vue.use({
  install (Vue) {
    Vue.prototype.$http = axios.create({
      // baseURL: 'http://yotta-tech.cn:4141',
      baseURL: 'http://localhost:4141',
      timeout: 2000
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
