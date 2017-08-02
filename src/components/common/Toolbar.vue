<template>
  <div class="c-toolbar">
    <el-select v-if="pageList" v-model="localSelectedPage" placeholder="请选择页面" @change="handlePageChange">
      <el-option v-for="item in pageList"
        :key="item.pageUrl"
        :label="item.pageUrl"
        :value="item.pageUrl">
      </el-option>
    </el-select>
    <el-date-picker v-if="timeStart && timeEnd" v-model="timeRange" type="datetimerange" placeholder="请选择时间段" @change="handleTimeRangeChange"></el-date-picker>
    <time-interval-selector v-if="interval" :interval="localInterval" @change="handleIntervalChange"></time-interval-selector>
    <slot></slot>
  </div>
</template>

<script>
import '@/assets/css/toolbar.css'
import TimeIntervalSelector from './TimeIntervalSelector'

export default {
  props: {
    timeStart: Date,
    timeEnd: Date,
    interval: Number,
    pageList: Array,
    selectedPage: String
  },

  components: {
    TimeIntervalSelector
  },

  data () {
    return {
      timeRange: [this.timeStart, this.timeEnd],
      localSelectedPage: this.selectedPage,
      localInterval: this.interval
    }
  },

  watch: {
    timeStart (value) {
      this.timeRange = [this.timeStart, this.timeEnd]
    },
    timeEnd (value) {
      this.timeRange = [this.timeStart, this.timeEnd]
    },
    pageList (value) {
      if (value && value.length > 0) {
        this.localSelectedPage = value[0].pageUrl
      } else {
        this.localSelectedPage = ''
      }
    },
    selectedPage (value) {
      this.localSelectedPage = value
    },
    interval (value) {
      this.localInterval = value
    }
  },

  methods: {
    emitChange () {
      const { timeRange, localSelectedPage, localInterval } = this

      if ((timeRange[1] - timeRange[0]) / localInterval > 300) {
        this.$alert('This would cause long time query, please select time query again', 'Warning', {
          confirmButtonText: 'OK'
        })
        return
      }

      this.$emit('change', {
        timeStart: timeRange[0],
        timeEnd: timeRange[1],
        page: localSelectedPage,
        interval: localInterval
      })
    },
    handleTimeRangeChange () {
      this.emitChange()
    },
    handlePageChange () {
      this.emitChange()
    },
    handleIntervalChange (value) {
      this.localInterval = value
      this.emitChange()
    }
  }
}
</script>
