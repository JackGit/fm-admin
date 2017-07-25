<template>
  <view-block title="List" :block="true" class="c-ajaxList">
    <div v-for="item in ajaxList" class="c-ajaxListItem" @click="handleClick(item)">
      <el-row>
        <el-col :span="22"><span class="c-url">{{item.url}}</span></el-col>
        <el-col :span="2"><el-tag type="primary" class="c-ajaxListItem__method">{{item.method}}</el-tag></el-col>
      </el-row>
    </div>
    <el-pagination class="c-ajaxList__pagination" layout="prev, pager, next" :total="100"></el-pagination>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'

export default {
  components: {
    ViewBlock
  },

  props: {
    ajaxList: Array
  },

  methods: {
    handleClick (ajaxItem) {
      this.$emit('select', ajaxItem)
    }
  }
}
</script>
