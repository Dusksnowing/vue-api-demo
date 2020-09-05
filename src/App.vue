<template>
  <div id="app">
    <div>
      <div class="title">介绍部分</div>
      <div>
          <li></li>
          <li></li>
      </div>

      <hr>

      <div class="title">以下是demo部分：</div>
      <demo></demo> 

    </div>
  </div>
</template>

<script>
import demo from './component/demo';

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    demo,
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
