<template>
  <van-field v-model="content" :label="label" :type="type" :placeholder="placeholder" :rule="rule" @input="handlerReg"/>
</template>

<script setup lang="ts">
import {ref} from "vue";
defineProps({
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  rule: {
    type: RegExp,
    default: /.*/
  }
})

const content = ref('')

const handlerReg = () => {
  if (this.rule.test(content.value)) {

  } else {

  }
}
</script>

<style lang="css">
</style>
