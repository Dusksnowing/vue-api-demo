<template>
  <div></div>
</template>

<script>
import dog from './dog';
export default {
  mixins: [dog],
  name: 'cat',
  type: '布偶',
  created () {
      console.log(this.$options.name)
      console.log(this.$options.type)
      console.log(this.$options.eat)
  }
}
</script>

<style>

</style>