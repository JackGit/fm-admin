<template>
  <div class="c-execptionOverall">
    <template v-if="exceptionList.length > 0">
      <type-pie-chart :pie-chart-data="typePieChartData"></type-pie-chart>
      <frequency-line-chart :series-data="lineChartData" :time-start="timeStart" :interval="interval"></frequency-line-chart>
      <exception-list :exceptions="exceptionList"></exception-list>
    </template>
    <p v-else>No exceptions, great job!</p>
  </div>
</template>

<script>
import '@/assets/css/exception-overall.css'
import TypePieChart from './TypePieChart'
import FrequencyLineChart from './FrequencyLineChart'
import ExceptionList from './List'
import { mapState } from 'vuex'
import { groupByType, groupByTimeInterval } from '@/utils/group'

export default {
  components: {
    TypePieChart,
    FrequencyLineChart,
    ExceptionList
  },

  data () {
    return {
      interval: 0
    }
  },

  computed: {
    ...mapState('exceptionListPage', {
      exceptionList: state => state.exceptionList,
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd
    }),
    typePieChartData () {
      return groupByType(this.exceptionList, 'name').map(item => ({
        name: item[0].name,
        value: item.length
      }))
    },
    lineChartData () {
      const { exceptionList, timeStart, timeEnd } = this
      this.interval = (timeEnd - timeStart) / 50
      const group = groupByTimeInterval(exceptionList, 'createdAt', timeStart, timeEnd, this.interval)
      return [{
        name: 'Frequency',
        data: group.map(subGroup => subGroup.length)
      }]
    }
  }
}
</script>
