<template>
  <div class="c-execptionDetails">
    <el-row v-if="exceptionDetails">
      <el-col :span="18">
        <view-form :form-data="[{ label: 'ID', value: exceptionDetails._id }]"></view-form>
        <view-form title="Exception" :form-data="exceptionForm"></view-form>
        <view-form title="Headers" :form-data="headersForm"></view-form>
        <view-form title="User" :form-data="userForm"></view-form>
        <view-form title="Operation System" :form-data="osForm"></view-form>
        <view-form title="Browser" :form-data="browserForm"></view-form>
      </el-col>
      <el-col :span="6" style="padding: 10px">
        <p>LAST 24 HOURS</p>
        <bar-chart :series-data="[0, 0, 0, 100, 22, 3]" :categories="['D1', 'D2', 'D3', 'D4', 'D5', 'D6']"></bar-chart>
        <p>LAST 7 DAYS</p>
        <bar-chart :series-data="[0, 0, 0, 100, 22, 3]" :categories="['D1', 'D2', 'D3', 'D4', 'D5', 'D6']"></bar-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/exception-details.css'
import ViewForm from '@/components/common/view/Form'
import BarChart from '@/components/common/chart/BarChart'
import { timeFormat } from '@/utils/filters'
import { mapState } from 'vuex'

export default {
  components: {
    ViewForm,
    BarChart
  },

  computed: {
    ...mapState('exceptionDetailsPage', {
      exceptionDetails: state => state.exceptionDetails
    }),
    exceptionForm () {
      const { pageUrl, type, message, stack, createdAt } = this.exceptionDetails

      return [{
        label: 'Page URL',
        type: 'URL',
        value: pageUrl
      }, {
        label: 'File Name',
        type: 'URL',
        value: stack.length > 0 && stack[stack.length - 1].url
      }, {
        label: 'Type',
        value: type
      }, {
        label: 'Description',
        value: message
      }, {
        label: 'Stack',
        type: 'LIST',
        value: stack.map(frame => `${frame.url}, line: ${frame.line || '?'}, column: ${frame.column || '?'}, function: ${frame.func}`)
      }, {
        label: 'Created At',
        value: timeFormat(createdAt)
      }]
    },
    headersForm () {
      return [{
        label: 'User-Agent',
        value: this.exceptionDetails.userAgent
      }]
    },
    userForm () {
      return [{
        label: 'IP',
        value: this.exceptionDetails.ip
      }]
    },
    osForm () {
      const os = this.exceptionDetails.os
      return [{
        label: 'Name',
        value: os.name
      }, {
        label: 'Version',
        value: os.version
      }]
    },
    browserForm () {
      const browser = this.exceptionDetails.browser
      return [{
        label: 'Name',
        value: browser.name
      }, {
        label: 'Version',
        value: browser.version
      }]
    }
  }
}
</script>
