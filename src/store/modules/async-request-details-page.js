import { getDetails, getList } from '@/api/async-request'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    asyncRequestDetails: null,
    last24HoursAsyncRequestList: []
  },

  mutations: {
    setAsyncRequestDetails (state, value) {
      state.asyncRequestDetails = value
    },
    setLast24HoursAsyncRequestList (state, value) {
      state.last24HoursAsyncRequestList = value
    }
  },

  actions: {
    async getPageData ({ dispatch, state }, objectId) {
      await dispatch('getDetails', objectId)
      dispatch('getLast24HoursList', {
        url: state.asyncRequestDetails.url,
        method: state.asyncRequestDetails.method
      })
    },
    async getDetails ({ commit }, objectId) {
      const response = await getDetails(objectId)
      commit('setAsyncRequestDetails', response)
    },
    async getLast24HoursList ({ commit, state }, { url, method }) {
      const response = await getList({
        timeStart: YESTERDAY,
        timeEnd: TODAY,
        url,
        method
      })
      commit('setLast24HoursAsyncRequestList', response)
    },
    clearData ({ commit }) {
      commit('setAsyncRequestDetails', null)
      commit('setLast24HoursAsyncRequestList', [])
    }
  }
}
