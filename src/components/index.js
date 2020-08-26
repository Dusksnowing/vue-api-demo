import Vue from 'vue';
import message from './message.vue';
let Message = Vue.extend(message)

let instance
let myMessage = function (msg) {
  instance = new Message({
    data: {
      msg: msg
    }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

export default myMessage