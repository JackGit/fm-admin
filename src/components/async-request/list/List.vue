<template>
  <view-block title="List" :block="true" class="c-ajaxList">
    <div v-for="item in asyncRequestList" class="c-ajaxListItem" @click="handleClick(item)">
      <el-row>
        <el-col :span="22"><span class="c-url">{{item.url}}</span></el-col>
        <el-col :span="2"><el-tag type="primary" class="c-ajaxListItem__method">{{item.method}}</el-tag></el-col>
      </el-row>
    </div>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'

export default {
  components: {
    ViewBlock
  },

  props: {
    asyncRequestList: Array
  },

  methods: {
    handleClick (item) {
      this.$emit('select', item)
    }
  }
}
</script>
