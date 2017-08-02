<template>
  <view-block :title="title" :card-body="true">
    <line-chart :series-data="seriesData" :time-interval="interval" :time-start="timeStart" :tooltip-format="tooltipFormat" style="width: 600px;height:300px"></line-chart>
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
    title: String,
    seriesData: Array,
    timeStart: Date,
    interval: Number,
    tooltipFormat: String
  }
}
</script>
