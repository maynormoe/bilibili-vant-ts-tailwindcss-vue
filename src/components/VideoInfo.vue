<template>
  <div class="video-info">
    <div class="video-title">
      这是一个案例
      {{ videoInfo.videoTitle }}
    </div>
    <div class="author-info">
      <div class="author-icon">
        <img :src="videoInfo.authorIconSrc">
      </div>
      <div class="author-name" >
        <span>我是作者{{videoInfo.author}}</span>
      </div>
      <div class="play-count">
        观看数量{{videoInfo.playCount}}
      </div>
      <span>
        <i class="iconfont dianzan"></i>
        <span>{{ videoInfo.likeCount }}</span>
      </span>
      <span>
        <i class="iconfont icon_fav"></i>
        <span>{{ videoInfo.favCount }}</span>
      </span>
    </div>

  </div>
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

<style lang="css">
.video-info {
  padding: 3vw 2vw;
  width: 100%;
  height: 22vw;
  background: white;
  border: 1px solid #ddd;
  font-family: sans-serif;

}
.video-title {
  margin-left: 1.33333vmin;
  font-size: 4.26667vmin;
  font-weight: 400;
  display: inline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #18191c;
  vertical-align: middle;
}
.author-info {
  padding: 3vw 2vw;
}
.author-info {
  display: flex;
}
.author-icon {
  display: inline-block;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  margin: 0 1vw;
  background: url("@/assets/img/loading.png");

}
.author-name {
  color: #212121;
  font-size: 3vw;
}
.play-count {
  margin-left: 35vw;
  font-size: 3vw;
  color: #505050;
}
.iconfont {
  color: #757575;
  font-size: 5vw;
  margin-right: 2vw;
  margin-left: 2vw;
}

</style>