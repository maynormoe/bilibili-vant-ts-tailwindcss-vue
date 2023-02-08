<template>
  <LoginTop :top-title="registerTitle"></LoginTop>
</template>

<script setup lang="ts">
import LoginTop from "@/components/common/LoginTop.vue";
import { ref } from "vue";
let registerTitle = ref("注册");

</script>

<style lang="css">

</style>