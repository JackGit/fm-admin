<template>
  <view-block title="ERROR TYPES" :card-body="true">
    <pie-chart :chart-data="pieChartData" style="height:300px"></pie-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import PieChart from '@/components/common/chart/PieChart'

export default {
  components: {
    ViewBlock,
    PieChart
  },

  data () {
    return {
      pieChartData: [{
        name: 'Syntax',
        value: 60
      }, {
        name: 'Reference',
        value: 62
      }, {
        name: 'Promise',
        value: 10
      }, {
        name: 'Unknown',
        value: 23
      }]
    }
  }
}
</script>
