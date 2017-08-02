<template>
  <div class="c-execptionOverall">
    <template v-if="exceptionList.length > 0">
      <pie-chart title="Type" :chart-data="typePieChartData"></pie-chart>
      <line-chart title="Frequency" :series-data="lineChartData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <exception-list :exceptions="exceptionList"></exception-list>
    </template>
    <p v-else>No exceptions, great job!</p>
  </div>
</template>

<script>
import '@/assets/css/exception-overall.css'
import LineChart from '@/components/common/view/LineChart'
import PieChart from '@/components/common/view/PieChart'
import ExceptionList from './List'
import { mapState } from 'vuex'

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
  }
}
</script>
