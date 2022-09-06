<template>
  <div>Main</div>
</template>

<script lang="ts" setup>
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  //移动端CSS
  require('../../assets/less/phone/main.less')
} else {
  //PC端CSS
  require('../../assets/less/pc/main.less')
}
</script>

<style scoped></style>
