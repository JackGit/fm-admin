<template>
  <div class="c-view__body">
    <dns-line-chart></dns-line-chart>
    <tcp-line-chart></tcp-line-chart>
    <http-line-chart></http-line-chart>
    <white-screen-line-chart></white-screen-line-chart>
    <first-screen-line-chart></first-screen-line-chart>
  </div>
</template>

<script>
import DnsLineChart from '../DnsLineChart'
import TcpLineChart from '../TCPLineChart'
import HttpLineChart from '../HTTPLineChart'
import WhiteScreenLineChart from './WhiteScreenLineChart'
import FirstScreenLineChart from './FirstScreenLineChart'

export default {
  components: {
    DnsLineChart,
    TcpLineChart,
    HttpLineChart,
    WhiteScreenLineChart,
    FirstScreenLineChart
  }
}
</script>
