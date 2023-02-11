<template>
  <div class="videoList">
    <VideoItemCard v-for="item in videoList" :key="item.id" :video="item"></VideoItemCard>
  </div>

</template>

<script setup lang="ts">
import VideoItemCard from "@/components/common/VideoItemCard.vue";
import axios from "axios";
import {ref} from "vue";

interface videoItem {
  id: string,
  link: string,
  imgSrc: string,
  desc: string,
  playCount: string,
  commentCount: string,
  videoSrc: string
}

const videoList = ref<videoItem[]>([])

axios.get('/videosList').then(res => {
  console.log(res.data)
  videoList.value = res.data.result
})

</script>

<style lang="css">
.videoList {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>