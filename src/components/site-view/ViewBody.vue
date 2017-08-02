<template>
  <div class="c-visit">
    <line-chart title="UV" :series-data="uvLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
    <line-chart title="PV" :series-data="pvLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
    <pie-chart title="OS" :chart-data="osPieChartData"></pie-chart>
    <pie-chart title="Browser" :chart-data="browserPieChartData"></pie-chart>
    <pie-chart title="Network Operator" :chart-data="networkOperatorPieChartData"></pie-chart>
    <geo-map-chart title="Area" :map-data="locationMapData"></geo-map-chart>
  </div>
</template>

<script>
import '@/assets/css/visit.css'
import GeoMapChart from '@/components/common/view/GeoMapChart'
import LineChart from '@/components/common/view/LineChart'
import PieChart from '@/components/common/view/PieChart'
import { mapState } from 'vuex'

export default {
  components: {
    LineChart,
    PieChart,
    GeoMapChart
  },

  computed: {
    ...mapState('siteViewPage', {
      uvInfo: state => state.uvInfo,
      pvInfo: state => state.pvInfo,
      osInfo: state => state.osInfo,
      browserInfo: state => state.browserInfo,
      networkOperatorInfo: state => state.networkOperatorInfo,
      locationInfo: state => state.locationInfo,
      timeStart: state => state.timeStart,
      interval: state => state.interval
    }),
    uvLineChartData () {
      return [{
        name: 'UV',
        data: this.uvInfo.map(item => item.count)
      }]
    },
    pvLineChartData () {
      return [{
        name: 'PV',
        data: this.pvInfo.map(item => item.count)
      }]
    },
    osPieChartData () {
      return this.osInfo.map(item => ({
        name: item.os,
        value: item.count
      }))
    },
    browserPieChartData () {
      return this.browserInfo.map(item => ({
        name: item.browser,
        value: item.count
      }))
    },
    networkOperatorPieChartData () {
      return this.networkOperatorInfo.map(item => ({
        name: item.networkOperator,
        value: item.count
      }))
    },
    locationMapData () {
      return this.locationInfo.map(item => ({
        name: item.province,
        value: item.count
      }))
    }
  }
}
</script>
