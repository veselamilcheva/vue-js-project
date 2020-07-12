import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

//setup global config
axios.defaults.baseURL = 'https://axios-e67a0.firebaseio.com';
//axios.defaults.headers.comon['Authorization'] = 'fssf';
axios.defaults.headers.get['Accepts'] =  'application/json';

//interceptors are executed for every request that leaves the app or every response that reaches it

axios.interceptors.request.use(config => {
  console.log('config', config);
  config.headers['SOMETHING'] = 'testing'
  return config
})

const requestinterceptors = axios.interceptors.request.use(res => {
  console.log('res',res);
  return res
})

//remove interceptors
axios.interceptors.request.eject(requestinterceptors);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
