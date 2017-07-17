<template>
  <div class="c-ajax">
    <el-row>
      <el-col :span="10">
        <list></list>
      </el-col>
      <el-col :span="14" style="border-left: 1px solid #475669">
        <view-form :block="true" :form-data="selectedAjax" style="padding:20px"></view-form>
        <amount-line-chart></amount-line-chart>
        <response-time-line-chart></response-time-line-chart>
        <response-status-line-chart></response-status-line-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax.css'
import List from './List'
import AmountLineChart from './AmountLineChart'
import ResponseTimeLineChart from './ResponseTimeLineChart'
import ResponseStatusLineChart from './ResponseStatusLineChart'
import ViewForm from '@/components/common/view/Form'

export default {
  components: {
    AmountLineChart,
    ResponseStatusLineChart,
    ResponseTimeLineChart,
    List,
    ViewForm
  },

  data () {
    return {
      selectedAjax: [{
        label: 'Method',
        value: 'POST'
      }, {
        label: 'URL',
        type: 'URL',
        value: 'http://blog.jackyang.me/post/new'
      }]
    }
  }
}
</script>
