<template>
  <div>
    <div v-for="project in projectList">
      {{project.name}} / {{project.url}}
    </div>
    <new-project-dialog></new-project-dialog>
  </div>
</template>

<script>
import NewProjectDialog from './NewProjectDialog'
import { mapState } from 'vuex'
export default {
  components: {
    NewProjectDialog
  },

  computed: {
    ...mapState({
      projectList: state => state.projectList
    })
  }
}
</script>
