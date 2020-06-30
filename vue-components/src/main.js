import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    let delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 2000;
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    },delay)
  }
})

const vm = new Vue({
  ...App
})

vm.$mount('#app');


