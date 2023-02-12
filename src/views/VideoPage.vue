<template>
  <NavBar></NavBar>
  <VideoPlay :videoInfo="videoInfo"></VideoPlay>
</template>

<script setup lang="ts">
import NavBar from "@/components/common/NavBar.vue";
import VideoPlay from "@/components/VideoPlay.vue";
import { useRoute } from "vue-router";
const route = useRoute();

import axios from "axios";
import { ref } from "vue";

export interface IVideoInfo {
  author?: string
  authorIconSrc?: string
  commentCount?: number
  date?: string
  id?: string
  poster?: string
  playCount?: string
  likeCount?: string
  favCount?: string
  videoSrc?: string
  videoTitle?: string
}

const videoInfo = ref<IVideoInfo[]>([])

axios({
  url: '/videoDetail',
  method: 'get',
  // 根据路由对象的 id 参数发送请求获取对应的视频详情
  params: { id: route.params.id }
}).then(({ data }) => {
  videoInfo.value = data.result
  console.log('视频详情数据', data.result)
})
</script>

<style lang="css">

</style>