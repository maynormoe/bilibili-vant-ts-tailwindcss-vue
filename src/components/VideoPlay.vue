<template>
  <video controls playsinline preload="metadata" crossorigin="anonymous" class="videoPlay" :src="videoInfo.videoSrc" :poster="videoInfo.poster">
  </video>
</template>

<script setup lang="ts">
import type {PropType} from "vue";

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
  }
})


</script>

<style scoped>

</style>