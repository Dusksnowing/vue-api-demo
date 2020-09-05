<template>
  <div id="app">
    <div>
      <div class="title">Vue.observable()：</div>
      <ul>
        <li>让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象</li>
        <li>返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景</li>
      </ul>
      <pre>
        const state = Vue.observable({ count: 0 })

        const Demo = {
          render(h) {
            return h('button', {
              on: { click: () => { state.count++ }}
            }, `count is: ${state.count}`)
          }
        }
      </pre>

      <hr>
      <div class="title">以下是demo部分：</div>
      
    
      <demo></demo> 
      <test></test>  

    </div>
  </div>
</template>

<script>
import demo from './component/demo';
import test from './component/test';

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    demo,
    test,
  }
}
</script>

<style lang="less" scoped>
#app {
  display: flex;
  justify-content: center;
  padding: 40px;
}

pre {
  background: #EDF0F4;
  border-radius: 4px;
  width: 600px;
  padding: 10px;
}
hr {
  margin: 40px 0 40px 0;
}
.title {
  font-size: 30px;
  font-weight: 600;
  color: darkcyan;
  margin-bottom: 10px;
}
</style>
