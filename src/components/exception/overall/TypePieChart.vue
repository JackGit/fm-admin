<template>
  <view-block title="ERROR TYPES" :card-body="true">
    <pie-chart :chart-data="pieChartData" style="height:300px"></pie-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import PieChart from '@/components/common/chart/PieChart'

export default {
  components: {
    ViewBlock,
    PieChart
  },

  props: {
    exceptions: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    pieChartData () {
      const types = {}
      this.exceptions.forEach(exception => {
        let name = exception.name || 'Other'
        if (types[name]) {
          ++types[name]
        } else {
          types[name] = 1
        }
      })
      return Object.keys(types).map(key => ({ name: key, value: types[key] }))
    }
  }
}
</script>
