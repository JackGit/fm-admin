import { create, remove } from '@/api/project'

export default {
  namespaced: true,

  state: {
    selectedProjectId: '',
    displayNewProjectDialog: false
  },

  mutations: {
    setDisplayNewProjectDialog (state, value) {
      state.displayNewProjectDialog = value
    },
    setSelectedProjectId (state, value) {
      state.selectedProjectId = value
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
      dispatch('selectProject', response._id)
      dispatch('closeNewProjectDialog')
    },
    async deleteProject ({ commit, state }) {
      await remove(state.selectedProjectId)
      commit('deleteProject', state.selectedProjectId, { root: true })
      commit('setSelectedProjectId', '')
    },
    selectProject ({ commit }, id) {
      commit('setSelectedProjectId', id)
    },
    clearData ({ commit }) {
      commit('setDisplayNewProjectDialog', false)
    }
  }
}
