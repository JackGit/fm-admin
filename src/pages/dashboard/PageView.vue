<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Page</h1>
    <toolbar slot="toolbar"
             :time-start="timeStart"
             :time-end="timeEnd"
             :interval="interval"
             :page-list="pageList"
             :selected-page="selectedPage"
             @change="handleToolbarChange"></toolbar>
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
      interval: state => state.interval,
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
    '$route': 'fetchData'
  },

  methods: {
    ...mapActions('pageViewPage', [
      'fetchPageData',
      'setTimeQuery',
      'setSelectedPage',
      'clearData'
    ]),
    fetchData () {
      this.fetchPageData()
    },
    handleToolbarChange ({ page, timeStart, timeEnd, interval }) {
      this.setSelectedPage(page)
      this.setTimeQuery({ timeStart, timeEnd, interval })
      this.fetchData()
    }
  }
}
</script>
