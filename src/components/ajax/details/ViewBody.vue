<template>
  <div class="c-ajaxDetails">
    <el-row v-if="ajaxList.length > 0 && ajaxDetails">
      <view-form :block="true" :form-data="formData" style="padding:20px"></view-form>
      <amount-line-chart :series-data="amountLineSeriesData"
                         :time-start="timeStart"
                         :time-end="timeEnd"
                         :interval="interval"></amount-line-chart>
      <response-time-line-chart :series-data="responseTimeSeriesData"
                                :time-start="timeStart"
                                :time-end="timeEnd"
                                :interval="interval"></response-time-line-chart>
      <response-status-pie-chart :chart-data="pieChartData"></response-status-pie-chart>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-details.css'
import AmountLineChart from './AmountLineChart'
import ResponseTimeLineChart from './ResponseTimeLineChart'
import ResponseStatusPieChart from './ResponseStatusPieChart'
import ViewForm from '@/components/common/view/Form'
import { timeFormat } from '@/utils/filters'
import { groupByTimeInterval, groupByType } from '@/utils/group'

export default {
  components: {
    AmountLineChart,
    ResponseStatusPieChart,
    ResponseTimeLineChart,
    ViewForm
  },

  props: {
    ajaxDetails: Object,
    ajaxList: Array
  },

  data () {
    const $route = this.$route
    return {
      timeStart: new Date(+$route.query.timeStart),
      timeEnd: new Date(+$route.query.timeEnd),
      interval: ($route.query.timeEnd - $route.query.timeStart) / 30
    }
  },

  computed: {
    formData () {
      const ajaxDetails = this.ajaxDetails || {}
      return [{
        label: 'Method',
        value: ajaxDetails.method
      }, {
        label: 'URL',
        type: 'URL',
        value: ajaxDetails.url
      }, {
        label: 'Page URL',
        type: 'URL',
        value: ajaxDetails.fullUrl
      }, {
        label: 'Start At',
        value: timeFormat(ajaxDetails.startAt)
      }, {
        label: 'End At',
        value: timeFormat(ajaxDetails.endAt)
      }, {
        label: 'Duration',
        value: ajaxDetails.duration + 'ms'
      }, {
        label: 'Response Status',
        value: ajaxDetails.status
      }]
    },
    groupData () {
      const { ajaxList, timeStart, timeEnd, interval } = this
      return groupByTimeInterval(ajaxList, 'startAt', timeStart, timeEnd, interval)
    },
    amountLineSeriesData () {
      return [{
        name: 'Frequency',
        data: this.groupData.map(subGroup => subGroup.length)
      }]
    },
    responseTimeSeriesData () {
      return [{
        name: 'Time(ms)',
        data: this.groupData.map(subGroup => {
          if (subGroup.length === 0) {
            return 0
          } else {
            return subGroup.map(d => d.duration).reduce((a, b) => a + b) / subGroup.length
          }
        })
      }]
    },
    pieChartData () {
      return groupByType(this.ajaxList, 'status').map(subGroup => ({
        name: subGroup[0].status,
        value: subGroup.length
      }))
    }
  }
}
</script>
