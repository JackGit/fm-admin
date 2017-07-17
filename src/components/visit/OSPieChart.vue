<template>
  <view-block title="Operation Systems" :card-body="true">
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
        name: 'Windows 10',
        value: 90
      }, {
        name: 'Windows 8',
        value: 22
      }, {
        name: 'Windows 7',
        value: 120
      }, {
        name: 'Mac OS',
        value: 2
      }]
    }
  }
}
</script>
