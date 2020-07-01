import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter); //registering routing

const router = new VueRouter({
  routes,
  mode: 'history', //remove # from url only if the server is configured to give you index.html
  scrollBehavior(to, from, savePosition) {
    // if(savedPosition) {
    //   return savedPosition;
    // }
    if(to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 700 }
  }
});
//executes on each router actions
router.beforeEach((to, from, next) => {
  next(); //to continue with the next path pass path if needs to redirect
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


