import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-deed2.firebaseio.com';
Vue.http.interceptors.push((request, next) => {
  if(request.method == 'POST') {
    request.method = 'PUT'; //interceptors
  }
  next(response => {
    response.json = () => {
      return { messages: response.body }
    }
  });
});

const vm = new Vue({
  ...App
})

vm.$mount('#app');


