<template>
  <div id="rules">
    <p><span class="fontColor d_jump">Rules.</span></p>
    <ul
      class="flexh"
      @touchstart="getTouchstartX"
      @touchmove="touchmove"
      @touchend="touchmoveend"
    >
      <el-carousel indicator-position="outside" ref="carousels" pause-on-hover>
        <el-carousel-item v-for="item in 4" :key="item">
          <li class="flexw covers">
            <dl v-for="(item, index) in textOne" :key="index">
              <dt><img :src="item.img" alt="" /></dt>
              <dd>
                <p>{{ item.p }}</p>
                <div class="flexw">
                  <img :src="item.headImg" alt="" />
                  <div>
                    <span class="over">{{ item.span }}</span>
                    <div>
                      <span>{{ item.headText }}</span>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
          </li>
        </el-carousel-item>
      </el-carousel>

      <li class="flexw">
        <dl v-for="(item, index) in textTwo" :key="index">
          <dt>{{ item.dt }}</dt>
          <dd>
            <p v-for="(dd, index2) in item.dd" :key="index2">
              <span>·</span>{{ dd }}
            </p>
          </dd>
        </dl>
      </li>
    </ul>
    <div class="airdrops d_jump">
      <img src="../../assets/img/nftcool-onepage/Airdrop.png" alt="" />
      <ul class="flexw">
        <li>
          Copy and share your refer link, you and the invitee will be rewarded
          10 $Cool at the same time, each person can invite up to 50 people, and
          the reward can be up to 500 $Cool tokens.
        </li>
        <li>
          <p>Refer Link:</p>
          <div class="flexw" v-if="judge">
            <p>https://nft.cool/refer/4Uidj</p>
            <p class="flexc cursor" @click="copyAddress">Copy</p>
          </div>
          <div class="flexw cwTrue" v-if="!judge">
            <p>Connect Wallet to generate your refer link.</p>
            <p class="flexc cursor" @click="copyAddress">Connect Wallet</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="claims">
      <dl class="flexw">
        <dd>
          <span>5000</span>
          <span>$Cool</span>
          <p>Balance</p>
        </dd>
        <dd>
          <span>0</span>
          <p>Referred</p>
        </dd>
        <dd>
          <span>5000</span>
          <span>$Cool</span>
          <p>Rewards</p>
        </dd>
        <dt class="flexc pc cursor" @click="copyAddress">Claim</dt>
      </dl>
      <div class="flexc phone claimsDt cursor" @click="copyAddress">Claim</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance, ref } from 'vue'
// import { move } from '@/hooks/common'

import rulesImg1 from '@/assets/img/nftcool-onepage/rulesImg1.png'
import rulesImg2 from '@/assets/img/nftcool-onepage/rulesImg2.png'
import rulesHead1 from '@/assets/img/nftcool-onepage/rulesHead1.png'
import rulesHead2 from '@/assets/img/nftcool-onepage/rulesHead2.png'

import rulesImg1phone from '@/assets/img/nftcool-Mobile/rulesImg1.png'
import rulesImg2phone from '@/assets/img/nftcool-Mobile/rulesImg2.png'
const copyAddress = () => {
  console.log(111)
}
const judge = ref<any>()

const { proxy } = getCurrentInstance() as any
proxy.$req('main/D-rules.less')

//用作全局判断页面是否已经连接钱包
judge.value = proxy.$judge
console.log(proxy.$judge)

let startX: any
let direction: any
const getTouchstartX = (e: any) => {
  direction = ''
  startX = e.changedTouches[0].pageX //将手指对应的y轴坐标赋值给data中的startY
}

const touchmove = (e: any) => {
  const moveEndX = e.changedTouches[0].pageX
  const X = moveEndX - startX //如果值为正,则代表手指下滑,反则则为上滑,为0则表示点击
  if (X > 0) {
    direction = 'right'
  } else if (X < 0) {
    direction = 'left'
  }
}

const touchmoveend = () => {
  if (direction == 'left') {
    carousels.value.next()
  } else if (direction == 'right') {
    carousels.value.prev()
  }
}

let carousels = ref<any>()

const textOne = reactive([
  {
    img: rulesImg1,
    p: 'Black Widow',
    headImg: rulesHead1,
    span: 'First INO of The Wasted Lands launched on Infinite Launch.',
    headText: 'Artist  @aqtip'
  },
  {
    img: rulesImg2,
    p: 'Private Matters',
    headImg: rulesHead2,
    span: 'Infinite Launch x Renowned Artists around the world.',
    headText: 'Artist  @iamafreedom'
  }
])
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  textOne[0].img = rulesImg1phone
  textOne[1].img = rulesImg2phone
}

const textTwo = reactive([
  {
    dt: 'Airdrop',
    dd: [
      'Airdrop supply: 10,000,000 $Cool',
      'Submit your ETH wallet address to participate in airdrop.',
      'Copy and share your referral link with your friends, you will be rewarded 10 $Cool tokens for per each referral.',
      'You need to refer 4 friends at least. You can refer up to 50 friends, and get up to 500 $Cool tokens.',
      'Please do real referral. If our system discovered unwanted activities known as cheating, the reward will be removed during distribution.'
    ]
  },
  {
    dt: 'Private-Sale',
    dd: [
      'Pre-sale supply: 40,000,000 $Cool',
      'Pre-sale price is 1 ETH = 50,000 $Cool. The minimum purchase is 0.05 ETH, ',
      'Send ETH from your wallet to the pre-sale address. Our system will send $Cool tokens to your wallet immediately. ',
      'The distribution of $Cool will be based on ETH time arrived. Frist come, first served.',
      'After the pre-sale is completed, $Cool will be listed on Uniswap, Upbit, Coinbase and Binance exchanges. The listing price of $Cool is $10.'
    ]
  }
])
</script>

<style scoped></style>
