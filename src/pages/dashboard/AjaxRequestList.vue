<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Async Request</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             @change="handleToolbarChange"
             @search="handleClickSearch"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/ajax-request/list/ViewBody'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  computed: {
    ...mapState('ajaxRequestListPage', {
      timeStart: state => state.timeStart,
      timeEnd: state => state.timeEnd
    })
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    ...mapActions('ajaxRequestListPage', [
      'getList',
      'setTimeStart',
      'setTimeEnd'
    ]),
    fetchData () {
      this.getList({
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        limit: 100
      })
    },
    handleToolbarChange (data) {
      this.setTimeStart(data.range[0])
      this.setTimeEnd(data.range[1])
    },
    handleClickSearch () {
      this.fetchData()
    }
  }
}
</script>
