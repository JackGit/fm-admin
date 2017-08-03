<template>
  <div>
    <el-row v-if="selectedProject">
      <view-form :form-data="formData"></view-form>
      <el-button type="danger" icon="circle-cross" @click="handleDelete">Delete Project</el-button>
    </el-row>

    <new-project-dialog></new-project-dialog>
  </div>
</template>

<script>
import NewProjectDialog from './NewProjectDialog'
import ViewForm from '@/components/common/view/Form'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    NewProjectDialog,
    ViewForm
  },

  computed: {
    ...mapState({
      projectList: state => state.projectList
    }),
    ...mapState('projectPage', {
      selectedProjectId: state => state.selectedProjectId
    }),
    selectedProject () {
      return this.projectList.filter(project => project._id === this.selectedProjectId)[0]
    },
    formData () {
      const { _id, name, url, desc } = this.selectedProject || {}
      return [{
        label: 'Key',
        value: _id
      }, {
        label: 'Name',
        value: name
      }, {
        label: 'URL',
        value: url,
        type: 'URL'
      }, {
        label: 'Description',
        value: desc
      }]
    }
  },

  methods: {
    ...mapActions('projectPage', [
      'deleteProject'
    ]),
    handleDelete () {
      this.$confirm('Are you sure to delete this project?', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(_ => {
        this.deleteProject()
      }).catch(_ => ({}))
    }
  }
}
</script>
