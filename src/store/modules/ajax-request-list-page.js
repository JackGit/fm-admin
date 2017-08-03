import { YESTERDAY, TODAY } from '@/constants/time'
import { getList } from '@/api/ajax-request'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    filterString: '',
    ajaxRequestList: []
  },

  mutations: {
    setAjaxRequestList (state, value) {
      state.ajaxRequestList = value
    },
    setTimeRange (state, { timeStart, timeEnd }) {
      state.timeStart = timeStart
      state.timeEnd = timeEnd
    },
    setFilterString (state, value) {
      state.filterString = value
    }
  },

  actions: {
    async fetchPageData ({ commit, state }) {
      const list = await getList({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        limit: 200
      })
      commit('setAjaxRequestList', list)
    },
    setTimeRange ({ commit }, range) {
      commit('setTimeRange', range)
    },
    setFilterString ({ commit }, string) {
      commit('setFilterString', string)
    },
    clearData ({ commit }) {
      commit('setAjaxRequestList', [])
    }
  }
}
