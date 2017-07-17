<template>
  <view-block title="Browsers" :card-body="true">
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
        name: 'IE',
        value: 90
      }, {
        name: 'Chrome',
        value: 92
      }, {
        name: 'Firefox',
        value: 10
      }, {
        name: 'Opera',
        value: 2
      }]
    }
  }
}
</script>
