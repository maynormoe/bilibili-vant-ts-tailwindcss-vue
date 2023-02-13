<template>
  <van-tabs v-model:active="active">
    <van-tab title="推荐" name="recommend">
      <VideoRecommend></VideoRecommend>
    </van-tab>
    <van-tab title="评论">
      <VideoComment></VideoComment>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VideoRecommend from "@/components/VideoRecommend.vue";
import VideoComment from "@/components/VideoComment.vue";

const active = ref("recommend")
</script>

<style lang="css">

</style>