import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../../../axios/src/axios-auth";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {},
    usersInfo: []

  },
  mutations: {
    'ADD_USER'(state, authFormData) {
      state.usersInfo.push(authFormData);
      console.log('state.usersInfo', state.usersInfo);
    }
  },
  actions: {
    addUser({commit}, authFormData) { //extract the commit method
      commit('ADD_USER', authFormData);

      // axios.post('/signUp?key=AIzaSyD9dlwH6N-zwKx5hF8upJDGoHOjr-wITGk', {
      //   email: authFormData.email,
      //   password: authFormData.password
      // })
      //   .then(res => console.log('res from signup post',res))
      //   .catch(err => console.log('err from signup post', err))
    },

  },
  getters: {

  }
})

