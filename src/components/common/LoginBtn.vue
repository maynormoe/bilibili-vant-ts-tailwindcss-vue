<template>
  <div class="btnBox">
    <BUTTON class="loginBtn" @click="registerClick">{{btnText}}</BUTTON>
  </div>

</template>

<script setup lang="ts">
defineProps(['btnText'])

const registerClick = () => {
  this.$emit('submitRegister')
}
</script>

<style lang="css">
.btnBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginBtn {
  height: 10vw;
  width: 40vw;
  background: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;

}
</style>