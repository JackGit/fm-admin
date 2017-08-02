<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception</h1>
    <toolbar slot="toolbar"
             :time-start="timeStart"
             :time-end="timeEnd"
             @change="handleToolbarChange"></toolbar>
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
    ...mapActions('exceptionListPage', [
      'fetchPageData',
      'setTimeRange',
      'clearData'
    ]),
    fetchData () {
      this.fetchPageData()
    },
    handleToolbarChange (data) {
      this.setTimeRange(data)
      this.fetchPageData()
    }
  }
}
</script>
