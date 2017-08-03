<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Projects</h1>
    <toolbar slot="toolbar">
      <el-select v-model="selectedProjectId" placeholder="请选择Project">
        <el-option v-for="project in projectList"
          :key="project._id"
          :label="project.name"
          :value="project._id">
        </el-option>
      </el-select>
      <el-button type="primary" icon="plus" @click="openNewProjectDialog" class="l-right">New Project</el-button>
    </toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/project/ViewBody'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  destroyed () {
    this.clearData()
  },

  computed: {
    ...mapState({
      projectList: state => state.projectList
    }),
    selectedProjectId: {
      get () {
        return this.$store.state.projectPage.selectedProjectId
      },
      set (value) {
        this.selectProject(value)
      }
    }
  },

  methods: {
    ...mapActions('projectPage', [
      'openNewProjectDialog',
      'selectProject',
      'clearData'
    ])
  }
}
</script>
