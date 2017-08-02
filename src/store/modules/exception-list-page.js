import { getList, statsTypes, statsFrequency } from '@/api/exception'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: (TODAY - YESTERDAY) / 100,
    exceptionList: [],
    typesStatsInfo: [],
    frequencyStatsInfo: []
  },

  mutations: {
    setExceptionList (state, value) {
      state.exceptionList = value
    },
    setTimeStart (state, value) {
      state.timeStart = value
    },
    setTimeEnd (state, value) {
      state.timeEnd = value
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
    async getList ({ commit }, { timeStart, timeEnd }) {
      const response = await getList({
        timeStart,
        timeEnd
      })
      commit('setExceptionList', response)
    },
    async getTypesStatsInfo ({ commit }, { timeStart, timeEnd }) {
      const response = await statsTypes({
        timeStart,
        timeEnd
      })
      commit('setTypesStatsInfo', response)
    },
    async getFrequencyStatsInfo ({ commit }, { timeStart, timeEnd, interval }) {
      const response = await statsFrequency({
        timeStart,
        timeEnd,
        interval
      })
      commit('setFrequencyStatsInfo', response)
    },
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    },
    setInterval ({ commit }, interval) {
      commit('setInterval', interval)
    },
    clearData ({ commit }) {
      commit('setExceptionList', [])
    }
  }
}
