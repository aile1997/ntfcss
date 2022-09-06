<template>
  <div id="top">
    <div class="tops">
      <dl class="flexw">
        <dt class="d_jump">
          <img
            src="@/assets/img/nftcool-Mobile/title.png"
            alt=""
            class="cursor"
            @click="jump(0)"
          />
        </dt>
        <dd class="flexc pc">
          <p>Search digital art</p>
          <img src="../../assets/img/menu/Web1x/search.png" alt="" />
        </dd>
        <dd class="pc">
          <ul class="flexw">
            <li><a href="#" @click="jump(0)">Home</a></li>
            <li><a href="#" @click="jump(2)">Rules</a></li>
            <li><a href="#" @click="jump(4)">Token</a></li>
            <li><a href="#" @click="jump(6)">FAQ</a></li>
            <li><a href="#" @click="jump(5)">Roadmap</a></li>
          </ul>
        </dd>
        <dd class="flexc cursor over pc">Connect Wallet</dd>
        <div class="phoneTop cursor" @click="pop">
          <dd class="phone"></dd>
          <dd class="phone"></dd>
        </div>
      </dl>
    </div>
    <div class="content">
      <ul class="flexh">
        <li>NFT.Cool:</li>
        <li>Next gen decentralized NFT</li>
        <li>marketplace</li>
        <li>
          NFT.Cool is the community-first NFT marketplace with rewards for
          participating.
        </li>
        <li>Buy NFTs (or sell 'em) to earn rewards.</li>
        <li class="flexc cursor over" @click="Connect">More Info</li>
        <li>{{ account.name }}</li>
        <li>{{ accountRef }}</li>
        <!-- <el-button plain @click="open1"> Success </el-button>
        <el-button plain @click="open2"> Warning </el-button>
        <el-button plain @click="open3"> Info </el-button>
        <el-button plain @click="open4"> Error </el-button> -->
      </ul>
    </div>
    <video id="video" ref="viedoRef">
      <source src="/video/backVideo.mp4" type="video/mp4" />
    </video>
    <div id="container" class="container" ref="container">
      <span id="loading" class="loading" data-percent="0"></span>
    </div>
  </div>
  <PopUp ref="PopUpRef" @clicks="clicks" />
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue'
import PopUp from '@/components/popUp.vue'

// import { accountLoginRequest, requestUserInfoById } from '@/service/axios_demo'

import { useNotification, jumps } from '@/hooks/A-top'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/A-top.less')

// const [open1, open2, open3, open4] = useNotification()
const jump = jumps()
let flage = true
let PopUpRef = ref<any>()

const pop = () => {
  if (flage) {
    PopUpRef.value.PopUpRef.style.left = '0'
    flage = false
  } else {
    PopUpRef.value.PopUpRef.style.left = '-7.9rem'
    flage = true
  }
}
let clicks = (bool: any): void => {
  flage = bool
}
let account = reactive<any>({})
let accountRef = ref<any>()

// const loginResult = await requestUserInfoById()
const Connect = () => {
  jump(1)
  // account.name = loginResult.result[0].name
  // accountRef.value = loginResult.result[0].amount
}

const viedoRef = ref<HTMLVideoElement>()
const container = ref<any>()

onMounted(() => {
  let video: any = viedoRef.value
  if (video) {
    video.muted = 'false'
    video.loop = 'true'
    video.playsinline = 'true'
  }
  video?.play() //播放控制

  /////////////////////////////////////////////////////////////////
  let urlRoot = '/videoImg/nft_'
  let indexRange = [1, 300]
  let maxLength = indexRange[1] - indexRange[0] + 2

  // 存储预加载的DOM对象和长度信息
  let store: any = {
    length: 0
  }
  container.value.style.display = 'none'
  if (
    !navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    PopUpRef.value.PopUpRef.style.display = 'none'
  } else {
    video.style.display = 'none'
    container.value.style.display = 'block'
    // 图片序列预加载
    for (let start = indexRange[0]; start <= indexRange[1]; start++) {
      ;(function (index) {
        let img = new Image()

        img.onload = function () {
          store.length++
          // 存储预加载的图片对象

          store[index] = this

          play()
        }
        img.onerror = function () {
          store.length++
          play()
        }
        img.src = urlRoot + index + '.jpg'
        img.style.width = '100vw'
        // img.style.height = '100vh'
      })(start)
    }
  }

  let play = function () {
    // loading
    let eleContainer: any = document.getElementById('container')
    // loading进度
    let percent = Math.round((100 * store.length) / maxLength)
    // 全部加载完毕，无论成功还是失败
    if (percent == 100) {
      let index = indexRange[0]
      eleContainer.innerHTML = ''
      // 依次append图片对象
      let step = function () {
        if (store[index - 1]) {
          eleContainer.removeChild(store[index - 1])
        }
        eleContainer.appendChild(store[index])
        // 序列增加
        index++
        // 如果超过最大限制
        if (index <= indexRange[1]) {
          setTimeout(step, 42)
        } else {
          // 本段播放结束回调
          // 我这里就放一个重新播放的按钮
          play()
        }
      }
      // 等100%动画结束后执行播放
      setTimeout(step, 100)
    }
  }
})
</script>

<style scoped lang="less">
#container {
  // position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  margin: auto;
  background-color: #101015;
  position: absolute;
  img {
    position: absolute !important;
    width: 10rem !important;
    height: 100% !important;
  }
}
</style>
