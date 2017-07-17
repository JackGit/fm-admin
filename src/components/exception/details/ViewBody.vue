<template>
  <div class="c-execptionDetails">
    <el-row>
      <el-col :span="18">
        <view-form title="Exception" :form-data="exception"></view-form>
        <view-form title="Headers" :form-data="headers"></view-form>
        <view-form title="User" :form-data="user"></view-form>
        <view-form title="Operation System" :form-data="OS"></view-form>
        <view-form title="Browser" :form-data="browser"></view-form>
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

export default {
  components: {
    ViewForm,
    BarChart
  },
  data () {
    return {
      exception: [{
        label: 'URL',
        type: 'URL',
        value: 'http://bloc.jackyang.me'
      }, {
        label: 'File Name',
        value: 'blog.js'
      }, {
        label: 'Type',
        value: 'Reference Error'
      }, {
        label: 'Description',
        value: 'unexpected token }'
      }, {
        label: 'Stack',
        value: 'N/A'
      }, {
        label: 'Created At',
        value: '2017/07/17 11:32:22'
      }],
      headers: [{
        label: 'User-Agent',
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }],
      user: [{
        label: 'IP',
        value: '192.168.1.103'
      }],
      OS: [{
        label: 'Name',
        value: 'Windows'
      }, {
        label: 'Version',
        value: '10'
      }, {
        label: 'Kernel Version',
        value: 'N/A'
      }],
      browser: [{
        label: 'Name',
        value: 'Chrome'
      }, {
        label: 'Version',
        value: '58.4'
      }]
    }
  }
}
</script>
