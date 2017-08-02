import { getList, statsPV, statsTiming } from '@/api/page-view'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: (TODAY - YESTERDAY) / 100,
    pageList: [],
    selectedPage: '',
    pvInfo: [],
    timingInfo: []
  },

  mutations: {
    setPageList (state, value) {
      state.pageList = value
    },
    setTimeStart (state, value) {
      state.timeStart = value
    },
    setTimeEnd (state, value) {
      state.timeEnd = value
    },
    setSelectedPage (state, value) {
      state.selectedPage = value
    },
    setPVInfo (state, value) {
      state.pvInfo = value
    },
    setTimingInfo (state, value) {
      state.timingInfo = value
    }
  },

  actions: {
    async getList ({ commit }) {
      const response = await getList()
      commit('setPageList', response)
      commit('setSelectedPage', response[0].pageUrl)
    },
    async getPVStatsInfo ({ commit, state }) {
      const response = await statsPV({
        pageUrl: state.selectedPage,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setPVInfo', response)
    },
    async getTimingStatsInfo ({ commit, state }) {
      const response = await statsTiming({
        pageUrl: state.selectedPage,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setTimingInfo', response)
    },
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    },
    setSelectedPage ({ commit }, page) {
      commit('setSelectedPage', page)
    },
    clearData ({ commit }) {
      commit('setPageList', [])
      commit('setPVInfo', [])
      commit('setTimingInfo', [])
      commit('setSelectedPage', '')
    }
  }
}
