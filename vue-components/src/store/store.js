import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: { //using getters so we remove some complex calculation trought the whole app
        doubleCounter: state => {
            return state.counter * 2; 
        },
        stringCounter: state => {
            return state.counter + 'Clicks';
        }
    },
    mutations: { //should be always synchronous no setTimeout and so on
        increment: state => {
            state.counter++
        },
        decrement: (state, payload) => {
            state.counter-=payload; //passing payload
        }
    },
    actions: { //!! Used only for async tasks!!! can execute asyncronous code before the change from mutations
        increment: ({ commit }) => { //destructure the object and gets all in commit
            commit('increment')
        },
        decrement: ({ commit }, payload) => { 
            commit('decrement', payload)
        },
        asyncIncrement: ({ commit }, payload) => { 
            console.log(payload)
            setTimeout(() => {
                commit('increment', payload.by)
            },payload.duration)
        },
        
    }
})