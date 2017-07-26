<template>
  <div class="c-page">
    <el-tabs class="c-page__tabs">
      <el-tab-pane label="访问" name="visit">
        <visit-tab></visit-tab>
      </el-tab-pane>
      <el-tab-pane label="Navigation" name="navigation">
        <navigation-tab></navigation-tab>
      </el-tab-pane>
      <el-tab-pane label="Resources" name="resources">
        <resources-tab></resources-tab>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import '@/assets/css/page.css'
import VisitTab from './visit/Tab'
import NavigationTab from './navigation/Tab'
import ResourcesTab from './resources/Tab'
// import { groupByTimeInterval } from '@/utils/group'

export default {
  components: {
    VisitTab,
    NavigationTab,
    ResourcesTab
  },

  props: {
    pageViewList: Array
  }
}
</script>
