<template>
  <div class="c-execptionOverall">
    <template v-if="exceptionList.length > 0">
      <type-pie-chart :exceptions="exceptionList"></type-pie-chart>
      <amount-line-chart :exceptions="exceptionList" :time-start="timeStart" :time-end="timeEnd"></amount-line-chart>
      <exception-list :exceptions="exceptionList"></exception-list>
    </template>
    <p v-else>No exceptions, great job!</p>
  </div>
</template>

<script>
import '@/assets/css/exception-overall.css'
import TypePieChart from './TypePieChart'
import AmountLineChart from './AmountLineChart'
import ExceptionList from './List'

export default {
  components: {
    TypePieChart,
    AmountLineChart,
    ExceptionList
  },

  props: {
    exceptionList: Array,
    timeStart: Date,
    timeEnd: Date
  }
}
</script>
