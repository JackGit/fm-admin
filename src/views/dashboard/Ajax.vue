<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">AJAX</h1>
    <toolbar slot="toolbar"></toolbar>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import Toolbar from '@/components/common/Toolbar'
import ViewBody from '@/components/ajax/ViewBody'

export default {
  components: {
    ViewPage,
    Toolbar,
    ViewBody
  }
}
</script>
