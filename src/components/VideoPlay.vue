<template>

  <video controls playsinline preload="metadata" crossorigin="anonymous" class="videoPlay" :src="videoInfo.videoSrc" :poster="videoInfo.poster">
    <i class="block absolute bottom-1/2 right-1/2 w-12 h-12">
      <img src="src/assets/img/loading.png">
    </i>
  </video>

</template>

<script setup lang="ts">
import type { PropType } from "vue";

interface IVideoInfo {
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

defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})


</script>

<style scoped>

</style>