import { statsPV, statsUV, statsOS, statsBrowser, statsNetworkOperator, statsLocation } from '@/api/unique-visitor'
import { YESTERDAY, TODAY, HALF_HOUR } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: HALF_HOUR,
    pvInfo: [],
    uvInfo: [],
    osInfo: [],
    browserInfo: [],
    locationInfo: [],
    networkOperatorInfo: []
  },

  mutations: {
    setTimeQuery (state, { timeStart, timeEnd, interval }) {
      state.timeStart = timeStart
      state.timeEnd = timeEnd
      state.interval = interval
    },
    setPVInfo (state, value) {
      state.pvInfo = value
    },
    setUVInfo (state, value) {
      state.uvInfo = value
    },
    setOSInfo (state, value) {
      state.osInfo = value
    },
    setBrowserInfo (state, value) {
      state.browserInfo = value
    },
    setLocationInfo (state, value) {
      state.locationInfo = value
    },
    setNetworkOperatorInfo (state, value) {
      state.networkOperatorInfo = value
    }
  },

  actions: {
    async fetchPageData ({ commit, state, rootState }) {
      const request = {
        projectId: rootState.currentProject._id,
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      }
      const response = await Promise.all([
        statsPV(request),
        statsUV(request),
        statsOS(request),
        statsBrowser(request),
        statsNetworkOperator(request),
        statsLocation(request)
      ])

      commit('setPVInfo', response[0])
      commit('setUVInfo', response[1])
      commit('setOSInfo', response[2])
      commit('setBrowserInfo', response[3])
      commit('setNetworkOperatorInfo', response[4])
      commit('setLocationInfo', response[5])
    },
    setTimeQuery ({ commit }, query) {
      commit('setTimeQuery', query)
    },
    clearData ({ commit }) {
      ['setLocationInfo', 'setNetworkOperatorInfo', 'setBrowserInfo', 'setOSInfo', 'setUVInfo', 'setPVInfo'].forEach(item => commit(item, []))
    }
  }
}
