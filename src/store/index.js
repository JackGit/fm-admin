import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default window.store = new Vuex.Store({
  state: {
    login: {
    },
    dashboard: {
      toolbar: {
        timeStart: null,
        timeEnd: null
      },
      asynRequest: {},
      exception: {},
      page: {},
      visit: {}
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
