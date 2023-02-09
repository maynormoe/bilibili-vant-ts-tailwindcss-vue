<template>
  <NavBar></NavBar>
  <img src="src/assets/img/bannerTop.png" class="banner">
  <UserDetail></UserDetail>
</template>

<script setup lang="ts">
import NavBar from "@/components/common/NavBar.vue";
import UserDetail from "@/components/UserDetail.vue";

</script>

<style lang="css">
.banner {
  width: 100vmin;
  height: 24vmin;
}
</style>