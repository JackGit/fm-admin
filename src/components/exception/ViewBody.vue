<template>
  <div class="c-execption">
    <type-pie-chart></type-pie-chart>
    <amount-line-chart></amount-line-chart>
    <exception-list></exception-list>
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
  }
}
</script>
