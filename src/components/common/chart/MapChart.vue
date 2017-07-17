<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts/highmaps'
import ChinaMapData from '@/assets/js/china.cities.map.min'

function createMapChart (el) {
  Highcharts.mapChart(el, {
    title: {
      text: ''
    },
    legend: {
      layout: 'vertical',
      borderWidth: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      align: 'left',
      verticalAlign: 'bottom',
      floating: true
    },
    mapNavigation: {
      enabled: true
    },
    colorAxis: {
      type: 'logarithmic'
    },
    series: [{
      animation: {
        duration: 500
      },
      data: ChinaMapData.features.map(
        (feature, index) => ({
          key: feature.properties['name'],
          value: Math.random() * 10
        })
      ),
      mapData: ChinaMapData,
      joinBy: ['name', 'key'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Population density',
      tooltip: {
        pointFormat: '{point.key}: {point.value}/km²'
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
