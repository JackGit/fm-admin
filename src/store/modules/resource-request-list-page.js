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
    async getList ({ commit }) {
      const response = await getList()
      commit('setResourceRequestList', response)
    }
  }
}
