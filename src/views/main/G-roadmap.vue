<template>
  <div id="roadmap">
    <p><span class="fontColor d_jump">Roadmap</span></p>
    <ul v-for="(item, index) in textOne" :key="index">
      <li v-for="(itemA, indexA) in item" :key="indexA" class="flexw">
        <div class="triangle" v-if="indexA != 0"></div>
        <p
          :class="{
            h3: indexA == 0,
            h6: indexA != 0
          }"
        >
          {{ itemA }}
        </p>
      </li>
    </ul>
    <div class="d_jump"></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/G-roadmap.less')

const textOne = reactive([
  [
    'Q1 2022',
    'Airdrop & Pre-sale',
    'Listing on Uniswap, Upbit, Coinbase and Binance',
    'Globalization and Targeting of Communities and Brands',
    'LAND Pre-sale'
  ],
  [
    'Q2 2022',
    'Metaverse v1.0: A Traversable World',
    'Release of A Traversable World with Core 3D DApps',
    'Space Virtual Machine SDK and API Closed Beta Testing'
  ],
  [
    'Q3 2022',
    'Metaverse v2.0: A Programmable World',
    'Object and Scene Editor & Low-Code Creation Tool Release',
    'Partnership and Collaboration with Builder Organizations'
  ],
  [
    'Q4 2022',
    'Metaverse v3.0: A Infinite world',
    'Programmable NFT Support',
    'Global Creator Grant Event',
    'Roadmap Update'
  ]
])
</script>

<style scoped></style>
