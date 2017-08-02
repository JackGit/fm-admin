<template>
  <div class="c-toolbar">
    <el-date-picker v-model="localRange" type="datetimerange" placeholder="Select time range" @change="handleChange"></el-date-picker>
    <el-select v-if="pageList" v-model="localSelectedPage" placeholder="请选择页面" @change="handlePageChange">
      <el-option v-for="item in pageList"
        :key="item.pageUrl"
        :label="item.pageUrl"
        :value="item.pageUrl">
      </el-option>
    </el-select>
    <el-button type="primary" icon="search" @click="handleClickSearch">Search</el-button>
  </div>
</template>

<script>
import '@/assets/css/toolbar.css'

export default {
  props: {
    range: Array,
    pageList: Array,
    selectedPage: String
  },

  data () {
    return {
      localRange: Array.prototype.slice.call(this.range, 0),
      localSelectedPage: this.selectedPage
    }
  },

  watch: {
    range (value) {
      this.localRange = Array.prototype.slice.call(this.range, 0)
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
    }
  },

  methods: {
    emitChange () {
      this.$emit('change', {
        range: this.localRange,
        page: this.localSelectedPage
      })
    },
    handleChange () {
      this.emitChange()
    },
    handlePageChange (value) {
      this.emitChange()
    },
    handleClickSearch () {
      this.$emit('search')
    }
  }
}
</script>
