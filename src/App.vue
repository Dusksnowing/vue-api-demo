<template>
  <div id="app">
    <div id="title">
      <div v-hello="'自定义指令'"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  directives: {
    hello: {
      bind(el, binding, vnode, oldVnode, expression){
        console.log('bind', el, binding, vnode, oldVnode, expression);
        el.innerText = binding.value
        el.style.color = 'red'
        el.style.fontSize = '40px'
      },
      inserted(el, binding, vnode, oldVnode){
        console.log('inserted', el, binding, vnode, oldVnode);
      },
      update(el, binding, vnode, oldVnode){
        console.log('update', el, binding, vnode, oldVnode);
      },
      componentUpdated(el, binding, vnode, oldVnode){
        console.log('componentUpdated', el, binding, vnode, oldVnode);
      },
      unbind(el, binding, vnode, oldVnode){
        console.log('unbind', el, binding, vnode, oldVnode);
      },
    
    }
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
#title{
  margin-bottom: 30px;
}
</style>
