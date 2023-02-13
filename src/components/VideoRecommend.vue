<template>
  <div class="flex flex-wrap">
    <VideoItemCard v-for="item in list" :video="item" :key="item.id"></VideoItemCard>
  </div>
</template>

<script setup lang="ts">
import VideoItemCard from "@/components/common/VideoItemCard.vue";

import { ref } from "vue";
import axios from "axios";

interface recommendList {
  id: string,
  link: string,
  imgSrc: string,
  desc: string,
  playCount: string,
  commentCount: string,
  videoSrc: string
}

const list = ref<recommendList[]>([])

axios.get('/recommendList').then(res => {
  console.log(res.data)
  list.value = res.data.result
})



</script>

<style lang="css">

</style>