<template>
  <view-block title="List" :block="true" class="c-ajaxList">
    <div v-for="item in list" :class="{'c-ajaxListItem': true, 'is-selected': item.selected}">
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

  data () {
    return {
      list: [{
        method: 'GET',
        url: 'http://blog.jackyang.me/post'
      }, {
        method: 'POST',
        url: 'http://blog.jackyang.me/post/info/123123123123123//12312312312312/23423424',
        selected: true
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/static'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/user'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/passport'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/post'
      }, {
        method: 'POST',
        url: 'http://blog.jackyang.me/post/info/123123123123123//12312312312312/23423424'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/static'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/user'
      }, {
        method: 'GET',
        url: 'http://blog.jackyang.me/passport'
      }]
    }
  }
}
</script>
