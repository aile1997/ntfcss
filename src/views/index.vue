<template>
  <div id="index">
    <Top />
    <TimeLeft />
    <div class="contents">
      <Dyn />
      <Rules />
      <Psil />
      <Token />
      <Roadmap />
    </div>
    <Faq />
    <Bottom />
    <!-- <img class="covers1" src="../assets/img/nftcool-onepage/thumb.png" alt="" />
    <img class="covers2" src="../assets/img/nftcool-onepage/thumb.png" alt="" />
    <img class="covers3" src="../assets/img/nftcool-onepage/thumb.png" alt="" />
    <img class="covers4" src="../assets/img/nftcool-onepage/thumb.png" alt="" /> -->
  </div>
</template>

<script lang="ts" setup>
import Top from './main/A-top.vue'
import TimeLeft from './main/B-timeLeft.vue'
import Dyn from './main/C-dyn.vue'
import Rules from './main/D-rules.vue'
import Psil from './main/E-psil.vue'
import Token from './main/F-token.vue'
import Roadmap from './main/G-roadmap.vue'
import Faq from './main/H-faq.vue'
import Bottom from './main/I-bottom.vue'

import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('index.less')
</script>

<style scoped></style>
