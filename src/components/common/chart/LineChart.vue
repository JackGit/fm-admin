<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts'
import { toUTCDate } from '@/utils/date'

/**
 * @param  {HTMLElement} el   [description]
 * @param  {Array} data
 */
function createLineChart (el, { tooltipFormat, seriesData, timeInterval, timeStart }) {
  Highcharts.chart(el, {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      pointFormat: tooltipFormat
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
        pointInterval: timeInterval,
        pointStart: toUTCDate(timeStart).getTime()
      }
    },
    series: seriesData
  })
}

export default {
  props: {
    seriesData: {
      type: Array,
      default: () => []
    },
    tooltipFormat: {
      type: String,
      default: '<b>{point.y:.1f}</b>'
    },
    timeInterval: {
      type: Number,
      default: 0
    },
    timeStart: {
      type: Date,
      default: null
    }
  },

  watch: {
    seriesData () {
      this.updateChart()
    }
  },

  mounted () {
    this.updateChart()
  },

  methods: {
    updateChart () {
      createLineChart(this.$el, {
        tooltipFormat: this.tooltipFormat,
        seriesData: this.seriesData,
        timeInterval: this.timeInterval,
        timeStart: this.timeStart
      })
    }
  }
}
</script>
