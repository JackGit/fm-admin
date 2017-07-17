<template>
  <view-block title="Network Operators" :card-body="true">
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
        name: '电信',
        value: 60
      }, {
        name: '网通',
        value: 12
      }, {
        name: '长城',
        value: 13
      }, {
        name: '移动',
        value: 23
      }]
    }
  }
}
</script>
