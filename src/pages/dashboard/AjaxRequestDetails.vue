<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Async Request Details</h1>
    <toolbar slot="toolbar"
             :time-start="timeStart"
             :time-end="timeEnd"
             :interval="interval"
             @change="handleToolbarChange"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/ajax-request/details/ViewBody'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  created () {
    this.fetchData()
  },

  destroyed () {
    this.clearData()
  },

  computed: {
    ...mapState('ajaxRequestDetailsPage', {
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd,
      interval: state => state.interval
    })
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    ...mapActions('ajaxRequestDetailsPage', [
      'fetchPageData',
      'setTimeQuery',
      'clearData'
    ]),
    fetchData () {
      this.fetchPageData({
        url: this.$route.query.url,
        method: this.$route.query.method
      })
    },
    handleToolbarChange (data) {
      this.setTimeQuery(data)
      this.fetchData()
    }
  }
}
</script>
