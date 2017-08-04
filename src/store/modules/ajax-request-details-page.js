import { stats } from '@/api/ajax-request'
import { YESTERDAY, TODAY, HALF_HOUR } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: HALF_HOUR,
    statusStatsInfo: [],
    frequencyStatsInfo: [],
    durationStatsInfo: []
  },

  mutations: {
    setStatusStatsInfo (state, value) {
      state.statusStatsInfo = value
    },
    setFrequencyStatsInfo (state, value) {
      state.frequencyStatsInfo = value
    },
    setDurationStatsInfo (state, value) {
      state.durationStatsInfo = value
    },
    setTimeQuery (state, { timeStart, timeEnd, interval }) {
      state.timeStart = timeStart
      state.timeEnd = timeEnd
      state.interval = interval
    }
  },

  actions: {
    async fetchPageData ({ commit, state, rootState }, { url, method }) {
      const response = await stats({
        projectId: rootState.currentProject._id,
        url,
        method,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setStatusStatsInfo', response.statusInfo)
      commit('setFrequencyStatsInfo', response.frequencyInfo.map(({ startTime, count }) => ({ startTime, count })))
      commit('setDurationStatsInfo', response.frequencyInfo.map(({ startTime, avgDuration }) => ({ startTime, avgDuration })))
    },
    setTimeQuery ({ commit }, query) {
      commit('setTimeQuery', query)
    },
    clearData ({ commit }) {
      ['setStatusStatsInfo', 'setFrequencyStatsInfo', 'setDurationStatsInfo'].forEach(action => commit(action, []))
    }
  }
}
