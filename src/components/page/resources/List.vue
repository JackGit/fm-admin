<template>
  <view-block title="List" :block="true" class="c-resourceList">
    <div v-for="item in list" :class="{'c-resourceListItem': true, 'is-selected': item.selected}">
      <h4 class="c-resourceListItem__name">{{item.name}} <span class="c-resourceListItem__size">{{item.size}}kb</span></h4>
      <p class="c-resourceListItem__url c-url">{{item.url}}</p>
    </div>
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
        name: 'jquery.js',
        url: 'https://cdn.com/jquery.min.js',
        size: '34' // js, css, media
      }, {
        name: 'fetch.js',
        url: 'http://blog.jackyang.me/post/info/123123123123123//12312312312312/23423424',
        selected: true
      }, {
        name: 'style.css',
        url: 'http://blog.jackyang.me/static'
      }, {
        name: 'func.css',
        url: 'http://blog.jackyang.me/user'
      }, {
        name: 'a.js',
        url: 'http://blog.jackyang.me/passport'
      }, {
        name: 'main.js',
        url: 'http://blog.jackyang.me/post'
      }, {
        name: 'vue.js',
        url: 'http://blog.jackyang.me/post/info/123123123123123//12312312312312/23423424'
      }, {
        name: 'babel.js',
        url: 'http://blog.jackyang.me/static'
      }, {
        name: 'polyfill.js',
        url: 'http://blog.jackyang.me/user'
      }, {
        name: 'react.js',
        url: 'http://blog.jackyang.me/passport'
      }]
    }
  }
}
</script>
