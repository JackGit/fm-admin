<template>
  <div class="c-view__body">
    <el-row>
      <el-col :span="10">
        <list></list>
      </el-col>
      <el-col :span="14" style="border-left: 1px solid #475669">
        <view-form :block="true" :form-data="formData"  style="padding:20px"></view-form>
        <dns-line-chart></dns-line-chart>
        <tcp-line-chart></tcp-line-chart>
        <http-line-chart></http-line-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DnsLineChart from '../DnsLineChart'
import TcpLineChart from '../TCPLineChart'
import HttpLineChart from '../HTTPLineChart'
import List from './List'
import ViewForm from '@/components/common/view/Form'

export default {
  components: {
    ViewForm,
    List,
    DnsLineChart,
    TcpLineChart,
    HttpLineChart
  },

  data () {
    return {
      formData: [{
        label: 'Name',
        value: 'jquery.min.js'
      }, {
        label: 'URL',
        type: 'URL',
        value: 'https://cdn.com/jquery.min.js'
      }, {
        label: 'Type',
        value: 'JS'
      }, {
        label: 'Size',
        value: '23kb'
      }]
    }
  }
}
</script>
