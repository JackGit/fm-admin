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
        name: 'ie',
        value: 60
      }, {
        name: 'chrome',
        value: 62
      }]
    }
  }
}
</script>
