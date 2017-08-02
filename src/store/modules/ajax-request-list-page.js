import { YESTERDAY, TODAY } from '@/constants/time'
import { getList } from '@/api/ajax-request'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    asyncRequestList: []
  },

  mutations: {
    setAsyncRequestList (state, value) {
      state.asyncRequestList = value
    },
    setTimeStart (state, value) {
      state.timeStart = value
    },
    setTimeEnd (state, value) {
      state.timeEnd = value
    }
  },

  actions: {
    async getList ({ commit }, { timeStart, timeEnd, limit }) {
      const list = await getList({
        timeStart,
        timeEnd,
        limit
      })
      commit('setAsyncRequestList', list)
    },
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    }
  }
}
