<template>
  <div id="dyn">
    <p>
      <span class="fontColor d_jump">Did you</span>
    </p>
    <p><span class="fontColor">know?</span></p>
    <ul class="flexw">
      <li>The Problem</li>
      <li>
        At the end of 2021, we saw challengers as OpenDAO and LooksRare emerged.
        Among them, LooksRare made a perfect start in challenging OpenSea's
        monopoly by a working marketplace. With the trade mining invented by
        centralized exchanges like Fcoin back in 2018, it attracted many OpenSea
        users to at least try out a new marketplace.
      </li>
    </ul>
    <dl>
      <dt>The Marketplace</dt>
      <dd class="flexw">
        <p>
          Will be a full-featured NFT market at its launch. The marketplace's
          smart contract, frontend, and backend are all 100% independently
          developed.
        </p>
        <div>
          <p>· Instant push notifications for buys & sells</p>
          <p>· Integrated rarity ranking and analysis</p>
          <p>· Bulk sending & listing</p>
          <p>· Bidding on a collection or traits</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/C-dyn.less')
</script>

<style scoped></style>
