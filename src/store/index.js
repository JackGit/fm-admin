import Vue from 'vue'
import Vuex from 'vuex'
import projectPage from './modules/project-page'
import ajaxRequestListPage from './modules/ajax-request-list-page'
import ajaxRequestDetailsPage from './modules/ajax-request-details-page'
import resourceRequestListPage from './modules/resource-request-list-page'
import resourceRequestDetailsPage from './modules/resource-request-details-page'
import exceptionDetailsPage from './modules/exception-details-page'
import exceptionListPage from './modules/exception-list-page'
import pageViewPage from './modules/page-view-page'
import siteViewPage from './modules/site-view-page'

import { getList as getProjectList } from '@/api/project'

Vue.use(Vuex)

export default window.store = new Vuex.Store({

  state: {
    user: null,
    projectList: [],
    currentProject: null
  },

  mutations: {
    setProjectList (state, value) {
      state.projectList = value
    },
    setCurrentProject (state, value) {
      state.currentProject = value
    },
    addProject (state, value) {
      state.projectList.push(value)
    },
    deleteProject (state, value) {
      state.projectList = state.projectList.filter(project => project._id !== value)
    }
  },

  actions: {
    async getProjectList ({ commit, dispatch }) {
      const response = await getProjectList()
      commit('setProjectList', response)

      if (response.length > 0) {
        dispatch('selectProject', response[0]._id)
      }
    },
    selectProject ({ commit, state }, id) {
      commit('setCurrentProject', state.projectList.filter(project => project._id === id)[0])
    },
    deleteProject ({ commit }, id) {
      commit('deleteProject', id)
    }
  },

  modules: {
    projectPage,
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
