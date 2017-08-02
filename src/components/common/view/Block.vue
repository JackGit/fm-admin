<template>
  <div :class="!block ? 'c-viewBlock' : 'c-viewBlock--block'">
    <h4 v-if="title" class="c-viewBlock__title">
      {{title}}
      <slot name="tool"></slot>
    </h4>
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
