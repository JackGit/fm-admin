<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             @change="handleToolbarChange"
             @search="handleClickSearch"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/exception/list/ViewBody'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  computed: {
    ...mapState('exceptionListPage', {
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd,
      interval: state => state.interval
    })
  },

  created () {
    this.fetchData()
  },

  destroyed () {
    this.clearData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    ...mapActions('exceptionListPage', [
      'getList',
      'getTypesStatsInfo',
      'getFrequencyStatsInfo',
      'setInterval',
      'setTimeStart',
      'setTimeEnd',
      'clearData'
    ]),
    fetchData () {
      const { timeStart, timeEnd } = this
      this.getList({
        timeStart,
        timeEnd
      })
      this.getTypesStatsInfo({
        timeStart,
        timeEnd
      })
      this.getFrequencyStatsInfo({
        timeStart,
        timeEnd,
        interval: this.interval
      })
    },
    handleToolbarChange (data) {
      this.setTimeStart(data.range[0])
      this.setTimeEnd(data.range[1])
      this.setInterval((data.range[1] - data.range[0]) / 100)
    },
    handleClickSearch () {
      this.fetchData()
    }
  }
}
</script>
