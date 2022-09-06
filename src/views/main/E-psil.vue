<template>
  <div id="psil">
    <p><span class="fontColor">Private</span></p>
    <p><span class="fontColor">Sale is Live</span></p>
    <div class="coin">
      <img src="../../assets/img/nftcool-Mobile/icon.png" alt="" />
      <dl class="flexh">
        <dt>Private sale price:</dt>
        <dd>1 ETH = 10,000 $Cool</dd>
      </dl>
      <dl class="flexh">
        <dt>Private sale supply:</dt>
        <dd>3,000,000</dd>
      </dl>
    </div>
    <div class="coinText">
      <p class="over">
        Use your wallet to send ETH to the Private sale address. Our system will
        send $COOL tokens to your wallet instantly.
      </p>
      <p>
        The minimum purchase is 0.1 ETH, and the maximum purchase is 10 ETH.
      </p>
      <dl class="flexw">
        <dd>
          <span>You send</span>
          <ul class="flexw">
            <input type="text" v-model="inputValue" />
            <li>ETH</li>
          </ul>
        </dd>
        <dd>=</dd>
        <dd>
          <span>You will receive</span>
          <p>10,000 $Cool</p>
        </dd>
        <dt class="flexc pc cursor"><p>Claim</p></dt>
      </dl>
      <div class="phone coinClaim flexc">Claim</div>
      <p class="coinTextBottom">
        Do not Send more than 10 ETH or less than 0.1 ETH, otherwise the smart
        contract will send back the rest part.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'

const { proxy } = getCurrentInstance() as any
proxy.$req('main/E-psil.less')

let inputValue = ref(1)
</script>

<style scoped></style>
