<template>
  <div class="c-page">
    <el-row>
      <view-form :form-data="formData"></view-form>
      <line-chart title="PV" :series-data="pvLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="DNS" :series-data="dnsLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="TCP" :series-data="tcpLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="Total Load Time" :series-data="totalLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="White Screen" :series-data="whiteScreenLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="First Screen" :series-data="firstScreenLineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/page.css'
import ViewForm from '@/components/common/view/Form'
import LineChart from '@/components/common/view/LineChart'
import { mapState } from 'vuex'

export default {
  components: {
    ViewForm,
    LineChart
  },

  computed: {
    ...mapState('pageViewPage', {
      selectedPage: state => state.selectedPage,
      timeStart: state => state.timeStart,
      interval: state => state.interval,
      pvInfo: state => state.pvInfo,
      timingInfo: state => state.timingInfo
    }),
    formData () {
      return [{
        label: 'Page',
        type: 'URL',
        value: this.selectedPage
      }]
    },
    pvLineChartData () {
      return [{
        name: 'PV',
        data: this.pvInfo.map(item => item.count)
      }]
    },
    dnsLineChartData () {
      return [{
        name: 'DNS (ms)',
        data: this.timingInfo.map(timing => timing.dns)
      }]
    },
    tcpLineChartData () {
      return [{
        name: 'TCP (ms)',
        data: this.timingInfo.map(timing => timing.tcp)
      }]
    },
    totalLineChartData () {
      return [{
        name: 'Total (ms)',
        data: this.timingInfo.map(timing => timing.total)
      }]
    },
    whiteScreenLineChartData () {
      return [{
        name: 'White Screen (ms)',
        data: this.timingInfo.map(timing => timing.whiteScreen)
      }]
    },
    firstScreenLineChartData () {
      return [{
        name: 'First Screen (ms)',
        data: this.timingInfo.map(timing => timing.firstScreen)
      }]
    }
  }
}
</script>
