<template>
  <div class="container">
   <p>{{ text | toUpperCase | to-lowercase }}</p>
   <button @click="fruits.push('Berries')">Click</button> <!-- Only effects the data change per component, use store otherwise-->
   <input type="text" v-model="filteredText"/>
   <ul>
     <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
   </ul>
   <hr>
   <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixins';

export default {
  data() {
    return {
     text: 'Test!!!',
    };
  },
  mixins: [fruitMixin],

  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {

  },
  methods: {
   
  },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
