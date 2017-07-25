<template>
  <div class="c-ajax">
    <el-row>
      <ajax-list :ajax-list="ajaxList" @select="handleSelect"></ajax-list>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-overall.css'
import AjaxList from './List'

export default {
  components: {
    AjaxList
  },

  props: {
    ajaxList: Array,
    timeStart: Date,
    timeEnd: Date
  },

  methods: {
    handleSelect ({ objectId }) {
      this.$router.push({
        name: 'AjaxDetails',
        params: {
          ajaxId: objectId
        },
        query: {
          timeStart: this.timeStart.getTime(),
          timeEnd: this.timeEnd.getTime()
        }
      })
    }
  }
}
</script>
