<template>
  <div class="c-visit">
    <pvuv-line-chart></pvuv-line-chart>
    <browser-pie-chart></browser-pie-chart>
    <os-pie-chart></os-pie-chart>
    <net-operator-pie-chart></net-operator-pie-chart>
    <geo-map-chart></geo-map-chart>
  </div>
</template>

<script>
import '@/assets/css/visit.css'
import PvuvLineChart from '../common/PVUVLineChart'
import BrowserPieChart from './BrowserPieChart'
import OsPieChart from './OSPieChart'
import NetOperatorPieChart from './NetOperatorPieChart'
import GeoMapChart from './GeoMapChart'

export default {
  components: {
    PvuvLineChart,
    BrowserPieChart,
    OsPieChart,
    NetOperatorPieChart,
    GeoMapChart
  }
}
</script>
