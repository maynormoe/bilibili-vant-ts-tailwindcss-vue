<template>
  <LoginTop top-title="注册"></LoginTop>

  <div class="mt-20 font-sans">
    <LoginInput label="用户名" type="text" placeholder="设置你的用户名" rule="^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$" class="mb-8" @inputChange="successInput"></LoginInput>
    <LoginInput label="密码" type="password" placeholder="设置你的密码" rule="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"></LoginInput>
    <LoginInput label="确认密码" type="password" placeholder="再次输入确认你的密码" rule="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"></LoginInput>
  </div>

  <div>
    <LoginBtn btn-text="注册"></LoginBtn>
  </div>


</template>

<script setup lang="ts">
import LoginTop from "@/components/common/LoginTop.vue";
import LoginInput from '@/components/common/LoginInput.vue'

import LoginBtn from "@/components/common/LoginBtn.vue";

const successInput = () => {
  console.log("fuck")
  this.name = this.content
}


</script>

<style lang="css">

</style>