<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts'

/**
 * @param  {HTMLElement} el   [description]
 * @param  {Array} data
 */
function createBarChart (el, { type, categories, tooltipFormat, seriesData, timeInterval, timeStart }) {
  Highcharts.chart(el, {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type,
      categories,
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
    series: seriesData
  })
}

export default {
  props: {
    seriesData: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'category' // category, datetime
    },
    categories: {
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

  mounted () {
    createBarChart(this.$el, {
      type: this.type,
      categories: this.type !== 'category' ? null : this.categories,
      tooltipFormat: this.tooltipFormat,
      seriesData: this.seriesData,
      timeInterval: this.timeInterval,
      timeStart: this.timeStart
    })
  }
}
</script>
