import Vue from 'vue'
import Vuex from 'vuex'
import ajaxRequestListPage from './modules/ajax-request-list-page'
import ajaxRequestDetailsPage from './modules/ajax-request-details-page'
import resourceRequestListPage from './modules/resource-request-list-page'
import resourceRequestDetailsPage from './modules/resource-request-details-page'
import exceptionDetailsPage from './modules/exception-details-page'
import exceptionListPage from './modules/exception-list-page'
import pageViewPage from './modules/page-view-page'
import siteViewPage from './modules/site-view-page'

Vue.use(Vuex)

export default window.store = new Vuex.Store({
  modules: {
    ajaxRequestListPage,
    ajaxRequestDetailsPage,
    resourceRequestListPage,
    resourceRequestDetailsPage,
    exceptionDetailsPage,
    exceptionListPage,
    pageViewPage,
    siteViewPage
  }
})
