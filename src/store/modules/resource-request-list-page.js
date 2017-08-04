import { getList } from '@/api/resource-request'

export default {
  namespaced: true,

  state: {
    resourceRequestList: []
  },

  mutations: {
    setResourceRequestList (state, value) {
      state.resourceRequestList = value
    }
  },

  actions: {
    async getList ({ commit, rootState }) {
      const response = await getList(rootState.currentProject._id)
      commit('setResourceRequestList', response)
    }
  }
}
