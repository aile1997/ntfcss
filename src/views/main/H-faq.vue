<template>
  <div id="faq">
    <p><span class="fontColor">FAQ</span></p>
    <ul class="flexw text" ref="faqDl">
      <el-carousel
        type="card"
        indicator-position="outside"
        :autoplay="false"
        arrow="always"
        @change="carouselChange"
        @touchstart="getTouchstartX"
        @touchmove="touchmove"
        @touchend="touchmoveend"
        ref="carousels"
      >
        <el-carousel-item v-for="(item, index) in textOne" :key="index">
          <li
            class="covers"
            :class="{
              tops: index == 2
            }"
          >
            <dl>
              <dt>0{{ index + 1 }}</dt>
              <dd>
                <p
                  v-for="(itemA, indexA) in item"
                  :key="indexA"
                  :class="{
                    one: item.length == 1,
                    two: item.length == 2
                  }"
                >
                  {{ itemA }}
                </p>
              </dd>
            </dl>
          </li>
        </el-carousel-item>
      </el-carousel>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive, getCurrentInstance, ref, onMounted } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/H-faq.less')

const textOne = reactive([
  [
    'I have a marketing proposal. how can i reach you?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ],
  [
    'I have a marketing proposal. how can i reach you?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ],
  [
    'When is the presale?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ],
  [
    'How can i join the presale?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ],
  [
    'How can i buy $LP?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ],
  [
    'I have a marketing proposal. how can i reach you?',
    'The Presale is TBA. Please join us on Telegram and Twitter and apply for whitelist.'
  ]
])

const faqDl = ref<HTMLElement>()
let faqDls: any
const forFun = () => {
  for (let index = 0; index < faqDls.length; index++) {
    faqDls[index].style.opacity = '0.3'
  }
}

const carouselChange = (index: number) => {
  forFun()
  faqDls[index * 2].style.opacity = '1'
}

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
let carousels = ref<any>()
const touchmoveend = () => {
  if (direction == 'left') {
    carousels.value.next()
  } else if (direction == 'right') {
    carousels.value.prev()
  }
}
onMounted(() => {
  faqDls = faqDl.value?.getElementsByClassName('two')
  forFun()
  faqDls[0].style.opacity = '1'
})
</script>

<style scoped></style>
