<template>
  <el-menu class="c-dashboard__sideBar" theme="dark" router :default-active="$route.path">
    <div style="height:73px;display:flex;align-items:center;justify-content:center;background:#1F2D3D">
      <el-dropdown style="width:80%" @command="selectProject">
        <el-button style="width:100%" type="info">
          {{currentProject ? currentProject.name : 'Projects'}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="project in projectList" :key="project._id" :command="project._id">{{project.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-menu-item index="/dashboard/projects"><i class="iconfont icon-project"></i>Projects</el-menu-item>
    <el-menu-item index="/dashboard/site-view"><i class="iconfont icon-website-new"></i>Site View</el-menu-item>
    <el-menu-item index="/dashboard/page-view"><i class="iconfont icon-page"></i>Page View</el-menu-item>
    <el-menu-item index="/dashboard/resource-request"><i class="iconfont icon-resource"></i>Resource Request</el-menu-item>
    <el-menu-item index="/dashboard/ajax-request"><i class="iconfont icon-Requestforquotation"></i>Ajax Request</el-menu-item>
    <el-menu-item index="/dashboard/exceptions"><i class="iconfont icon-error"></i>Exceptions</el-menu-item>
  </el-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      projectList: state => state.projectList,
      currentProject: state => state.currentProject
    })
  },

  methods: {
    ...mapActions([
      'selectProject'
    ])
  }
}
</script>
