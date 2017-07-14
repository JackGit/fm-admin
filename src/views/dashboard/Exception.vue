<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception</h1>
    <toolbar slot="toolbar"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/exception/overall/ViewBody'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  }
}
</script>
