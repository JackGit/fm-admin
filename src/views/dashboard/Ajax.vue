<template>
  <div>ajax
    <el-card style="width: 480px">
      <pie-chart :chart-data="pieChartData"></pie-chart>
    </el-card>
    <bar-chart :series-data="barSeriesData" :categories="barCategories"></bar-chart>
    <line-chart :series-data="barSeriesData" :time-interval="timeInterval" :time-start="timeStart"></line-chart>
    <map-chart></map-chart>
  </div>
</template>

<script>
import PieChart from '@/components/common/chart/PieChart'
import BarChart from '@/components/common/chart/BarChart'
import LineChart from '@/components/common/chart/LineChart'
import MapChart from '@/components/common/chart/MapChart'

export default {
  components: {
    PieChart,
    BarChart,
    LineChart,
    MapChart
  },

  data () {
    return {
      pieChartData: [{
        name: 'ie',
        value: 60
      }, {
        name: 'chrome',
        value: 62
      }],
      timeInterval: 1000 * 60 * 60 * 2,
      timeStart: new Date(),
      barCategories: ['Shanghai', 'Lagos', 'Istanbul', 'Mumbai', 'Moscow', 'São Paulo', 'Beijing', 'Guangzhou', 'Delhi', 'Shenzhen', 'Seoul', 'Jakarta'],
      barSeriesData: [{
        name: 'pop',
        data: [23.7, 16.1, 14.2, 14.0, 12.5, 12.1, 11.8, 11.7, 11.1, 11.1, 10.5, 10.4]
      }]
    }
  }
}
</script>
