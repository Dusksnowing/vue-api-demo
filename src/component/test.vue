<template>
  <div>
    <hr style="margin: 20px 0 20px 0">
    <div>test组件中的name与count</div>
    <div>name: {{name}}</div>
    <div>count: {{count}}</div>
  </div>
</template>

<script>
import {store, mutations} from './store';

export default {
  computed: {
    count(){
      return store.count
    },
    name(){
      return store.name
    }
  }
}
</script>

<style>

</style>