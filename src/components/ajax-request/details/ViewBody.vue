<template>
  <div class="c-ajaxDetails">
    <el-row>
      <view-form :form-data="formData"></view-form>
      <line-chart title="Frequency" :series-data="frequencyLineSeriesData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <line-chart title="Response Time" :series-data="responseTimeSeriesData" :time-start="timeStart" :interval="interval" tooltip-format="<b>{point.y:.0f}</b>"></line-chart>
      <pie-chart title="Status Code" :chart-data="pieChartData"></pie-chart>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-details.css'
import LineChart from '@/components/common/view/LineChart'
import PieChart from '@/components/common/view/PieChart'
import ViewForm from '@/components/common/view/Form'
import { mapState } from 'vuex'

export default {
  components: {
    LineChart,
    PieChart,
    ViewForm
  },

  computed: {
    ...mapState('ajaxRequestDetailsPage', {
      statusStatsInfo: state => state.statusStatsInfo,
      frequencyStatsInfo: state => state.frequencyStatsInfo,
      durationStatsInfo: state => state.durationStatsInfo,
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd,
      interval: state => state.interval
    }),
    formData () {
      return [{
        label: 'URL',
        type: 'URL',
        value: this.$route.query.url
      }, {
        label: 'Method',
        value: this.$route.query.method
      }]
    },
    frequencyLineSeriesData () {
      return [{
        name: 'Frequency',
        data: this.frequencyStatsInfo.map(item => item.count)
      }]
    },
    responseTimeSeriesData () {
      return [{
        name: 'Time(ms)',
        data: this.durationStatsInfo.map(item => item.avgDuration)
      }]
    },
    pieChartData () {
      return this.statusStatsInfo.map(item => ({
        name: item.status,
        value: item.count
      }))
    }
  }
}
</script>
