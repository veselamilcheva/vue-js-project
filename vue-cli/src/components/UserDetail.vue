<template lang="html">

  <section class="app-user-detail">
    <h1>User Detail</h1>
    <p>New name: {{ name }}</p>
    <p>UserAge {{ userAge }}</p>
    <button @click="resetName">Reset name</button>
    <button @click="resetFn()">Reset name </button>
  </section>

</template>

<script lang="js">
  import { store } from '../main';

  export default  {
    name: 'app-user-detail',
    props: {
      name: {
        type: String,
        required: true,
        //default: 'test',
      },
      userAge: Number,
      resetFn: Function //trough props and executing a callbak
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      resetName() {
        this.name = 'Max';
        this.$emit('resetName', this.name); //custom event
      }
    },
    created() {
      store.$on('ageWasEdited', (age) => {
        this.userAge =  age;
      } );
    },
    computed: {

    }
}
</script>

<style scoped>
.app-user-detail {
  width: 50%;
  background: #e9967a;
}
</style>
