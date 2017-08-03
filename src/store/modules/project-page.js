import { create } from '@/api/project'

export default {
  namespaced: true,

  state: {
    displayNewProjectDialog: false
  },

  mutations: {
    setDisplayNewProjectDialog (state, value) {
      state.displayNewProjectDialog = value
    }
  },

  actions: {
    openNewProjectDialog ({ commit }) {
      commit('setDisplayNewProjectDialog', true)
    },
    closeNewProjectDialog ({ commit }) {
      commit('setDisplayNewProjectDialog', false)
    },
    async createProject ({ commit, dispatch }, project) {
      const response = await create(project)
      commit('addProject', response, { root: true })
      dispatch('closeNewProjectDialog')
    },
    clearData ({ commit }) {
      commit('setDisplayNewProjectDialog', false)
    }
  }
}
