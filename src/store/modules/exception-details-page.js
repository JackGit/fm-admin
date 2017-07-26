import { getDetails } from '@/api/exception'

export default {
  namespaced: true,

  state: {
    exceptionDetails: null
  },

  mutations: {
    setExceptionDetails (state, value) {
      state.exceptionDetails = value
    }
  },

  actions: {
    async getDetails ({ commit }, objectId) {
      const response = await getDetails(objectId)
      commit('setExceptionDetails', response)
    },
    clearData ({ commit }) {
      commit('setExceptionDetails', null)
    }
  }
}
