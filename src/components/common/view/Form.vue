<template>
  <div class="c-viewForm">
    <h4 v-if="title" class="c-viewForm__title">{{title}}</h4>
    <el-form :label-position="labelPosition" :label-width="labelWidth">
      <el-form-item v-for="item in formData" :label="item.label" :key="item.label">
        <div v-if="item.type === 'URL'" class="c-viewForm__value c-url">{{item.value || 'N/A'}}</div>
        <div v-else-if="item.type === 'LIST'" class="c-viewForm__value">
          <p v-for="v in item.value" class="v-viewFormValue__listItem">{{v}}</p>
        </div>
        <div v-else class="c-viewForm__value">{{item.value || 'N/A'}}</div>
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
