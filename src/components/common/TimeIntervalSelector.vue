<template>
  <el-select v-model="localInterval" placeholder="请选择时间间隔" :size="size" @change="handleChange">
    <el-option v-for="item in intervalOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import { DAY, HOUR, HALF_HOUR, QUARTER, MINUTE } from '@/constants/time'

export default {
  props: {
    interval: Number,
    size: String
  },

  data () {
    return {
      localInterval: this.interval,
      intervalOptions: [{
        value: DAY,
        label: '1天'
      }, {
        value: HOUR,
        label: '1小时'
      }, {
        value: HALF_HOUR,
        label: '0.5小时'
      }, {
        value: QUARTER,
        label: '15分钟'
      }, {
        value: MINUTE * 5,
        label: '5分钟'
      }]
    }
  },

  watch: {
    interval (value) {
      this.localInterval = value
    }
  },

  methods: {
    handleChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>
