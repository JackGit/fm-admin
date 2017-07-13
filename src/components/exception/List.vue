<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">New This Week</span>
      <el-button style="float: right;">Operation button</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'List item ' + o }}
    </div>
  </el-card>
</template>

<script>
export default {}
</script>
