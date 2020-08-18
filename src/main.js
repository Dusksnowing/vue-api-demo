import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.optionMergeStrategies.name = function (from, self) {
  return self ? self: from
}

Vue.config.optionMergeStrategies.love = function (from, self) {
  return self ? self: from
}

Vue.config.optionMergeStrategies.personality = function (from, self) {
  return self === '花心' ? '专一' : '花心'
}
new Vue({
  render: h => h(App),
}).$mount('#app')
