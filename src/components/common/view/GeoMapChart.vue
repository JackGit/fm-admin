<template>
  <view-block :title="title" :card-body="true" :block="true">
    <map-chart style="height:600px;" :map-data="mapData"></map-chart>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import MapChart from '@/components/common/chart/MapChart'

export default {
  components: {
    MapChart,
    ViewBlock
  },

  props: {
    title: String,
    mapData: Array
  }
}
</script>
