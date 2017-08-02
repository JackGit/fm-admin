<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Page</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             :pageList="pageList"
             :selected-page="selectedPage"
             @change="handleToolbarChange"
             @search="handleClickSearch"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/page/ViewBody'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  computed: {
    ...mapState('pageViewPage', {
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd,
      pageList: state => state.pageList,
      selectedPage: state => state.selectedPage
    })
  },

  created () {
    this.fetchData()
  },

  destroyed () {
    this.clearData()
  },

  watch: {
    '$route': 'fetchData',
    selectedPage (value) {
      if (value) {
        this.getPVStatsInfo()
        this.getTimingStatsInfo()
      }
    }
  },

  methods: {
    ...mapActions('pageViewPage', [
      'getList',
      'getPVStatsInfo',
      'getTimingStatsInfo',
      'setSelectedPage',
      'clearData',
      'setTimeStart',
      'setTimeEnd'
    ]),
    fetchData () {
      this.getList()
    },
    handleToolbarChange (data) {
      this.setTimeStart(data.range[0])
      this.setTimeEnd(data.range[1])
      this.setSelectedPage(data.page)
    },
    handleClickSearch () {
      this.fetchData()
    }
  }
}
</script>
