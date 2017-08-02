<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Async Request</h1>
    <toolbar slot="toolbar" :time-start="timeStart" :time-end="timeEnd" @change="handleToolbarChange">
      <el-input placeholder="Filter" v-model="filterString" style="width: 200px"></el-input>
    </toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import debounce from 'lodash.debounce'
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/ajax-request/list/ViewBody'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  data () {
    return {
      filterString: ''
    }
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

  destroyed () {
    this.clearData()
  },

  watch: {
    '$route': 'fetchData',
    filterString (value) {
      this.updateFilterString(value)
    }
  },

  methods: {
    ...mapActions('ajaxRequestListPage', [
      'fetchPageData',
      'setTimeRange',
      'setFilterString',
      'clearData'
    ]),
    fetchData () {
      this.fetchPageData()
    },
    handleToolbarChange (data) {
      this.setTimeRange(data)
      this.fetchData()
    },
    updateFilterString: debounce(function (value) {
      this.setFilterString(value)
    }, 300)
  }
}
</script>
