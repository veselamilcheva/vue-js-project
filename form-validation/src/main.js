import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import Vuelidate from 'vuelidate'
import VueTableDynamic from 'vue-table-dynamic'


Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueTableDynamic)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
