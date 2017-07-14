<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception</h1>
    <toolbar slot="toolbar"></toolbar>
    <exception-view-body slot="body"></exception-view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ExceptionViewBody from '@/components/exception/ViewBody'

export default {
  components: {
    ViewPage,
    Toolbar,
    ExceptionViewBody
  }
}
</script>
