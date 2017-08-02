<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Site View</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             @change="handleToolbarChange"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/site-view/ViewBody'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  computed: {
    ...mapState('siteViewPage', {
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd
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
    ...mapActions('siteViewPage', [
      'getUVStatsInfo',
      'getPVStatsInfo',
      'getBrowserStatsInfo',
      'getOSStatsInfo',
      'getNetworkOperatorStatsInfo',
      'getLocationStatsInfo',
      'clearData'
    ]),
    fetchData () {
      this.getUVStatsInfo()
      this.getPVStatsInfo()
      this.getBrowserStatsInfo()
      this.getOSStatsInfo()
      this.getNetworkOperatorStatsInfo()
      this.getLocationStatsInfo()
    },
    handleToolbarChange () {}
  }
}
</script>
