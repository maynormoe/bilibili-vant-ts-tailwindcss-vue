<template>
  <div class="flex justify-center items-center m-2">
    <div class="loginTop">
      <div></div>
      <div class="font-sans text-base md:antialiased font-semibold tracking-widest">{{topTitle}}</div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['topTitle'])
</script>

<style lang="css">
.loginTop {
  height: 8.9vw;
  width: 95vw;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow:  5px 5px 10px #c3c3c3,
  -5px -5px 10px white;
  display: flex;
}
.loginTop div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>