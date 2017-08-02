import { getList, statsTypes, statsFrequency } from '@/api/exception'
import { YESTERDAY, TODAY, HALF_HOUR } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: HALF_HOUR,
    exceptionList: [],
    typesStatsInfo: [],
    frequencyStatsInfo: []
  },

  mutations: {
    setExceptionList (state, value) {
      state.exceptionList = value
    },
    setTimeRange (state, { timeStart, timeEnd }) {
      state.timeStart = timeStart
      state.timeEnd = timeEnd
    },
    setInterval (state, value) {
      state.interval = value
    },
    setTypesStatsInfo (state, value) {
      state.typesStatsInfo = value
    },
    setFrequencyStatsInfo (state, value) {
      state.frequencyStatsInfo = value
    }
  },

  actions: {
    async fetchPageData ({ commit, state, dispatch }) {
      const request = {
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      }
      const response = await Promise.all([
        getList(request),
        statsTypes(request),
        dispatch('getFrequencyStatsInfo')
      ])

      commit('setExceptionList', response[0])
      commit('setTypesStatsInfo', response[1])
    },
    async getFrequencyStatsInfo ({ commit, state }) {
      const response = await statsFrequency({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setFrequencyStatsInfo', response)
    },
    setTimeRange ({ commit }, range) {
      commit('setTimeRange', range)
    },
    setInterval ({ commit }, interval) {
      commit('setInterval', interval)
    },
    clearData ({ commit }) {
      ['setExceptionList', 'setTypesStatsInfo', 'setFrequencyStatsInfo'].forEach(action => commit(action, []))
    }
  }
}
