<template>
  <div id="bottom">
    <dl class="flexw">
      <dt>
        <img src="@/assets/img/nftcool-Mobile/title.png" alt="" />
      </dt>
      <dd class="pc">
        <ul>
          <li>
            Building the decentralized NFT marketplace we all deserve: By the
            people, for the people.
          </li>
          <li>© 2022 NFT.Cool</li>
        </ul>
      </dd>
      <dd class="flexw">
        <img
          src="@/assets/img/nftcool-Mobile/twitter.png "
          alt=""
          class="cursor"
        />
        <img
          src="@/assets/img/nftcool-Mobile/facebook.png"
          alt=""
          class="cursor"
        />
        <img
          src="@/assets/img/nftcool-Mobile/instagram.png"
          alt=""
          class="cursor"
        />
        <img
          src="@/assets/img/nftcool-Mobile/google.png"
          alt=""
          class="cursor"
        />
      </dd>
    </dl>
    <div class="phone bottomUl">
      <ul>
        <li>
          Building the decentralized NFT marketplace we all deserve: By the
          people, for the people.
        </li>
        <li>© 2022 NFT.Cool</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/I-bottom.less')
</script>

<style scoped></style>
