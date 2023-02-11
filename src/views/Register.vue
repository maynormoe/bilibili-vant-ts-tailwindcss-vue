<template>
  <LoginTop top-title="注册"></LoginTop>

  <div class="mt-20 font-sans">
    <LoginInput label="用户名" type="text" placeholder="设置你的用户名" rule="^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$" class="mb-8" @inputChange="successInput"></LoginInput>
    <LoginInput label="密码" type="password" placeholder="设置你的密码" rule="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$" @inputChange="successInput"></LoginInput>
    <LoginInput label="确认密码" type="password" placeholder="再次输入确认你的密码" rule="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$" @inputChange="successInput"></LoginInput>
  </div>

  <div class="flex flex-1 justify-center items-center">
    <LoginBtn btn-text="注册" @submitRegister="submitRegister" @click="goUserInfo"></LoginBtn>
    <LoginBtn btn-text="切换到登录" @click="goLogin"></LoginBtn>
  </div>


</template>

<script setup lang="ts">
import LoginTop from "@/components/common/LoginTop.vue";
import LoginInput from '@/components/common/LoginInput.vue'
import LoginBtn from "@/components/common/LoginBtn.vue";

import router from "@/router";

import { reactive } from "vue";

const userInfo = reactive({
  username: '',
  password: '',
  entryPasswd: ''
});

const successInput = () => {
  userInfo.username = this.content
  userInfo.password = this.content
  userInfo.entryPasswd = this.content


}

const submitRegister = async () => {

  if (userInfo.username!=null && userInfo.password!=null && userInfo.entryPasswd!=null) {
    if (userInfo.entryPasswd == userInfo.password ) {
      console.log("success")
      const res = await this.$http.post('/register',{
        username: userInfo.username,
        password: userInfo.password
      }).then((res: any) => {
        //
      });
    }
  }
}
const goLogin = () => {
  router.push('/login')
}

const goUserInfo = () => {
  router.push('/userinfo')
}




</script>

<style lang="css">

</style>