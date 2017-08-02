import { getDetails, statsFrequency } from '@/api/exception'
import { YESTERDAY, TODAY, HOUR, DAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    exceptionDetails: null,
    last24HoursFrequencyStatsInfo: [],
    last7DaysFrequencyStatsInfo: []
  },

  mutations: {
    setExceptionDetails (state, value) {
      state.exceptionDetails = value
    },
    setLast24HoursFrequencyStatsInfo (state, value) {
      state.last24HoursFrequencyStatsInfo = value
    },
    setLast7DaysFrequencyStatsInfo (state, value) {
      state.last7DaysFrequencyStatsInfo = value
    }
  },

  actions: {
    async getDetails ({ commit }, objectId) {
      const response = await getDetails(objectId)
      commit('setExceptionDetails', response)
    },
    async getLast24HoursFrequencyStatsInfo ({ commit }, type) {
      const response = await statsFrequency({
        timeStart: YESTERDAY,
        timeEnd: TODAY,
        interval: HOUR
      })
      commit('setLast24HoursFrequencyStatsInfo', response)
    },
    async getLast7DaysFrequencyStatsInfo ({ commit }, type) {
      const response = await statsFrequency({
        timeStart: new Date(TODAY - 7 * DAY),
        timeEnd: TODAY,
        interval: DAY
      })
      commit('setLast7DaysFrequencyStatsInfo', response)
    },
    clearData ({ commit }) {
      commit('setExceptionDetails', null)
    }
  }
}
