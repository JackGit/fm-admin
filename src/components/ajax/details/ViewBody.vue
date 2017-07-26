<template>
  <div class="c-ajaxDetails">
    <el-row v-if="ajaxList.length > 0 && ajaxDetails">
      <view-form :block="true" :form-data="formData" style="padding:20px"></view-form>
      <frequency-line-chart :series-data="amountLineSeriesData"
                         :time-start="timeStart"
                         :time-end="timeEnd"
                         :interval="interval"></frequency-line-chart>
      <response-time-line-chart :series-data="responseTimeSeriesData"
                                :time-start="timeStart"
                                :time-end="timeEnd"
                                :interval="interval"></response-time-line-chart>
      <status-code-pie-chart :chart-data="pieChartData"></status-code-pie-chart>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-details.css'
import FrequencyLineChart from './FrequencyLineChart'
import ResponseTimeLineChart from './ResponseTimeLineChart'
import StatusCodePieChart from './StatusCodePieChart'
import ViewForm from '@/components/common/view/Form'
import { TODAY, YESTERDAY, HOUR } from '@/constants/time'
import { timeFormat } from '@/utils/filters'
import { groupByTimeInterval, groupByType } from '@/utils/group'

export default {
  components: {
    FrequencyLineChart,
    StatusCodePieChart,
    ResponseTimeLineChart,
    ViewForm
  },

  props: {
    ajaxDetails: Object,
    ajaxList: Array
  },

  data () {
    return {
      timeStart: YESTERDAY,
      timeEnd: TODAY,
      interval: HOUR
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
