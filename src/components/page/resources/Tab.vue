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
import LineChart from '@/components/common/view/LineChart'
import List from './List'
import ViewForm from '@/components/common/view/Form'

export default {
  components: {
    ViewForm,
    List,
    LineChart
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
