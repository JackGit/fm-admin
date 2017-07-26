<template>
  <div class="c-ajax">
    <el-row>
      <async-request-list :async-request-list="asyncRequestList" @select="handleSelect"></async-request-list>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-overall.css'
import AsyncRequestList from './List'
import { mapState } from 'vuex'

export default {
  components: {
    AsyncRequestList
  },

  computed: {
    ...mapState('asyncRequestListPage', {
      asyncRequestList: state => state.asyncRequestList
    })
  },

  methods: {
    handleSelect ({ objectId }) {
      this.$router.push({
        name: 'AsyncRequestDetails',
        params: {
          asyncRequestId: objectId
        }
      })
    }
  }
}
</script>
