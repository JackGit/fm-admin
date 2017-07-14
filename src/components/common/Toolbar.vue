<template>
  <div class="c-toolbar">
    <el-date-picker
      v-model="range"
      type="datetimerange"
      placeholder="Select time range">
    </el-date-picker>

    <el-button type="primary" icon="search">Search</el-button>
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
  }
}
</script>
