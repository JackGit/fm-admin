<template>
  <view-block title="Response Status" :card-body="true">
    <pie-chart :chart-data="chartData" style="height:300px"></pie-chart>
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

  props: {
    chartData: Array
  }
}
</script>
