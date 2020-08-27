<template>
  <div id="app">
    <div>
      <div>2、vue.$nextTick(callback): 当dom发生变化，更新后执行回调</div>

      <div id="button1" @click="pushlist">按钮</div>
      <p v-for="item in list" :key=item>{{item}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return  {
      list: [0, 1, 2, 3, 4]
    }
  },
  methods: {
    pushlist(){
      this.list.push(...[5,6])
      let a = document.getElementsByTagName('p')
      console.log('直接打印', a);
      this.$nextTick(()=>{
        let b = document.getElementsByTagName('p')
        console.log('使用$nextTick', b);
      })
    }
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  justify-content: center;
}
#button1{
  margin-top: 100px;
  width: 100px;
  height: 50px;
  background:cornflowerblue;
  line-height: 50px;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 40px;
}
#button2{
  width: 100px;
  height: 50px;
  background: tomato;
  line-height: 50px;
  border-radius: 6px;
  text-align: center;
}
</style>
