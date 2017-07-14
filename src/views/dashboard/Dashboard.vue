<template>
  <div class="c-dashboard">
    <el-row>
      <el-col :span="3">
        <side-bar></side-bar>
      </el-col>
      <el-col :span="21" class="c-dashboard__viewContainer">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/dashboard.css'
import SideBar from '@/components/dashboard/SideBar'

export default {
  components: {
    SideBar
  }
}
</script>
