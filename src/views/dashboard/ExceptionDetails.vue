<template>
  <view-page>
    <h1 class="l-nomargin" slot="header">Exception Details</h1>
    <view-body slot="body"></view-body>
  </view-page>
</template>

<script>
import ViewPage from '@/components/common/view/Page'
import ViewBody from '@/components/exception/details/ViewBody'

export default {
  components: {
    ViewPage,
    ViewBody
  }
}
</script>
