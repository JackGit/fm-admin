<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts'

/**
 * @param  {HTMLElement} el   [description]
 * @param  {Array} data [{name, value}]
 */
function createPieChart (el, data) {
  Highcharts.chart(el, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: '',
      colorByPoint: true,
      data: data.map(
        ({name, value}) => ({ name, y: value })
      )
    }]
  })
}

export default {
  props: {
    chartData: Array
  },

  watch: {
    chartData () {
      this.updateChart()
    }
  },

  mounted () {
    this.updateChart()
  },

  methods: {
    updateChart () {
      createPieChart(this.$el, this.chartData)
    }
  }
}
</script>
