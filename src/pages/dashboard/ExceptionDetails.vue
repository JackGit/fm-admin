<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception Details</h1>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/exception/details/ViewBody'
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
    ...mapActions('exceptionDetailsPage', [
      'getDetails',
      'clearData'
    ]),
    fetchData () {
      this.getDetails(this.$route.params.exceptionId)
    }
  }
}
</script>
