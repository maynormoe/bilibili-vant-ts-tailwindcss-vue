<template>
    <van-field v-model="content" :label="label" :type="type" :placeholder="placeholder" :rule="rule" />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const content:  Ref<string>= ref('');
// 处理正则表达式
const handlerReg = function (){
  const reg = new RegExp(this.rule)
  if (reg.test(content)) {
    this.$emit('inputChange',content)
  }
}

watch(() => content.value,() => {
  handlerReg()
})

</script>

<style lang="css">

</style>