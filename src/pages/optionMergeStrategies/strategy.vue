<template>
  <div></div>
</template>

<script>
import A from './objA';
export default {
  mixins: [A],
  name: 'xiaohong',
  love: '',
  personality: '花心',
  created () {
      console.log(this.$options.name)
      console.log(this.$options.love)
      console.log(this.$options.personality)
  },
}
</script>

<style>

</style>