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
    async fetchPageData ({ commit }, id) {
      const exceptionDetails = await getDetails(id)
      commit('setExceptionDetails', exceptionDetails)

      const response = await Promise.all([
        statsFrequency({
          timeStart: YESTERDAY,
          timeEnd: TODAY,
          interval: HOUR
        }),
        statsFrequency({
          timeStart: new Date(TODAY - 7 * DAY),
          timeEnd: TODAY,
          interval: DAY
        })
      ])
      commit('setLast24HoursFrequencyStatsInfo', response[0])
      commit('setLast7DaysFrequencyStatsInfo', response[1])
    },
    clearData ({ commit }) {
      commit('setExceptionDetails', null)
      ;['setLast7DaysFrequencyStatsInfo', 'setLast24HoursFrequencyStatsInfo'].forEach(action => commit(action, []))
    }
  }
}
