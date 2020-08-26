<template>
  <div>
    <transition>
      <div id="box" v-show="visible">{{msg}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      visible: true,
      msg: ''
    }
  },
  methods: {
    close(){
      setTimeout(() => {
        this.$emit('results', 'test')
        this.visible = false
        this.$el.remove
      }, 2000);
    }
  },
  mounted(){ this.close() },
}
</script>

<style>
#box {
  padding: 20px;
  color: teal;
  background:#D1D2D4;
  font-size: 20px;
  width: 200px;
  margin: 0 auto;
}
</style>