<template>
  <view-block title="list" class="c-exceptionListBlock" :block="true" :card-body="true">
    <p v-if="exceptions.length === 0">No exceptions recently, great job!</p>
    <div v-else class="c-exceptionList">
      <div class="c-exceptionListItem" v-for="exception in exceptions" @click="handleClick(exception)">
        <i class="el-icon-warning c-exceptionListItem__icon" style="color: red"></i>
        <div>
          <span class="c-exceptionListItem__type">{{exception.type}}</span>
          <span class="c-exceptionListItem__url c-url">{{exception.pageUrl}}</span>
        </div>
        <div>
          <span class="c-exceptionListItem__filename">{{exception.stack | rootFileName}}</span>
          <span class="c-exceptionListItem__desc">{{exception.message}}</span>
        </div>
        <div class="c-exceptionListItem__time">{{exception.createdAt | ago}}</div>
      </div>
    </div>
  </view-block>
</template>

<script>
import ViewBlock from '@/components/common/view/Block'
import { ago } from '@/utils/filters'

export default {
  components: {
    ViewBlock
  },

  props: {
    exceptions: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    handleClick ({ _id }) {
      this.$router.push({
        name: 'ExceptionDetails',
        params: {
          exceptionId: _id
        }
      })
    }
  },

  filters: {
    ago,
    rootFileName (stack) {
      if (stack.length === 0) {
        return ''
      } else {
        return stack[stack.length - 1].url
      }
    }
  }
}
</script>
