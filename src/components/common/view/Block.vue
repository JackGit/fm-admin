<template>
  <div :class="!block ? 'c-viewBlock' : 'c-viewBlock--block'">
    <h4 class="c-viewBlock__title">{{title}}</h4>
    <el-card v-if="cardBody" class="c-viewBlock__body">
      <slot></slot>
    </el-card>
    <div v-else class="c-viewBlock__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    cardBody: false,
    block: false
  }
}
</script>
