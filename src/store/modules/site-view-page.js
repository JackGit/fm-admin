import { statsPV, statsUV, statsOS, statsBrowser, statsNetworkOperator, statsLocation } from '@/api/unique-visitor'
import { YESTERDAY, TODAY } from '@/constants/time'

export default {
  namespaced: true,

  state: {
    timeStart: YESTERDAY,
    timeEnd: TODAY,
    interval: (TODAY - YESTERDAY) / 100,
    pvInfo: [],
    uvInfo: [],
    osInfo: [],
    browserInfo: [],
    locationInfo: [],
    networkOperatorInfo: []
  },

  mutations: {
    setTimeStart (state, value) {
      state.timeStart = value
    },
    setTimeEnd (state, value) {
      state.timeEnd = value
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
    async getPVStatsInfo ({ commit, state }) {
      const response = await statsPV({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setPVInfo', response)
    },
    async getUVStatsInfo ({ commit, state }) {
      const response = await statsUV({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd,
        interval: state.interval
      })
      commit('setUVInfo', response)
    },
    async getOSStatsInfo ({ commit, state }) {
      const response = await statsOS({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setOSInfo', response)
    },
    async getBrowserStatsInfo ({ commit, state }) {
      const response = await statsBrowser({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setBrowserInfo', response)
    },
    async getNetworkOperatorStatsInfo ({ commit, state }) {
      const response = await statsNetworkOperator({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setNetworkOperatorInfo', response)
    },
    async getLocationStatsInfo ({ commit, state }) {
      const response = await statsLocation({
        timeStart: state.timeStart,
        timeEnd: state.timeEnd
      })
      commit('setLocationInfo', response)
    },
    setTimeStart ({ commit }, timeStart) {
      commit('setTimeStart', timeStart)
    },
    setTimeEnd ({ commit }, timeEnd) {
      commit('setTimeEnd', timeEnd)
    },
    clearData ({ commit }) {
      commit('setPVInfo', [])
    }
  }
}
