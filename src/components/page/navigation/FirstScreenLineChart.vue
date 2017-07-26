<template>
  <view-block title="First Screen" :card-body="true">
    <line-chart :series-data="barSeriesData" :time-interval="timeInterval" :time-start="timeStart" style="width: 600px;height:300px"></line-chart>
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

  data () {
    return {
      timeInterval: 1000 * 60 * 60 * 2,
      timeStart: new Date(),
      barSeriesData: [{
        name: 'pop',
        data: [23.7, 16.1, 14.2, 14.0, 12.5, 12.1, 11.8, 11.7, 11.1, 11.1, 10.5, 10.4]
      }]
    }
  }
}
</script>
