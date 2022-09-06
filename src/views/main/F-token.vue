<template>
  <div id="token">
    <div class="title flexw">
      <p><span class="fontColor d_jump">Token</span></p>
      <ul>
        <li class="over">
          $Cool is our main utility token that allows you to buy and sell ASSETS
          in the NFT.Cool
        </li>
        <li class="over">
          Marketplace.There are a total of 100,000,000 $Cool tokens.
        </li>
      </ul>
    </div>
    <div class="tokenText flexw">
      <div>
        <ul class="flexh">
          <li class="flexw">
            <div>
              <h3>$Cool</h3>
              <h6>Token name</h6>
            </div>
            <div>
              <h3>$10</h3>
              <h6>Listing price</h6>
            </div>
          </li>
          <li>
            <p>· Blockchain: Ethereum ERC20</p>
            <p>· Token Symbol: Cool</p>
            <p>· Decimals: 18</p>
            <p>· Contract Address:</p>
          </li>
          <li class="flexw">
            <p class="over">0xC9fDf7844185C81e14b01D4cfB871A2C2d717318</p>
            <p class="flexc cursor">Copy</p>
          </li>
        </ul>
      </div>
      <div>
        <ul class="flexh">
          <li>Tokenomics</li>
          <li class="flexw">
            <div v-for="(item, index) in textOne" :key="index">
              <span class="fontColor">{{ item.span1 }}</span>
              <span>{{ item.span2 }}</span>
              <p>{{ item.p }}</p>
            </div>
          </li>
          <li>
            <p>
              Foundation: We don't server any foundation,all tokens are users.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/F-token.less')

const textOne = reactive([
  {
    span1: '10,000,000',
    span2: '10%',
    p: 'Airdrop'
  },
  {
    span1: '5,000,000',
    span2: '40%',
    p: 'Project Partners'
  },
  {
    span1: '40,000,000',
    span2: '5%',
    p: 'Pre-sale'
  },
  {
    span1: '20,000,000',
    span2: '20%',
    p: 'Team'
  }
])
</script>

<style scoped></style>
