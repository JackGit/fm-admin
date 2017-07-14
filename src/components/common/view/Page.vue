<template>
  <div class="c-view">
    <header>
      <div class="c-view__header">
        <slot name="header"></slot>
      </div>
      <div class="c-view__toolbar" v-if="$slots.toolbar">
        <slot name="toolbar"></slot>
      </div>
    </header>
    <main class="c-view__body">
      <slot name="body"></slot>
    </main>
  </div>
</template>

<script>
import '@/assets/css/view.css'

export default {}
</script>
