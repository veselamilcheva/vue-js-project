import Vue from 'vue'
import App from './App.vue'

export const store = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

const vm = new Vue({
  ...App
})

vm.$mount('#app');


