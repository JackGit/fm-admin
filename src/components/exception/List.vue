<template>
  <view-block title="list" class="c-exceptionList" :block="true" :card-body="true">
    <div>this is list</div>
    <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'

export default {
  components: {
    ViewBlock
  }
}
</script>
