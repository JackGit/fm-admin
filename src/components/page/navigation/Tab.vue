<template>
  <div class="c-view__body">
    <line-chart title="DSN" :series-data="dnsSeriesData" :time-start="timeStart" :interval="interval"></line-chart>
    <line-chart title="TCP" :series-data="tcpSeriesData" :time-start="timeStart" :interval="interval"></line-chart>
    <line-chart title="White Screen" :series-data="whiteScreenSeriesData" :time-start="timeStart" :interval="interval"></line-chart>
    <line-chart title="First Screen" :series-data="firstScreenSeriesData" :time-start="timeStart" :interval="interval"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/components/common/view/LineChart'
import { mapState } from 'vuex'
import { groupByTimeInterval } from '@/utils/group'

export default {
  components: {
    LineChart
  },

  computed: {
    ...mapState('pageViewPage', {
      pageViewList: state => state.pageViewList,
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd
    }),
    interval () {
      return (this.timeEnd - this.timeStart) / 50
    },
    groupData () {
      const { pageViewList, timeStart, timeEnd, interval } = this
      return groupByTimeInterval(pageViewList, 'createdAt', timeStart, timeEnd, interval)
    },
    dnsSeriesData () {
      return [{
        name: 'DNS',
        data: this.getNavAveTiming('DNS')
      }]
    },
    tcpSeriesData () {
      return [{
        name: 'TCP',
        data: this.getNavAveTiming('TCP')
      }]
    },
    httpSeriesData () {
      return [{
        name: 'HTTP',
        data: this.getNavAveTiming('request')
      }]
    },
    whiteScreenSeriesData () {
      return [{
        name: 'White Screen',
        data: this.getNavAveTiming('whiteScreen')
      }]
    },
    firstScreenSeriesData () {
      return [{
        name: 'First Screen',
        data: this.getNavAveTiming('firstScreen')
      }]
    }
  },

  methods: {
    getNavAveTiming (type) {
      return this.groupData.map(subGroup => {
        if (subGroup.length === 0) {
          return 0
        }

        const validRecords = subGroup.filter(pageView => pageView.navigationTiming.length > 0)
        return validRecords.map(
          pageView => pageView.navigationTiming.filter(
            timing => timing.name === type
          )[0].duration
        ).reduce((a, b) => a + b) / validRecords.length
      })
    }
  }
}
</script>
