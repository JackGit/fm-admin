<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Async Request Details</h1>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/async-request/details/ViewBody'
import { mapActions } from 'vuex'

export default {
  components: {
    ViewPage,
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
    ...mapActions('asyncRequestDetailsPage', [
      'getPageData',
      'clearData'
    ]),
    fetchData () {
      this.getPageData(this.$route.params.asyncRequestId)
    }
  }
}
</script>
