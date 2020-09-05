<template>
  <div class="demo">
    <div class="title">使用Vue.observable()进行状态管理, 做一个简单的vuex</div>
    <button @click="addCount(count+1)">使count++</button>
    <button @click="setName('小红')">改变名字成‘小红’</button>
    <div>demo组件中的name与count</div>
    <div>name: {{name}}</div>
    <div>count: {{count}}</div>
  </div>
</template>

<script>
import {store, mutations} from './store';
export default {
    data() {
      return {
      }
    },
    computed: {
      count(){
        return store.count
      },
      name(){
        return store.name
      }
    },
    methods: {
      addCount: mutations.setCount,
      setName: mutations.setName
    }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  color: cadetblue;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>