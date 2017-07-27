import Vue from 'vue'
import Vuex from 'vuex'
import asyncRequestListPage from './modules/async-request-list-page'
import asyncRequestDetailsPage from './modules/async-request-details-page'
import exceptionDetailsPage from './modules/exception-details-page'
import exceptionListPage from './modules/exception-list-page'
import pageViewPage from './modules/page-view-page'

Vue.use(Vuex)

export default window.store = new Vuex.Store({
  modules: {
    asyncRequestListPage,
    asyncRequestDetailsPage,
    exceptionDetailsPage,
    exceptionListPage,
    pageViewPage
  }
})
