<template>
<RouterLink to="/video/`${video.id}`" class="v-card">
  <div class="card">
    <div class="cardImg">
      <img :src="video.imgSrc">
    </div>
    <div class="count">
      <span>
        <i class="iconfont icon_shipin_bofangshu"></i>
        {{video.playCount}}
      </span>
      <span>
        <i class="iconfont icon_shipin_danmushu"></i>
        {{video.commentCount}}
      </span>
    </div>
  </div>
  <div class="videoTitle">
    <p>{{video.desc}}</p>
  </div>
</RouterLink>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

interface videoItem {
  id: string,
  link: string,
  imgSrc: string,
  desc: string,
  playCount: string,
  commentCount: string,
  videoSrc: string
}

defineProps({
  video: {
    type: Object as PropType<videoItem>,
    required: true
  }
})
</script>

<style lang="css">
.v-card{
  width: 50%;
  padding: 2vw 1vw;
}
.card {
  position: relative;
  background: #f3f3f3 url(~@/assets/img/default.png) center no-repeat;
  background-size: 36%;
  border-radius: 0.53333vw;
  overflow: hidden;
}
.cardImg img {
  height: 100px;
  width: 100%;
  object-fit: cover;
}
.count {
  background-image: linear-gradient(0deg, #000000d9, #0000);
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2vw 1.5vw;
}
.count span i {
  font-size: 3vw;
}
.videoTitle p{
  margin-top: 1.5vw;
  font-size: 3.2vw;
  color: #212121;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>