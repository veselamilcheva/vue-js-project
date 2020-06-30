import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('global mixins !!!caution')
  }
}) 

const vm = new Vue({
  ...App
})

vm.$mount('#app');


