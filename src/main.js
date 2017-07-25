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
    const axiosInstance = axios.create({
      baseURL: 'http://yotta-tech.cn:4141',
      // baseURL: 'http://localhost:4141',
      timeout: 2000
    })
    Vue.prototype.$http = {
      get () {
        const { Loading, Message } = ElementUI
        const loading = Loading.service({ fullscreen: true })

        return axiosInstance.get.apply(axiosInstance, arguments)
          .then(response => {
            loading.close()
            return response
          })
          .catch(error => {
            Message.error(error.message)
            loading.close()
            throw error
          })
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
