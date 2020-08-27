<template>
  <div id="app">
    <div style="margin:200px 0 30px 200px">Vue.set | Vue.delete</div>
    <button style="margin-bottom: 30px" @click="btn">给对象增加一个属性</button>
    <div style="background: yellow">
      姓名：{{person.name}}
      年龄：{{person.age}}
      地址：{{person.addr}}
      爱好：{{person.like}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      person: {
        name: 'xming',
        age: 19
      }
    }
  },
  methods: {
    btn(){
      this.person.addr = '南京'   // 视图不更新
      console.log(this.person);  //addr: "南京"  age: 19  name: "xming"
      this.$set(this.person, 'like', '玩')  // 触发视图更新
      setTimeout(() => {
        this.$delete(this.person, 'like') // 视图更新
      }, 1000);
    }
  }
}
</script>

<style lang="less">
#app {
  
}
</style>
