<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             @change="handleToolbarChange"
             @search="handleClickSearch"></toolbar>
    <view-body slot="body"
               :exception-list="exceptionList"
               :time-start="timeStart"
               :time-end="timeEnd"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/exception/overall/ViewBody'
import { TODAY, YESTERDAY } from '@/constants/time'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  data () {
    return {
      timeStart: YESTERDAY,
      timeEnd: TODAY,
      exceptionList: []
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
      const { $http, timeStart, timeEnd } = this

      $http.get(`/exceptions`, {
        params: {
          from: timeStart.getTime(),
          end: timeEnd.getTime()
        }
      }).then(({ data }) => {
        data.forEach(d => {
          d.createdAt = new Date(d.createdAt)
          d.updatedAt = new Date(d.updatedAt)
        })
        this.exceptionList = data
      })
    },
    handleToolbarChange (data) {
      this.timeStart = data.range[0]
      this.timeEnd = data.range[1]
    },
    handleClickSearch () {
      this.fetchData()
    }
  }
}
</script>
