<template>
  <view-block title="list" class="c-exceptionListBlock" :block="true" :card-body="true">
    <p v-if="exceptions.length === 0">No exceptions recently, great job!</p>
    <div v-else class="c-exceptionList">
      <div class="c-exceptionListItem" v-for="exception in exceptions">
        <i class="el-icon-warning c-exceptionListItem__icon" style="color: red"></i>
        <div>
          <span class="c-exceptionListItem__type">{{exception.type}}</span>
          <span class="c-exceptionListItem__url">{{exception.url}}</span>
        </div>
        <div>
          <span class="c-exceptionListItem__filename">{{exception.filename}}</span>
          <span class="c-exceptionListItem__desc">{{exception.desc}}</span>
        </div>
        <div class="c-exceptionListItem__time">{{exception.createdAt}}</div>
      </div>
    </div>
    <el-pagination class="c-exceptionList__pagination" layout="prev, pager, next" :total="total"></el-pagination>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'

export default {
  components: {
    ViewBlock
  },

  props: {
    exceptions: {
      type: Array,
      default: () => [{
        type: 'Syntax Error',
        url: 'http://blog.jackyang.me/blog/123123',
        filename: 'jquery-2.1.js in onload()',
        desc: 'unexpected token }',
        createdAt: '5 min ago'
      }, {
        type: 'Reference Error',
        url: 'http://blog.jackyang.me/login',
        filename: 'login.js in register()',
        desc: 'User is not defined',
        createdAt: '15 min ago'
      }, {
        type: 'Promise Error',
        url: 'http://blog.jackyang.me/fetch',
        filename: 'jquery-2.1.js in getBlogData()',
        desc: 'Unknown error',
        createdAt: '25 min ago'
      }]
    },
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    }
  }
}
</script>
