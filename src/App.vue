<template>
  <div id="app">
    <button @click="btn">我是按钮</button>
  </div>
</template>

<script>
import hit from './components/index';
export default {
  name: 'App',
  methods: {
    btn(){
      hit('hello world').$on('results', (text) => {
      console.log(text);
    })
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px;
}
</style>
