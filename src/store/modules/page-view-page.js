import { getList } from '@/api/page-view'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    pageViewList: []
  },

  mutations: {
    setPageViewList (state, value) {
      state.pageViewList = value
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
      const response = await getList({ timeStart, timeEnd })
      commit('setPageViewList', response)
    },
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    },
    clearData ({ commit }) {
      commit('setPageViewList', [])
    }
  }
}
