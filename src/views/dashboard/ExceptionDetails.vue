<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception Details</h1>
    <view-body v-if="exceptionDetails" :exception-details="exceptionDetails" slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/exception/details/ViewBody'

export default {
  components: {
    ViewPage,
    ViewBody
  },

  data () {
    return {
      exceptionDetails: null
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      const { $http, $route } = this
      $http.get(`/exceptions/${$route.params.exceptionId}`).then(({ data }) => {
        data.createdAt = new Date(data.createdAt)
        data.updatedAt = new Date(data.updatedAt)
        this.exceptionDetails = data
      })
    }
  }
}
</script>
