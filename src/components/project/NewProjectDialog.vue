<template>
  <el-dialog title="New Project" :visible="displayNewProjectDialog" :show-close="false">
    <el-form :model="formData" :rules="rules" ref="form">
      <el-form-item label="Name" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="URL" prop="url">
        <el-input v-model="formData.url"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="desc">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeNewProjectDialog">Cancel</el-button>
      <el-button type="primary" @click="submit" >Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      formData: {
        name: '',
        url: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, message: 'Please input a name', trigger: 'blur' }],
        url: [{ required: true, message: 'Please input a URL', trigger: 'blur' }]
      }
    }
  },

  computed: {
    ...mapState('projectPage', {
      displayNewProjectDialog: state => state.displayNewProjectDialog
    })
  },

  methods: {
    ...mapActions('projectPage', [
      'closeNewProjectDialog',
      'createProject'
    ]),
    clearFormData () {
      this.formData.name = ''
      this.formData.url = ''
      this.formData.desc = ''
    },
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.createProject(this.formData)
        } else {
          return false
        }
      })
    }
  }
}
</script>
