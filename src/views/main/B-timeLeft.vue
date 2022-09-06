<template>
  <div id="timeLeft">
    <p>
      <span class="fontColor">Time left</span>
    </p>
    <dl class="flexw">
      <dd>
        <h3>{{ time[0] }}</h3>
        <h6>Days</h6>
      </dd>
      <dd>
        <h3>{{ time[1] }}</h3>
        <h6>Hours</h6>
      </dd>
      <dd>
        <h3>{{ time[2] }}</h3>
        <h6>Minutes</h6>
      </dd>
      <dd>
        <h3>{{ time[3] }}</h3>
        <h6>Secs</h6>
      </dd>
      <dt class="flexc pc cursor"><p @click="jump(3)">Airdrop</p></dt>
    </dl>
    <div class="flexc phone airdrop cursor">
      <p @click="jump(3)">Airdrop</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref, onBeforeUnmount } from 'vue'
import { showtime } from '@/hooks/B-timeLeft'
import { jumps } from '@/hooks/A-top'
const jump = jumps()
let time = ref<Array<any>>(['00', '00', '00', '00'])
let setIntIndex: any = []
setIntIndex[0] = setInterval(() => {
  time.value = showtime('2022/4/15 00:00:00')
}, 1000)

onBeforeUnmount(() => {
  for (let index = 0; index < setIntIndex.length; index++) {
    clearInterval(setIntIndex[index])
  }
})

const { proxy } = getCurrentInstance() as any
proxy.$req('main/B-timeLeft.less')
</script>

<style scoped></style>
