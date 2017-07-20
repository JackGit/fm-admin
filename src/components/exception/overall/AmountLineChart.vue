<template>
  <view-block title="AMOUNT" :card-body="true">
    <line-chart :series-data="seriesData" :time-interval="interval" :time-start="timeStart" style="height:300px;width:800px;"></line-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import LineChart from '@/components/common/chart/LineChart'
import { groupByTimeInterval } from '@/utils/group'
import { TODAY, YESTERDAY, HOUR } from '@/constants/time'

export default {
  components: {
    ViewBlock,
    LineChart
  },

  props: {
    exceptions: {
      type: Array,
      default: () => []
    },
    timeStart: {
      type: Date,
      default: () => YESTERDAY
    },
    timeEnd: {
      type: Date,
      default: () => TODAY
    },
    interval: {
      type: Number,
      default: HOUR
    }
  },

  data () {
    return {
      seriesData: []
    }
  },

  watch: {
    exceptions () {
      this.updateSeriesData()
    }
  },

  mounted () {
    this.updateSeriesData()
  },

  methods: {
    updateSeriesData () {
      const { exceptions, timeStart, timeEnd, interval } = this
      const group = groupByTimeInterval(exceptions, 'createdAt', timeStart, timeEnd, interval)
      this.seriesData = [{
        name: 'Frequency',
        data: group.map(subGroup => subGroup.length)
      }]
    }
  }
}
</script>
