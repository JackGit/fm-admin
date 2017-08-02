<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Resource Request</h1>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/resource-request/list/ViewBody'

export default {
  components: {
    ViewPage,
    ViewBody
  }
}
</script>
