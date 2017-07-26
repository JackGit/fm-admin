<template>
  <div class="c-ajaxDetails">
    <el-row v-if="asyncRequestList.length > 0 && asyncRequestDetails">
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
import { mapState } from 'vuex'
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

  data () {
    return {
      timeStart: YESTERDAY,
      timeEnd: TODAY,
      interval: HOUR
    }
  },

  computed: {
    ...mapState('asyncRequestDetailsPage', {
      asyncRequestDetails: state => state.asyncRequestDetails,
      asyncRequestList: state => state.last24HoursAsyncRequestList
    }),
    formData () {
      const details = this.asyncRequestDetails || {}
      return [{
        label: 'Method',
        value: details.method
      }, {
        label: 'URL',
        type: 'URL',
        value: details.url
      }, {
        label: 'Page URL',
        type: 'URL',
        value: details.fullUrl
      }, {
        label: 'Start At',
        value: timeFormat(details.startAt)
      }, {
        label: 'End At',
        value: timeFormat(details.endAt)
      }, {
        label: 'Duration',
        value: details.duration + 'ms'
      }, {
        label: 'Response Status',
        value: details.status
      }]
    },
    groupData () {
      const { asyncRequestList, timeStart, timeEnd, interval } = this
      return groupByTimeInterval(asyncRequestList, 'startAt', timeStart, timeEnd, interval)
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
      return groupByType(this.asyncRequestList, 'status').map(subGroup => ({
        name: subGroup[0].status,
        value: subGroup.length
      }))
    }
  }
}
</script>
