<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts/highmaps'
import ChinaMapData from '@/assets/js/cn.map.min'

function createMapChart (el) {
  Highcharts.mapChart(el, {
    title: {
      text: ''
    },
    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: 'rgba(255,255,255,0.85)',
      floating: true,
      verticalAlign: 'top',
      y: 25
    },
    colorAxis: {
      min: 1,
      type: 'logarithmic',
      minColor: '#EEEEFF',
      maxColor: '#000022',
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },
    series: [{
      animation: {
        duration: 500
      },
      data: [],
      mapData: ChinaMapData,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Population density',
      tooltip: {
        pointFormat: '{point.code}: {point.value}/km²'
      }
    }]
  })
}

export default {
  mounted () {
    createMapChart(this.$el)
  }
}
</script>
