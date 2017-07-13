<template>
  <div class="c-viewBlock">
    <h4 class="c-viewBlock__title">{{title}}</h4>
    <slot class="c-viewBlock__body"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: ''
  }
}
</script>
