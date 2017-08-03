<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Projects</h1>
    <toolbar slot="toolbar">
      <el-button type="primary" icon="plus" @click="openNewProjectDialog">New Project</el-button>
    </toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/project/ViewBody'
import { mapActions } from 'vuex'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  },

  destroyed () {
    this.clearData()
  },

  methods: {
    ...mapActions('projectPage', [
      'openNewProjectDialog',
      'clearData'
    ])
  }
}
</script>
