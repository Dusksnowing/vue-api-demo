import Vue from 'vue'

let storeObj = {
  name: 'zzx',
  count: 1
} 

let store = Vue.observable(storeObj)

let mutations = {
  setName (name) {
    store.name = name
  },
  setCount(count) {
    store.count = count
  }
}

export {
  store,
  mutations
}