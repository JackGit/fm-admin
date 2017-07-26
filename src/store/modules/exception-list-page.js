import { getList } from '@/api/exception'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    exceptionList: []
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
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    },
    clearData ({ commit }) {
      commit('setExceptionList', [])
    }
  }
}
