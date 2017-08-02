<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception Details</h1>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/exception/details/ViewBody'
import { mapActions, mapState } from 'vuex'

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

  computed: {
    ...mapState('exceptionDetailsPage', {
      exceptionDetails: state => state.exceptionDetails
    })
  },

  methods: {
    ...mapActions('exceptionDetailsPage', [
      'fetchPageData',
      'clearData'
    ]),
    fetchData () {
      this.fetchPageData(this.$route.params.exceptionId)
    }
  }
}
</script>
