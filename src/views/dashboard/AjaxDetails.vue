<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Ajax Details</h1>
    <view-body :ajax-details="ajaxDetails" :ajax-list="ajaxList" slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/ajax/details/ViewBody'
import { TODAY, YESTERDAY } from '@/constants/time'

export default {
  components: {
    ViewPage,
    ViewBody
  },

  data () {
    return {
      ajaxDetails: null,
      ajaxList: []
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

      $http.get(`/async-request/${$route.params.ajaxId}`).then(({ data }) => {
        data.createdAt = new Date(data.createdAt)
        data.updatedAt = new Date(data.updatedAt)
        this.ajaxDetails = data

        // 获取指定时间段内同类型的asyncRequest的数据，做统计使用
        // 同种类型：url, method相同
        this.fetchChartData({
          method: data.method,
          pageUrl: encodeURIComponent(data.pageUrl),
          url: encodeURIComponent(data.url)
        })
      })
    },
    fetchChartData (condition) {
      const { $http } = this
      $http.get({enalbleLoading: false}, '/async-request', {
        params: {
          from: YESTERDAY.getTime(),
          end: TODAY.getTime(),
          url: condition.url,
          method: condition.method
        }
      }).then(({ data }) => {
        data.forEach(d =>
          ['createdAt', 'updatedAt', 'startAt', 'endAt'].forEach(key => {
            d[key] = new Date(d[key])
          })
        )
        this.ajaxList = data
      })
    }
  }
}
</script>
