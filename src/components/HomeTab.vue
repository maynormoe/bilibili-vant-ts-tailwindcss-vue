<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";
import navList from "@/mock/data/navList";

interface navItem {
  id: string
  text: string

}

const active = ref(0);
const list  = ref<navItem[]>([])

axios.get('/navList').then(res => {
  console.log(res.data)
  list.value = res.data.result
})
</script>

<style lang="css">

</style>