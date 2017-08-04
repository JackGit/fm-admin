import { getList, statsPV, statsTiming } from '@/api/page-view'
import { YESTERDAY, TODAY, HALF_HOUR } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: HALF_HOUR,
    pageList: [],
    selectedPage: '',
    pvInfo: [],
    timingInfo: []
  },

  mutations: {
    setPageList (state, value) {
      state.pageList = value
    },
    setTimeQuery (state, { timeStart, timeEnd, interval }) {
      state.timeStart = timeStart
      state.timeEnd = timeEnd
      state.interval = interval
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
    async fetchPageData ({ commit, state, rootState }) {
      // get page list
      const list = await getList(rootState.currentProject._id)
      commit('setPageList', list)
      commit('setSelectedPage', list.length > 0 ? list[0].pageUrl : '')

      // get pv stats info
      const pv = await statsPV({
        projectId: rootState.currentProject._id,
        pageUrl: state.selectedPage,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setPVInfo', pv)

      // get timing stats info
      const timing = await statsTiming({
        projectId: rootState.currentProject._id,
        pageUrl: state.selectedPage,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setTimingInfo', timing)
    },
    setTimeQuery ({ commit }, query) {
      commit('setTimeQuery', query)
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
