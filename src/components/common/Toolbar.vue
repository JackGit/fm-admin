<template>
  <div class="c-toolbar">
    <el-date-picker v-model="localRange" type="datetimerange" placeholder="Select time range" @change="handleChange"></el-date-picker>
    <el-select v-model="selectedPage" placeholder="请选择页面">
      <el-option v-for="item in pages"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" icon="search" @click="handleClickSearch">Search</el-button>
  </div>
</template>

<script>
import '@/assets/css/toolbar.css'

export default {
  props: {
    range: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      localRange: Array.prototype.slice.call(this.range, 0),
      selectedPage: 'all',
      pages: [{
        value: 'all',
        label: '所有页面'
      }, {
        value: '1',
        label: 'page1'
      }, {
        value: '2',
        label: 'page2'
      }]
    }
  },

  watch: {
    range (value) {
      this.localRange = Array.prototype.slice.call(this.range, 0)
    }
  },

  methods: {
    handleChange () {
      this.$emit('change', {
        range: this.localRange
      })
    },
    handleClickSearch () {
      this.$emit('search')
    }
  }
}
</script>
