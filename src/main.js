import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.optionMergeStrategies.name = function (from, self) {
  return self ? self: from
}

Vue.config.optionMergeStrategies.type = function (from, self) {
  return self ? self: from
}

Vue.config.optionMergeStrategies.eat = function (from, self) {
  return self ? self: from
}
new Vue({
  render: h => h(App),
}).$mount('#app')
