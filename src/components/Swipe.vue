<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
    <van-swipe-item v-for="item in swipeList" :key="item.imgSrc">
      <img :src="item.imgSrc">
    </van-swipe-item>
  </van-swipe>

</template>

<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";

interface swipeItem {
  id: string
  link: string
  imgSrc: string
}

const swipeList = ref<swipeItem[]>([])

axios.get('/swiperList').then(res => {
  console.log(res.data)
  swipeList.value = res.data.result
})
</script>

<style lang="css">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>