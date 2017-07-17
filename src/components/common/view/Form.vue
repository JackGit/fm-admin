<template>
  <div class="c-viewForm">
    <h4 v-if="title" class="c-viewForm__title">{{title}}</h4>
    <el-form :label-position="labelPosition" :label-width="labelWidth">
      <el-form-item v-for="item in formData" :label="item.label" :key="item.label">
        <div :class="{'c-viewForm__value': true, 'c-url': item.type === 'URL'}">{{item.value}}</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    formData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
