<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Page</h1>
    <toolbar slot="toolbar"
             :range="[timeStart, timeEnd]"
             @change="handleToolbarChange"
             @search="handleClickSearch"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/page/ViewBody'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  computed: {
    ...mapState('pageViewPage', {
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
    ...mapActions('pageViewPage', [
      'getList',
      'clearData',
      'setTimeStart',
      'setTimeEnd'
    ]),
    fetchData () {
      const { getList, timeStart, timeEnd } = this
      getList({ timeStart, timeEnd })
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
