import { stats } from '@/api/ajax-request'
import { YESTERDAY, TODAY, HOUR } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: HOUR,
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
    }
  },

  actions: {
    async getStatsInfo ({ commit, state }, { url, method }) {
      const response = await stats({
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
    clearData ({ commit }) {
      commit('setStatusStatsInfo', [])
      commit('setFrequencyStatsInfo', [])
      commit('setDurationStatsInfo', [])
    }
  }
}
