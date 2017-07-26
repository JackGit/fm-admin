<template>
  <view-block title="response time (last 24 hours)" :card-body="true">
    <line-chart :series-data="seriesData" :time-interval="interval" :time-start="timeStart" tooltip-format="<b>{point.y:.0f}</b>" style="height:300px"></line-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import LineChart from '@/components/common/chart/LineChart'

export default {
  components: {
    ViewBlock,
    LineChart
  },

  props: {
    seriesData: Array,
    timeStart: Date,
    interval: Number
  }
}
</script>
