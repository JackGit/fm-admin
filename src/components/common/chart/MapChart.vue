<template>
  <div></div>
</template>

<script>
import Highcharts from 'highcharts/highmaps'
import ChinaMapData from '@/assets/js/china.cities.map.min'

function createMapChart (el, mapData) {
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
      /* data: ChinaMapData.features.map(
        (feature, index) => ({
          key: feature.properties['name'],
          value: Math.random() * 10
        })
      ), */
      data: mapData.map(({ name, value }) => ({
        key: name,
        value
      })),
      mapData: ChinaMapData,
      joinBy: ['name', 'key'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Location Distribution',
      tooltip: {
        pointFormat: '{point.key}次'
      }
    }]
  })
}

export default {
  props: {
    mapData: Array
  },

  watch: {
    mapData () {
      this.updateChart()
    }
  },

  mounted () {
    this.updateChart()
  },

  methods: {
    updateChart () {
      createMapChart(this.$el, this.mapData || [])
    }
  }
}
</script>
