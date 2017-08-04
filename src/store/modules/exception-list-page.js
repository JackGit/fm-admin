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
    async fetchPageData ({ dispatch }) {
      dispatch('getList')
      dispatch('getTypeStatsInfo')
      dispatch('getFrequencyStatsInfo')
    },
    async getList ({ commit, state, rootState }) {
      const response = await getList({
        projectId: rootState.currentProject._id,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setExceptionList', response)
    },
    async getTypeStatsInfo ({ commit, state, rootState }) {
      const response = await statsTypes({
        projectId: rootState.currentProject._id,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setTypesStatsInfo', response)
    },
    async getFrequencyStatsInfo ({ commit, state, rootState }) {
      const response = await statsFrequency({
        projectId: rootState.currentProject._id,
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
