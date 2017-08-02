<template>
  <div class="c-execptionOverall">
    <pie-chart title="Type" :chart-data="typePieChartData"></pie-chart>
    <line-chart title="Frequency"
      @intervalchange="handleIntervalChange"
      :interval-selector="true"
      :series-data="lineChartData"
      :time-start="timeStart"
      :interval="interval"
      tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
    <exception-list :exceptions="exceptionList"></exception-list>
  </div>
</template>

<script>
import '@/assets/css/exception-list.css'
import LineChart from '@/components/common/view/LineChart'
import PieChart from '@/components/common/view/PieChart'
import ExceptionList from './List'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ExceptionList,
    LineChart,
    PieChart
  },

  computed: {
    ...mapState('exceptionListPage', {
      exceptionList: state => state.exceptionList,
      typesStatsInfo: state => state.typesStatsInfo,
      frequencyStatsInfo: state => state.frequencyStatsInfo,
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd,
      interval: state => state.interval
    }),
    typePieChartData () {
      return this.typesStatsInfo.map(item => ({
        name: item.type,
        value: item.count
      }))
    },
    lineChartData () {
      return [{
        name: 'Frequency',
        data: this.frequencyStatsInfo.map(item => item.count)
      }]
    }
  },

  methods: {
    ...mapActions('exceptionListPage', [
      'setInterval',
      'getFrequencyStatsInfo'
    ]),
    handleIntervalChange (interval) {
      this.setInterval(interval)
      this.getFrequencyStatsInfo()
    }
  }
}
</script>
