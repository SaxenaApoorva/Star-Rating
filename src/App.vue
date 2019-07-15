<template>
  <div class="main">
    <ImagePanel/>
  </div>
</template>

<script>
import ImagePanel from '@/components/ImagePanel.vue'

export default {
  name: 'App',
  components: {
    ImagePanel
  }
}
</script>

<style lang="scss">
  @import './assets/stylesheet/common.css';

.main {
    -webkit-box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
    -moz-box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
    box-shadow: -1px -2px 14px 0px rgba(155, 155, 155, 1);
}
</style>
