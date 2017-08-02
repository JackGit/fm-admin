<template>
  <view-block :title="title" :card-body="true">
    <line-chart :series-data="seriesData" :time-interval="interval" :time-start="timeStart" :tooltip-format="tooltipFormat" style="width: 600px;height:300px"></line-chart>
    <time-interval-selector v-if="intervalSelector" slot="tool" size="small" :interval="interval" @change="handleIntervalChange"></time-interval-selector>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import LineChart from '@/components/common/chart/LineChart'
import TimeIntervalSelector from '@/components/common/TimeIntervalSelector'

export default {
  components: {
    ViewBlock,
    LineChart,
    TimeIntervalSelector
  },

  props: {
    title: String,
    seriesData: Array,
    timeStart: Date,
    interval: Number,
    tooltipFormat: String,
    intervalSelector: Boolean
  },

  methods: {
    handleIntervalChange (interval) {
      this.$emit('intervalchange', interval)
    }
  }
}
</script>
