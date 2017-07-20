<template>
  <div class="c-toolbar">
    <el-date-picker v-model="localRange" type="datetimerange" placeholder="Select time range" @change="handleChange">
    </el-date-picker>
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
      localRange: Array.prototype.slice.call(this.range, 0)
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
