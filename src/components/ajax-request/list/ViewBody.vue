<template>
  <div class="c-ajax">
    <el-row>
      <view-block :block="true" class="c-ajaxList">
        <div v-for="item in filteredList" class="c-ajaxListItem" @click="handleSelect(item)">
          <el-row>
            <el-col :span="22"><span class="c-url">{{item.url}}</span></el-col>
            <el-col :span="2"><el-tag type="primary" class="c-ajaxListItem__method">{{item.method}}</el-tag></el-col>
          </el-row>
        </div>
      </view-block>
    </el-row>
  </div>
</template>

<script>
import '@/assets/css/ajax-list.css'
import ViewBlock from '@/components/common/view/Block'
import { mapState } from 'vuex'

export default {
  components: {
    ViewBlock
  },

  computed: {
    ...mapState('ajaxRequestListPage', {
      ajaxRequestList: state => state.ajaxRequestList,
      filterString: state => state.filterString
    }),
    filteredList () {
      const { ajaxRequestList, filterString } = this
      if (filterString) {
        return ajaxRequestList.filter(item => item.url.includes(filterString))
      } else {
        return ajaxRequestList
      }
    }
  },

  methods: {
    handleSelect ({ url, method }) {
      this.$router.push({
        name: 'AjaxRequestDetails',
        query: {
          method,
          url
        }
      })
    }
  }
}
</script>
