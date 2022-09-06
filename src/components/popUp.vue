<template>
  <div id="popUp" ref="PopUpRef">
    <div class="search">
      <p>Search digital art</p>
      <img src="@/assets/img/menu/Web1x/search.png" alt="" />
    </div>
    <ul>
      <li @click="jumpFun(0)">Home</li>
      <li @click="jumpFun(2)">Rules</li>
      <li @click="jumpFun(4)">Token</li>
      <li @click="jumpFun(6)">FAQ</li>
      <li @click="jumpFun(5)">Roadmap</li>
    </ul>
    <div class="coon flexc">
      <p>Connect Wallet</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose, defineEmits } from 'vue'
import { jumps } from '@/hooks/A-top'
const jump = jumps()
let PopUpRef = ref<any>()
const emit = defineEmits<{
  (e: 'clicks', bool: string): void
}>()

const jumpFun = (index: number) => {
  PopUpRef.value.style.left = '-7.9rem'
  jump(index)
  emit('clicks', 'true')
}

defineExpose({
  PopUpRef
})
</script>

<style scoped lang="less">
#popUp {
  // display: none;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0c0c11;
  padding: 0.35rem;
  z-index: 80;
  left: -7.9rem;
  transition: all 0.3s ease;
  .search {
    position: relative;
    left: 0;
    width: 100%;
    height: 1rem;
    opacity: 0.4;
    background: #1c1c24;
    border: 0.01rem solid rgba(213, 213, 213, 0.5);
    border-radius: 0.5rem;
    top: 1rem;
    p {
      position: absolute;
      left: 1rem;
      font-size: 0.24rem;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      width: 0.26rem;
      height: 0.26rem;
      position: absolute;
      left: 0.25rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  ul {
    position: absolute;
    top: 3rem;
    font-size: 0.35rem;
    li {
      margin-top: 0.2rem;
    }
  }
  .coon {
    width: 7.1rem;
    height: 1rem;
    opacity: 0.5;
    background: #212134;
    border-radius: 0.5rem;
    position: absolute;
    top: 8rem;
  }
}
</style>
