<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Async Request Details</h1>
    <toolbar slot="toolbar"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/ajax-request/details/ViewBody'
import { mapActions } from 'vuex'

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

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    ...mapActions('ajaxRequestDetailsPage', [
      'getStatsInfo',
      'clearData'
    ]),
    fetchData () {
      this.getStatsInfo({
        url: this.$route.query.url,
        method: this.$route.query.method
      })
    }
  }
}
</script>
