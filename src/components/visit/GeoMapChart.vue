<template>
  <view-block title="城市" :card-body="true" :block="true">
    <map-chart style="height:600px;"></map-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import MapChart from '@/components/common/chart/MapChart'

export default {
  components: {
    MapChart,
    ViewBlock
  }
}
</script>
